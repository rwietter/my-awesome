// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma } from './db/db';

import type { NextApiRequest, NextApiResponse } from "next";
export const index = ["blockchain", "bitcoin", "defi", "tools", "news"];

export const index2 = ["Typescript", "Javascript"];

export const content = {
  blockchain: [
    {
      name: "Tradingview",
      url: "https://br.tradingview.com/chart/",
    },
  ],

  bitcoin: [
    {
      name: "Bitcoin Market Cycle Charts",
      url: "https://www.lookintobitcoin.com/charts/",
    },
    {
      name: "Bitcoin Monthly Return",
      url: "https://bitcoinmonthlyreturn.com/",
    },
    {
      name: "Social Intelligence for Crypto",
      url: "https://lunarcrush.com/markets?col=1&metric=social_dominance",
    },
  ],

  defi: [
    {
      name: "DeFil Lama",
      url: "https://defillama.com/",
    },
  ],

  tools: [
    {
      name: "Tradingview",
      url: "https://br.tradingview.com/chart/",
    },
  ],

  news: [
    {
      name: "Coindesk",
      url: "https://www.coindesk.com/",
    },
  ],
};

export const content2 = {
  Typescript: [
    {
      name: "Typescript src",
      url: "https://br.tradingview.com/chart/",
    },
  ],
  Javascript: [
    {
      name: "Typesc",
      url: "https://br.tradingview.com/chart/",
    },
  ],
};



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page } = req.body;
  const user_id = req.headers['x-user-id'] as string;
  
  if (!user_id) return;

  const respTitle = await Prisma.title.findFirst({ where: { AND: { title: page, user_id } } });
  const respContent = await Prisma.content.findFirst({ where: { AND: { id: respTitle?.content_id, user_id } } });

  const data = {
    title: respTitle?.title,
    content: respContent?.content_item
  };

  return res.status(200).json({ message: "", ...data });
}
