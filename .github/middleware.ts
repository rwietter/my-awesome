// import JWT from 'jsonwebtoken';

// import { NextRequest, NextResponse } from 'next/server';
// import { errorMsg, ERR_INVALID_TOKEN, unauthorized } from '@/api/utils/http/';

// function middleware(req: NextRequest) {
//   const authorization = req.cookies['awesome:token'];

//   try {
//     if (!authorization) {
//       throw unauthorized({
//         name: ERR_INVALID_TOKEN,
//         message: errorMsg.ERR_INVALID_TOKEN,
//       });
//     }

//     const secretKey: JWT.Secret = String(process.env.SECRET_JWT_KEY).trim();

//     const decoded = JWT.verify(authorization, secretKey) as JWT.JwtPayload;

//     if (!decoded) {
//       throw unauthorized({
//         name: ERR_INVALID_TOKEN,
//         message: errorMsg.ERR_INVALID_TOKEN,
//       });
//     }

//     return NextResponse.next();
//   } catch (error) {
//     const url = req.nextUrl.clone();
//     url.pathname = '/user/signin';
//     return NextResponse.rewrite(url.href);
//   }
// }

// export default middleware;
