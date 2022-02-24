export interface HttpResponse {
	status: number;
	error: string | Error | null;
}

export interface ErrorMessage<T> {
	ERR_EMAIL_NOT_FOUND: T;
	ERR_INVALID_PASSWORD: T;
	ERR_INVALID_TOKEN: T;
	ERR_USER_OR_PASSWORD_NOT_FOUND: T;
	ERR_USER_NOT_FOUND: T;
	ERR_INVALID_PARAMETER: T;
	ERR_EMAIL_ALREADY_EXISTS: T;
}

export interface SuccessfulMessage<T> {
	SUCCESS_SIGNIN: T;
	SUCCESS_SIGNUP: T;
}

export interface HttpStatus {
	ok: number;
}
