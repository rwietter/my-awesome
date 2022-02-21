import JWT from 'jsonwebtoken';

import { ExtendedApiRequest, ExtendedApiResponse } from '../../../../@types/next';
import { Prisma } from '../../db/db';
import { ERR_INVALID_TOKEN, error } from '../../utils/http/error-types';
import { unauthorized } from '../../utils/http/http-helper';

const withProtect =	(handler: any) => async (req: ExtendedApiRequest, res: ExtendedApiResponse) => {
		try {
			const authorization = req.headers.authorization as string;

			if (!authorization) {
				throw unauthorized({
					name: ERR_INVALID_TOKEN,
					message: error.ERR_INVALID_TOKEN,
				});
			}

			const [, token] = authorization.split(' ');

			const secretKey: JWT.Secret = String(
				process.env.SECRET_JWT_KEY,
			).trim();

			try {
				const decoded = (await JWT.verify(
					token,
					secretKey,
				)) as JWT.JwtPayload;

				const currentUser = await Prisma.user.findUnique({
					where: { id: decoded.sub },
				});

				if (!currentUser) {
					throw unauthorized({
						name: ERR_INVALID_TOKEN,
						message: error.ERR_INVALID_TOKEN,
					});
				}

				req.user = currentUser;
				return handler(req, res);
			} catch (err) {
				throw unauthorized({
					name: ERR_INVALID_TOKEN,
					message: error.ERR_INVALID_TOKEN,
				});
			}
		} catch (error: any) {
			return res.status(401).json({ error });
		}
	};

export { withProtect };
