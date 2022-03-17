import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

import type { ExtendedApiRequest, ExtendedApiResponse } from 'types';
import { Prisma } from '@/api/db';
import {
  ERR_EMAIL_NOT_FOUND,
  ERR_INVALID_PASSWORD,
  ERR_USER_NOT_FOUND,
  errorMsg,
  ERR_INVALID_TOKEN,
  httpStatus,
  success,
  badRequest,
  unauthorized,
} from '@/api/utils/http/';

interface Payload {
  iss: string;
  sub: number | string;
  exp: number | string;
  data: {
    userId: number | string;
  };
}

const generateJwtToken = (payload: Payload) => new Promise((resolve) => {
  JWT.sign(payload, String(process.env.SECRET_JWT_KEY), (err, token) => {
    if (err) {
      throw badRequest({
        name: ERR_INVALID_TOKEN,
        message: errorMsg.ERR_INVALID_TOKEN,
      });
    }
    resolve(token);
  });
});

const signup = async (
  req: ExtendedApiRequest,
  res: ExtendedApiResponse,
) => {
  try {
    const { pass: password, email } = req.body;

    const user = await Prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw unauthorized({
        name: ERR_USER_NOT_FOUND,
        message: errorMsg.ERR_USER_NOT_FOUND,
      });
    }

    const { password: userPassword } = user;

    if (!userPassword) return;

    if (!bcrypt.compareSync(password, userPassword)) {
      throw unauthorized({
        name: ERR_INVALID_PASSWORD,
        message: errorMsg.ERR_INVALID_PASSWORD,
      });
    }

    if (user.email !== email) {
      throw unauthorized({
        name: ERR_EMAIL_NOT_FOUND,
        message: errorMsg.ERR_EMAIL_NOT_FOUND,
      });
    }

    const JWTData = {
      iss: 'awesome',
      sub: user.id,
      exp: Math.floor(Date.now() / 1000) + 60 * 4,
      data: { userId: user.id, name: user.name },
    };

    const jwtToken = await generateJwtToken(JWTData);

    if (!jwtToken) {
      throw unauthorized({
        name: ERR_INVALID_TOKEN,
        message: errorMsg.ERR_INVALID_TOKEN,
      });
    }

    return res.status(200).json({
      message: success.SUCCESS_SIGNIN,
      status: httpStatus.ok,
      body: {
        token: jwtToken,
        name: user.name,
        id: user.id,
      },
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export default signup;
