import { NextApiResponse } from 'next';
import { ExtendedApiRequest } from '../../@types/next';
/* eslint-disable consistent-return */

import { Prisma } from './db/db';
import { withProtect } from './middlewares/auth/auth-jwt';

type Title = {
  id: string;
  title: string;
};

const createAwesome = async (
  req: ExtendedApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const { contentItem, title: awesomeTitle } = req.body;
    const user_id = req.user.id;

    if (!user_id) return;

    const content = JSON.stringify(contentItem);

    if (!content) return;

    console.log('contentItem', contentItem);
    console.log('awesomeTitle', awesomeTitle);
    console.log('user_id', user_id);

    const { content_item, id: content_id } = await Prisma.content.create({
      data: { content_item: content, user_id },
    });

    const { id: title_id, title }: Title = await Prisma.title.create({
      data: { title: awesomeTitle, content_id, user_id },
    });

    console.log('title_id', title_id);
    console.log('title', title);

    return res.status(200).json({
      message: 'Successful create awesome',
      title,
      content_item,
      title_id,
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

export default withProtect(createAwesome);
