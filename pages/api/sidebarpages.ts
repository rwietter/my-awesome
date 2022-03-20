import { ExtendedApiRequest, ExtendedApiResponse } from 'types';
import { Title } from '@prisma/client';
import { Prisma } from '@/api/db';
import { withAuth } from '@/api/middlewares/';
import {
  ERR_USER_NOT_FOUND, errorMsg, internalServerError, unauthorized,
} from '@/api/utils/http';
import { getRedis, setRedis } from '@/services/redis/redis-config';

async function handler(req: ExtendedApiRequest, res: ExtendedApiResponse) {
  try {
    const user_id = req.user.id;

    if (!user_id) {
      throw unauthorized({
        message: 'User is not found',
      });
    }

    const redisData = await getRedis(`awesome-titles-${user_id}`).then((parseData: any) => JSON.parse(parseData)) as unknown as Title;

    if (redisData) {
      return res.status(200).json({
        status: 200,
        error: false,
        message: 'Success to get your awesome',
        content: {
          title: redisData,
        },
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
        message: 'There is no record for this user',
      });
    }

    if (data.length > 0) {
      setRedis(`awesome-titles-${user_id}`, JSON.stringify(data));
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
