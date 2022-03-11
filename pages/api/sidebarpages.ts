import { ExtendedApiRequest, ExtendedApiResponse } from 'types';
import { httpStatus } from '@/api/utils/http/';
import { Prisma } from '@/api/db';
import { withAuth } from '@/api/middlewares/';
import {
  ERR_USER_NOT_FOUND, errorMsg, success, internalServerError, unauthorized,
} from '@/api/utils/http';

async function handler(req: ExtendedApiRequest, res: ExtendedApiResponse) {
  try {
    const user_id = req.user.id;

    if (!user_id) {
      throw unauthorized({
        name: ERR_USER_NOT_FOUND,
        message: errorMsg.ERR_USER_NOT_FOUND,
      });
    }

    const data = await Prisma.title.findMany({ where: { user_id } });

    if (!data[0]) {
      throw internalServerError({
        message: 'Page not found',
      });
    }

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

export default withAuth(handler);
