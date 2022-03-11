import { ExtendedApiRequest, ExtendedApiResponse } from 'types';
import { Prisma } from '@/api/db';
import { withAuth } from '@/api/middlewares/';
import {
  badRequest, internalServerError, httpStatus, success,
} from '@/api/utils/http/';

// export const content = {
// 	blockchain: [
// 		{
// 			name: 'Tradingview',
// 			url: 'https://br.tradingview.com/chart/',
// 		},
// 	],

// 	bitcoin: [
// 		{
// 			name: 'Bitcoin Market Cycle Charts',
// 			url: 'https://www.lookintobitcoin.com/charts/',
// 		},
// 		{
// 			name: 'Bitcoin Monthly Return',
// 			url: 'https://bitcoinmonthlyreturn.com/',
// 		},
// 		{
// 			name: 'Social Intelligence for Crypto',
// 			url: 'https://lunarcrush.com/markets?col=1&metric=social_dominance',
// 		},
// 	],

// 	defi: [
// 		{
// 			name: 'DeFil Lama',
// 			url: 'https://defillama.com/',
// 		},
// 	],

// 	tools: [
// 		{
// 			name: 'Tradingview',
// 			url: 'https://br.tradingview.com/chart/',
// 		},
// 	],

// 	news: [
// 		{
// 			name: 'Coindesk',
// 			url: 'https://www.coindesk.com/',
// 		},
// 	],
// };

// export const content2 = {
// 	Typescript: [
// 		{
// 			name: 'Typescript src',
// 			url: 'https://br.tradingview.com/chart/',
// 		},
// 	],
// 	Javascript: [
// 		{
// 			name: 'Typesc',
// 			url: 'https://br.tradingview.com/chart/',
// 		},
// 	],
// };

const handler = async (
  req: ExtendedApiRequest,
  res: ExtendedApiResponse,
): Promise<void> => {
  switch (req.method) {
    case 'GET':
      return getAwesome();
    case 'DELETE':
      return deleteAwesome();
    default:
  }

  async function deleteAwesome(): Promise<void> {
    const { title_id: titleId } = req.query;

    const title_id = titleId.toString();

    if (!title_id) {
      throw badRequest({
        message: 'Title is required',
      });
    }

    try {
      const deletedTitle = await Prisma.title.delete({
        where: { id: title_id },
      });

      const deletedContent = await Prisma.content.delete({
        where: { id: deletedTitle.content_id },
      });

      if (!deletedContent || !deletedTitle) {
        throw internalServerError({
          message: 'You are not allowed to delete this awesome',
        });
      }

      const awesomeTitles = await Prisma.title.findMany({
        where: { user_id: req.user.id },
      });

      return res.status(200).json({
        awesomeTitles,
      });
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  async function getAwesome(): Promise<void> {
    try {
      const user_id = req.user.id;
      const { page } = req.query;
      const ref = page.toString();

      if (!user_id || !ref) {
        throw badRequest({
          message: 'User id or page is required',
        });
      }

      const title = await Prisma.title.findFirst({
        where: { AND: { title: ref, user_id } },
      });

      const content = await Prisma.content.findFirst({
        where: { AND: { id: title?.content_id, user_id } },
      });

      if (!title || !content) {
        throw internalServerError({
          message: 'Page not found',
        });
      }

      const data = {
        title: title.title,
        content: content.content_item,
        content_id: content.id,
        title_id: title.id,
      };

      return res.status(200).json({
        message: `Success to get awesome ${title.title}`,
        status: httpStatus.ok,
        ...data,
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
};

export default withAuth(handler);
