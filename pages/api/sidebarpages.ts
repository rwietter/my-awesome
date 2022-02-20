// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "./db/db";

// type Data = {
//   name: string
// }

const data = [
  {
    label: `Crypto`,
    url: `/home`,
  },
  {
    label: `Typescript`,
    url: `/home`,
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await Prisma.title.findMany();
  return res.status(200).json(data);
}
