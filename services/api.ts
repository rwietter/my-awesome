import axios from 'axios';
import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';
import { parseCookies } from 'nookies';

type AdapterContext = NextApiRequest | any | undefined

// export const ssrAdapter = (ctx: AdapterContext) => {
// const { 'awesome:token': token } = parseCookies(ctx);

// const adapter = axios.create({
//   baseURL: 'http://localhost:3000',
// });

// if (token) {
//   adapter.defaults.headers.common.Authorization = `Bearer ${token}`;
// }

//   return adapter;
// };

const ssrAdapter = () => {
  const adapter = axios.create({
    baseURL: 'http://localhost:3000/',
  });
  return adapter;
};

export const adapter = ssrAdapter();
