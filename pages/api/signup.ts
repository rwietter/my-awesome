import bcrypt from 'bcrypt';
import { ServerResponse } from 'http';

import type { NextApiRequest, NextApiResponse } from 'next';
import { Prisma } from './db/db';

import { badRequest } from './utils/http/http-helper';
import {
  error as errorMessage,
  ERR_EMAIL_ALREADY_EXISTS,
  ERR_INVALID_PARAMETER,
} from './utils/http/error-types';
import { success } from './utils/http/successful-types';
import { httpStatus } from './utils/http/status-code';

const signup = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<ServerResponse | void> => {
  try {
    const { user: name, pass, email } = req.body;

    if (!name || !pass || !email) {
      throw badRequest({
        name: ERR_INVALID_PARAMETER,
        message: errorMessage.ERR_INVALID_PARAMETER,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(pass, salt);

    const response = await Prisma.user.findUnique({ where: { email } });

    if (response?.email === email) {
      throw badRequest({
        name: ERR_EMAIL_ALREADY_EXISTS,
        message: errorMessage.ERR_EMAIL_ALREADY_EXISTS,
      });
    }

    const data = await Prisma.user.create({
      data: { email, password, name },
    });

    if (data.email) {
      return res.status(200).json({
        message: success.SUCCESS_SIGNUP,
        status: httpStatus.ok,
        body: {},
      });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
  return res.end();
};

export default signup;
