import bcrypt from 'bcrypt';
import { ServerResponse } from 'http';
import JWT from 'jsonwebtoken';

import { Prisma } from './db/db';
import { ERR_EMAIL_NOT_FOUND, ERR_INVALID_PASSWORD, ERR_USER_NOT_FOUND, error } from './utils/http/error-types';
import { unauthorized } from './utils/http/http-helper';
import { httpStatus } from './utils/http/status-code';
import { success } from './utils/http/successful-types';
import { HttpResponse } from './utils/http/types';

import type { NextApiRequest, NextApiResponse } from 'next';

interface Payload {
	iss: string;
	sub: number | string;
	exp: number;
	data: {
		userId: number | string;
	};
}

const generateJwtToken = (payload: Payload) => new Promise((resolve) => {
		JWT.sign(payload, String(process.env.SECRET_JWT_KEY), (err, token) => {
			if (err) {
				throw new Error(`Invalid token: ${err}`);
			}
			resolve(token);
		});
	});

const signup = async (
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<ServerResponse | void | HttpResponse> => {
	try {
		const { pass: password, email } = req.body;

		const user = await Prisma.user.findUnique({ where: { email } });

		if (!user) {
			throw unauthorized({
				name: ERR_USER_NOT_FOUND,
				message: error.ERR_USER_NOT_FOUND,
			});
		}

		if (!bcrypt.compareSync(password, user!.password)) {
			throw unauthorized({
				name: ERR_INVALID_PASSWORD,
				message: error.ERR_INVALID_PASSWORD,
			});
		}

		if (user.email !== email) {
			throw unauthorized({
				name: ERR_EMAIL_NOT_FOUND,
				message: error.ERR_EMAIL_NOT_FOUND,
			});
		}

		const JWTData = {
			iss: 'awesome',
			sub: user.id,
			exp: Math.floor(Date.now() / 1000) + 60 * 60,
			data: { userId: user.email },
		};

		const jwtToken = await generateJwtToken(JWTData);

		if (!jwtToken) {
			throw unauthorized({
				name: ERR_EMAIL_NOT_FOUND,
				message: error.ERR_EMAIL_NOT_FOUND,
			});
		}

		return res.status(200).json({
			message: success.SUCCESS_SIGNIN,
			statusCode: httpStatus.ok,
			body: {
				token: jwtToken,
				userId: user.id,
			},
		});
	} catch (error) {
		return res.status(404).json({ error });
	}
};

export default signup;
