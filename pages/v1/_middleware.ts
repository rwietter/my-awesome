import JWT from 'jsonwebtoken';

import { NextRequest, NextResponse } from 'next/server';
import { error, ERR_INVALID_TOKEN } from '../api/utils/http/error-types';
import { unauthorized } from '../api/utils/http/http-helper';

export function middleware(req: NextRequest) {
  const authorization = req.cookies['awesome:token'];

  try {
    if (!authorization) {
      throw unauthorized({
        name: ERR_INVALID_TOKEN,
        message: error.ERR_INVALID_TOKEN,
      });
    }

    const secretKey: JWT.Secret = String(process.env.SECRET_JWT_KEY).trim();

    const decoded = JWT.verify(authorization, secretKey) as JWT.JwtPayload;

    if (!decoded) {
      throw unauthorized({
        name: ERR_INVALID_TOKEN,
        message: error.ERR_INVALID_TOKEN,
      });
    }
    return NextResponse.next();
  } catch (error) {
    const url = req.nextUrl.clone();
    url.pathname = '/user/signin';
    return NextResponse.rewrite(url.href);
  }
}
