import { NextApiResponse } from 'next';

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

    if (!contentItem || !awesomeTitle) {
      throw badRequest({
        message: 'Missing content or title',
      });
    }

    const content = JSON.stringify(contentItem);

    const isDuplicatedContent = await Prisma.content.findMany({
      where: { user_id },
    });

    isDuplicatedContent.forEach((contents: any) => {
      if (contents.content_item === content) {
        throw badRequest({
          message: 'Duplicated content',
        });
      }
    });

    if (!isDuplicatedContent) {
      throw internalServerError({
        message: 'Content is duplicated',
      });
    }

    const createdContent = await Prisma.content.create({
      data: { content_item: content, user_id },
    });

    if (!createdContent) {
      throw internalServerError({
        message: 'The content could not be created',
      });
    }

    const createdTitle: Title = await Prisma.title.create({
      data: { title: awesomeTitle, content_id: createdContent.id, user_id },
    });

    if (!createdTitle) {
      throw internalServerError({
        message: 'The title of content could not be created',
      });
    }

    return res.status(200).json({
      message: 'Successful create awesome',
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

export default withAuth(createAwesome);
