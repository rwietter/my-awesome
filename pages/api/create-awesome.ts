import { ExtendedApiRequest, ExtendedApiResponse } from 'types';
import { badRequest, internalServerError } from './utils/http/http-helper';
import { Prisma } from '@/api/db';
import { withAuth } from '@/api/middlewares/';

type Title = {
  id: string;
  title: string;
};

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

    const content = JSON.stringify(contentItem);

    if (!content) return res.json({ error: true });

    const userContents = await Prisma.content.findMany({
      where: { user_id },
    });

    userContents.forEach((contents: any) => {
      if (contents.content_item === content) {
        throw badRequest({
          message: 'Duplicated content',
        });
      }
    });

    const createdContent = await Prisma.title.create({
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

    if (!createdContent) {
      throw internalServerError({
        message: 'The content could not be created',
      });
    }

    // const createdTitle: Title = await Prisma.title.create({
    //   data: { title: awesomeTitle, content_id: createdContent.id, user_id },
    // });

    // if (!createdTitle) {
    //   throw internalServerError({
    //     message: 'The title of content could not be created',
    //   });
    // }

    return res.status(200).json({
      message: 'Successful create awesome',
      status: 200,
    });
  } catch (error: any) {
    return res.status(error.status ?? 500).json(error);
  }
};

export default withAuth(createAwesome);
