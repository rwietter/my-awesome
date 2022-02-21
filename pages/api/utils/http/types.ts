export interface HttpResponse {
	statusCode: number;
	body: string | Error | null;
}

export interface ErrorMessage {
	ERR_EMAIL_NOT_FOUND: string;
	ERR_INVALID_PASSWORD: string;
	ERR_INVALID_TOKEN: string;
	ERR_USER_OR_PASSWORD_NOT_FOUND: string;
	ERR_USER_NOT_FOUND: string;
}

export interface SuccessfulMessage {
	SUCCESS_SIGNIN: string;
}

export interface HttpStatus {
	ok: number;
}
