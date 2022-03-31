import { ErrorHelper } from '../../../../types'

// 400
export const badRequest = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Bad Request',
  status: 400,
  error: true
})

// 403
export const forbidden = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Forbidden',
  status: 403,
  error: true
})

// 401
export const unauthorized = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Unauthorized',
  status: 401,
  error: true
})

// 200
export const ok = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Ok',
  status: 200,
  error: false
})

// 200
export const created = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Created',
  status: 200,
  error: false
})

// 204
export const noContent = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'No content',
  status: 204,
  error: false
})

// 500
export const internalServerError = (error: ErrorHelper): ErrorHelper => ({
  ...error,
  name: 'Internal server error',
  status: 500,
  error: true
})
