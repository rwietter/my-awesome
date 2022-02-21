import { HttpResponse } from './types';

export const badRequest = (error: Error): HttpResponse => ({
	statusCode: 400,
	body: error,
});

export const forbidden = (error: Error): HttpResponse => ({
	statusCode: 403,
	body: error,
});

export const unauthorized = (error: Error): HttpResponse => ({
	statusCode: 401,
	body: error,
});

export const serverError = (error: Error): HttpResponse => ({
	statusCode: 500,
	body: error,
});

export const ok = (data: Error): HttpResponse => ({
	statusCode: 200,
	body: data,
});

export const created = (data: Error): HttpResponse => ({
	statusCode: 200,
	body: data,
});

export const noContent = (): HttpResponse => ({
	statusCode: 204,
	body: null,
});
