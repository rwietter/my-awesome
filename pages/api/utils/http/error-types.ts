import { ErrorMessage } from './types';

const ERR_EMAIL_NOT_FOUND = 'ERR_EMAIL_NOT_FOUND';
const ERR_USER_NOT_FOUND = 'USER_NOT_FOUND';
const ERR_USER_OR_PASSWORD_NOT_FOUND = 'USER_OR_PASSWORD_NOT_FOUND';
const ERR_INVALID_PASSWORD = 'INVALID_PASSWORD';
const ERR_INVALID_TOKEN = 'TOKEN_ERROR';

export {
	ERR_EMAIL_NOT_FOUND,
	ERR_USER_NOT_FOUND,
	ERR_INVALID_PASSWORD,
	ERR_USER_OR_PASSWORD_NOT_FOUND,
	ERR_INVALID_TOKEN,
};

export const error: ErrorMessage = {
	ERR_EMAIL_NOT_FOUND: 'E-mail not found',
	ERR_INVALID_PASSWORD: 'Invalid password',
	ERR_INVALID_TOKEN: 'Unauthorized authentication',
	ERR_USER_NOT_FOUND: 'User not found',
	ERR_USER_OR_PASSWORD_NOT_FOUND: 'Invalid e-mail or password',
};
