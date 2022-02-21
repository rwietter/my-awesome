// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma } from './db/db';

import type { NextApiRequest, NextApiResponse } from 'next';
// type Data = {
//   name: string
// }

const data = [
  {
    label: 'Crypto',
    url: '/home',
  },
  {
    label: 'Typescript',
    url: '/home',
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user_id = req.headers['x-user-id']?.toString();

  if (!user_id) return;

  const data = await Prisma.title.findMany({ where: { user_id } });
  return res.status(200).json(data);
}
