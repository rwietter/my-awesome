import bcrypt from 'bcrypt';

import type { ExtendedApiRequest, ExtendedApiResponse } from '../types';
import { Prisma } from '../pages/api/db';

import {
  errorMsg,
  ERR_EMAIL_ALREADY_EXISTS,
  ERR_INVALID_PARAMETER,
  badRequest,
  success,
  httpStatus,
} from '../pages/api/utils/http';

const signup = async (
  req: ExtendedApiRequest,
  res: ExtendedApiResponse,
) => {
  try {
    const { user: name, email } = req.body;

    const response = await Prisma.user.findUnique({ where: { email } });

    if (response?.email === email) {
      throw badRequest({
        name: ERR_EMAIL_ALREADY_EXISTS,
        message: errorMsg.ERR_EMAIL_ALREADY_EXISTS,
      });
    }

    const data = await Prisma.user.create({
      data: { email, password: '', name },
    });

    if (data.email) {
      return res.status(200).json({
        message: success.SUCCESS_SIGNUP,
        status: httpStatus.ok,
      });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export default signup;
