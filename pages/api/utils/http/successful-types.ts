import { SuccessfulMessage } from './types';

const SUCCESS_SIGNIN = 'SUCCESS_SIGNIN';
const SUCCESS_SIGNUP = 'SUCCESS_SIGNUP';

export const success: SuccessfulMessage<string> = {
  SUCCESS_SIGNIN: 'Successful sign-in',
  SUCCESS_SIGNUP: 'Successful sign-up',
};

export { SUCCESS_SIGNIN, SUCCESS_SIGNUP };
