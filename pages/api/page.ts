/* eslint-disable no-tabs */
import { ExtendedApiRequest, ExtendedApiResponse } from '../../@types/next';
import { Prisma } from './db/db';
import { withProtect } from './middlewares/auth/auth-jwt';
import { badRequest } from './utils/http/http-helper';
import { httpStatus } from './utils/http/status-code';
import { success } from './utils/http/successful-types';
import { log } from './utils/log';

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
  try {
    const { page } = req.body;
    const user_id = req.user.id;

    log({
      path: 'api:homepage',
      message: `params: page : ${page} and user_id : ${req.url}`,
    });

    if (!user_id) return;

    const title = await Prisma.title.findFirst({
      where: { AND: { title: page, user_id } },
    });

    const content = await Prisma.content.findFirst({
      where: { AND: { id: title?.content_id, user_id } },
    });

    if (!title || !content) {
      throw badRequest({
        name: 'Bad Request',
        message: 'Page not found',
      });
    }

    const data = {
      title: title.title,
      content: content.content_item,
    };

    return res.status(200).json({
      message: success.SUCCESS_SIGNIN,
      status: httpStatus.ok,
      body: {
        ...data,
      },
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export default withProtect(homepage);
