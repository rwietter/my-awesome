import { ExtendedApiRequest, ExtendedApiResponse } from '../../@types/next';
import { Prisma } from './db/db';
import { withProtect } from './middlewares/auth/auth-jwt';
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
		const user_id = req.headers['x-user-id'] as string;

		log({
			path: 'api:homepage',
			message: `params: page:${page} and user_id:${user_id}`,
		});

		if (!user_id) return;

		const title = await Prisma.title.findFirst({
			where: { AND: { title: page, user_id } },
		});

		const content = await Prisma.content.findFirst({
			where: { AND: { id: title?.content_id, user_id } },
		});

		if (!title || !content) {
			throw new Error('Title or content not found');
		}

		const data = {
			title: title.title,
			content: content.content_item,
		};

		return res.status(200).json({ message: '', ...data });
	} catch (error) {
		return res.status(400).json({ message: '', error });
	}
};

export default withProtect(homepage);
