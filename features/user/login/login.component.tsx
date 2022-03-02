import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { setCookie } from 'nookies';
import Link from 'next/link';
import { adapter } from '@/services/api';
import { authActions } from '@/features/user/store/actions';
import { TextCSS, Toastfy } from '@/features/ui';
import * as S from '../styled';
import { handleError } from '@/helpers/handler-notify';
import { Button } from '@/features/ui/button';
import { Margin } from '@/features/ui/margin';

function Login() {
  const router = useRouter();
  const { signin } = authActions();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await adapter.post('/signin', {
        pass: e.currentTarget.password.value,
        email: e.currentTarget.email.value,
      });

      if (response.status !== 200) {
        throw response;
      }

      const { token, userId } = response.data.body;

      adapter.defaults.headers.common.Authorization = `Bearer ${token}`;
      setCookie(undefined, 'awesome:token', token, {
        maxAge: 2.592e+6, // 4 hours
      });

      signin({ isLoggedIn: true, token, userId });
      router.push('/v1/home');
    } catch (err: any) {
      handleError(err);
    }
  };

  return (
		<S.Wrapper>
			<S.Form onSubmit={handleSubmit}>
				<TextCSS textColor="text" font="sm" display="inline">
					Sign in to MyAwesome
				</TextCSS>
				<Margin margin="1rem 0 0 0" />
				<S.Title>Sign in here</S.Title>
				<S.Label htmlFor="email">E-mail</S.Label>
				<S.Input name="email" type="email" />
				<S.Label htmlFor="password">Password</S.Label>
				<S.Input name="password" type="password" />
				<Margin margin="2rem 0 1rem 0" />
				<Button type="submit" color="primary">
					Sign In
				</Button>
				<Margin margin="1rem 0" />
				<TextCSS textColor="text" font="md" display="inline">
					New to MyAwesome?
					<Link href="/user/signup">
						<TextCSS textColor="link" font="md" display="inline"> Create an account</TextCSS>
					</Link>.
				</TextCSS>
			</S.Form>
			<Toastfy />
		</S.Wrapper>
  );
}

export { Login };
