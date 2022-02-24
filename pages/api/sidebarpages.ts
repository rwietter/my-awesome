import type { NextApiResponse } from 'next';
import { ExtendedApiRequest } from '../../@types/next';
import { Prisma } from './db/db';

import { withProtect } from './middlewares/auth/auth-jwt';
import { unauthorized } from './utils/http/http-helper';
import { success } from './utils/http/successful-types';
import { httpStatus } from './utils/http/status-code';
import { error as errorMessage, ERR_USER_NOT_FOUND } from './utils/http/error-types';

async function handler(req: ExtendedApiRequest, res: NextApiResponse) {
  try {
    const user_id = req.user.id;

    if (!user_id) {
      throw unauthorized({
        name: ERR_USER_NOT_FOUND,
        message: errorMessage.ERR_USER_NOT_FOUND,
      });
    }

    const data = await Prisma.title.findMany({ where: { user_id } });

    return res.status(200).json({
      message: success.SUCCESS_SIGNIN,
      status: httpStatus.ok,
      body: {
        title: data,
      },
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

export default withProtect(handler);
