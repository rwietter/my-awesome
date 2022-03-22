import { ExtendedApiRequest, ExtendedApiResponse } from 'types';
import { badRequest, internalServerError } from './utils/http/http-helper';
import { Prisma } from '@/api/db';
import { withAuth } from '@/api/middlewares/';
import { delRedis } from '@/services/redis/redis-config';

const createAwesome = async (
  req: ExtendedApiRequest,
  res: ExtendedApiResponse,
): Promise<void> => {
  try {
    const { contentItem, title: awesomeTitle } = req.body;
    const user_id = req.user.id;

    if (!contentItem || !awesomeTitle || !user_id) {
      throw badRequest({
        message: 'Missing content or title',
      });
    }

    const content = JSON.stringify(contentItem) as string;

    if (!content) return res.json({ error: true });

    const findIfRepeatTitles = await Prisma.title.count({
      where: { title: awesomeTitle, user_id },
    });

    if (findIfRepeatTitles >= 1) {
      throw internalServerError({
        message: 'That title already exists. Please provide another title.',
      });
    }

    const createdAwesome = await Prisma.title.create({
      data: {
        title: awesomeTitle,
        user_id,
        content: {
          create: {
            content_item: content,
            user_id,
          },
        },
      },
    });

    if (!createdAwesome) {
      throw internalServerError({
        message: 'The awesome could not be created',
      });
    }

    delRedis(`awesome-titles-${user_id}`);

    return res.status(200).json({
      message: 'Successful create awesome',
      status: 200,
    });
  } catch (error: any) {
    return res.status(error.status ?? 500).json(error);
  }
};

export default withAuth(createAwesome);
