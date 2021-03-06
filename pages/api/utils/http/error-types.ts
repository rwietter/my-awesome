import { ErrorMessage } from './types'

const ERR_EMAIL_NOT_FOUND = 'ERR_EMAIL_NOT_FOUND'
const ERR_USER_NOT_FOUND = 'USER_NOT_FOUND'
const ERR_USER_OR_PASSWORD_NOT_FOUND = 'USER_OR_PASSWORD_NOT_FOUND'
const ERR_INVALID_PASSWORD = 'INVALID_PASSWORD'
const ERR_INVALID_TOKEN = 'TOKEN_ERROR'
const ERR_INVALID_PARAMETER = 'ERR_INVALID_PARAMETER'
const ERR_EMAIL_ALREADY_EXISTS = 'ERR_EMAIL_ALREADY_EXISTS'

export {
  ERR_EMAIL_NOT_FOUND,
  ERR_USER_NOT_FOUND,
  ERR_INVALID_PASSWORD,
  ERR_USER_OR_PASSWORD_NOT_FOUND,
  ERR_INVALID_TOKEN,
  ERR_INVALID_PARAMETER,
  ERR_EMAIL_ALREADY_EXISTS
}

export const errorMsg: ErrorMessage<string> = {
  ERR_EMAIL_NOT_FOUND: 'E-mail not found',
  ERR_INVALID_PASSWORD: 'Invalid password',
  ERR_INVALID_TOKEN: 'Unauthorized authentication',
  ERR_USER_NOT_FOUND: 'User not found',
  ERR_USER_OR_PASSWORD_NOT_FOUND: 'Invalid e-mail or password',
  ERR_INVALID_PARAMETER: 'Invalid parameters',
  ERR_EMAIL_ALREADY_EXISTS: 'Email already exists'
}
