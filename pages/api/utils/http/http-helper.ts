import { HttpResponse } from './types';

export const badRequest = (error: any): HttpResponse => ({
  status: 400,
  ...error,
});

export const forbidden = (error: any): HttpResponse => ({
  status: 403,
  ...error,
});

export const unauthorized = (error: any): HttpResponse => ({
  status: 401,
  ...error,
});

export const serverError = (error: any): HttpResponse => ({
  status: 500,
  ...error,
});

export const ok = (error: any): HttpResponse => ({
  status: 200,
  ...error,
});

export const created = (error: any): HttpResponse => ({
  status: 200,
  ...error,
});

export const noContent = (error: any): HttpResponse => ({
  status: 204,
  ...error,
});
