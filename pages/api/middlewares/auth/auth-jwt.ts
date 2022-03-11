import JWT from 'jsonwebtoken';
import { ExtendedApiRequest, ExtendedApiResponse } from 'types';

import { parseCookies } from 'nookies';
import { ERR_INVALID_TOKEN, errorMsg, unauthorized } from '@/api/utils/http';
import { Prisma } from '@/api/db';

const withAuth = (handler: any) => async (req: ExtendedApiRequest, res: ExtendedApiResponse) => {
  try {
    const authorization = req.headers.authorization as string;

    if (!authorization) {
      throw unauthorized({
        name: ERR_INVALID_TOKEN,
        message: errorMsg.ERR_INVALID_TOKEN,
      });
    }

    const [, token] = authorization.split(' ');

    const secretKey: JWT.Secret = String(process.env.SECRET_JWT_KEY).trim();

    try {
      const decoded = JWT.verify(token, secretKey) as JWT.JwtPayload;

      if (!decoded) {
        throw unauthorized({
          name: ERR_INVALID_TOKEN,
          message: errorMsg.ERR_INVALID_TOKEN,
        });
      }

      const currentUser = await Prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      if (!currentUser) {
        throw unauthorized({
          name: ERR_INVALID_TOKEN,
          message: errorMsg.ERR_INVALID_TOKEN,
        });
      }

      req.user = currentUser;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ error });
    }
  } catch (error: any) {
    return res.status(401).json({ error });
  }
};

export { withAuth };
