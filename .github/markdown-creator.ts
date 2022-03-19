import { ExtendedApiRequest, ExtendedApiResponse } from 'types';
import { badRequest, internalServerError } from '../pages/api/utils/http/http-helper';
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
    const { awesome, title } = req.body;
    const user_id = req.user.id;

    if (!awesome || !title) {
      throw badRequest({
        message: 'Missing content or title',
      });
    }

    const awesomeText = JSON.stringify(awesome);

    const isDuplicatedContent = await Prisma.content.findMany({
      where: { user_id },
    });

    isDuplicatedContent.forEach((contents: any) => {
      if (contents.content_item === awesomeText) {
        throw badRequest({
          message: 'Duplicated content',
        });
      }
    });

    const createdAwesome = await Prisma.content.create({
      data: { content_item: awesomeText, user_id },
    });

    if (!createdAwesome) {
      throw internalServerError({
        message: 'The content could not be created',
      });
    }

    const createdTitle: Title = await Prisma.title.create({
      data: { title, content_id: createdAwesome.id, user_id },
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
