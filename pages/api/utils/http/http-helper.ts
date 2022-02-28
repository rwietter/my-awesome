import { ErrorHelper } from '../../../../types';

// 400
export const badRequest = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Bad Request',
  status: 400,
});

// 403
export const forbidden = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Forbidden',
  status: 403,
});

// 401
export const unauthorized = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Unauthorized',
  status: 401,
});

// 200
export const ok = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Ok',
  status: 200,
});

// 200
export const created = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Created',
  status: 200,
});

// 204
export const noContent = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'No content',
  status: 204,
});

// 500
export const internalServerError = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Internal server error',
  status: 500,
});
