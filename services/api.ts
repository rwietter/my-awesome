import axios from 'axios';
import { NextApiRequest } from 'next';
import { parseCookies } from 'nookies';

type AdapterContext = NextApiRequest | any | undefined

export const ssrAdapter = (ctx: AdapterContext) => {
  const { 'awesome:token': token } = parseCookies(ctx);

  const adapter = axios.create({
    baseURL: '/api',
  });

  if (token) {
    adapter.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return adapter;
};

export const adapter = ssrAdapter(null);
