import { toast } from 'react-toastify'
import { handleError } from '@/helpers/handler-notify'

type ErrorTypes = {
  [key: string]: string;
};

interface Props {
  error: 'Signin' | 'OAuthSignin' | 'OAuthCallback' | 'OAuthCreateAccount'
  | 'EmailCreateAccount' | 'Callback' | 'PasswordReset' | 'PasswordChange'
  | 'InvalidUserOrPassword' | 'OAuthAccountNotLinked' | 'EmailSignin'
  | 'CredentialsSignin' | 'DeleteAwesome' | 'default';
}

const possibleErrors: ErrorTypes = {
  Signin: 'Try signing with a different account.',
  OAuthSignin: 'Try signing with a different account.',
  OAuthCallback: 'Try signing with a different account.',
  OAuthCreateAccount: 'Try signing with a different account.',
  EmailCreateAccount: 'Try signing with a different account.',
  Callback: 'Try signing with a different account.',
  PasswordReset: 'Try signing with a different account.',
  PasswordChange: 'Try signing with a different account.',
  InvalidUserOrPassword: 'Try signing with a different account.',
  OAuthAccountNotLinked:
		'Looks like we have seen you before! Sign in using the same method you used this email to sign in with before. You are likely trying to sign using a email that already has a magic link sent to it :)',
  EmailSignin: 'Check your email address.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  DeleteAwesome: 'Is not possible to delete this awesome. Try again later.',
  default: 'Unable to sign in.'
}

export const ErrorMessage = ({ error }: Props) => {
  const errorMessage = error && (possibleErrors[error as string] ?? possibleErrors.default)

  return toast.error(errorMessage, {
    position: 'bottom-center',
    autoClose: 3000,
    draggable: true
  })
}
