import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

import { Prisma } from './db/db';

import type { NextApiRequest, NextApiResponse } from "next";

const generate = (payload: Payload) =>
  new Promise((resolve) => {
    JWT.sign(payload, String(process.env.SECRET_JWT_KEY), (err, token) => {
      if (err) {
        throw new Error(`Invalid token: ${err}`);
      }
      resolve(token);
    });
  });

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { pass: password, email } = req.body;

    const user = await Prisma.user.findUnique({ where: { email } });

    if (!bcrypt.compareSync(password, user!.password)) {
      return res.status(401).json({ message: "Invalid password" });
    }

    if (user?.email !== email) {
      return res.status(401).json({ message: "Email or password incorrect" });
    }

    const JWTData = {
      iss: `awesome`,
      sub: user!.id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: {
        userId: user!.email,
      },
    };
    
    const jwtToken = await generate(JWTData);

    return res.status(200).json({ message: "Successful signin", token: jwtToken, user_id: user?.id });
  } catch (error) {
    return res.status(404).json({ message: "Unable to login" });
  }
}

type Payload = {
  iss: string;
  sub: number | string;
  exp: number;
  data: {
    userId: number | string;
  };
};
