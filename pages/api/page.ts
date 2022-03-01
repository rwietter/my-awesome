import { ExtendedApiRequest, ExtendedApiResponse } from 'types';
import { Prisma } from '@/api/db';
import { withProtect } from '@/api/middlewares/';
import {
  badRequest, internalServerError, httpStatus, success,
} from '@/api/utils/http/';

/* eslint-disable consistent-return */
export const index = ['blockchain', 'bitcoin', 'defi', 'tools', 'news'];

export const index2 = ['Typescript', 'Javascript'];

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

const homepage = async (
  req: ExtendedApiRequest,
  res: ExtendedApiResponse,
): Promise<void> => {
  switch (req.method) {
    case 'POST':
      return getAwesome();
    case 'PUT':
      return deleteAwesome();
    default:
  }

  async function deleteAwesome(): Promise<void> {
    const { title_id } = req.body;

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

      return res.status(200).json({});
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  async function getAwesome(): Promise<void> {
    try {
      const { page } = req.body;
      const user_id = req.user.id;

      if (!user_id) return;

      const title = await Prisma.title.findFirst({
        where: { AND: { title: page, user_id } },
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
        message: success.SUCCESS_SIGNIN,
        status: httpStatus.ok,
        ...data,
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
};

export default withProtect(homepage);
