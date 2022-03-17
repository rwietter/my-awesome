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

    if (data.length === 0) {
      return res.status(200).json({
        status: 200,
        error: false,
        message: 'Your awesome space is empty',
        content: [],
      });
    }

    if (!data) {
      throw internalServerError({
        message: 'Page not found',
      });
    }

    return res.status(200).json({
      status: 200,
      error: false,
      message: 'Success to get your awesome',
      content: {
        title: data,
      },
    });
  } catch (error: any) {
    return res.status(error.status ?? 500).json(error);
  }
}

export default withAuth(handler);
