import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { setCookie } from 'nookies';
import { handleError } from '@/helpers/http-error';
import { Toastfy } from '@/features/ui/toastfy';
import { adapter } from '@/services/api';
import { authActions } from '@/features/user/store/actions';
import { TextCSS } from '@/features/ui';
import * as S from '../styled';

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
        maxAge: 60 * 60 * 4, // 4 hours
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
			<TextCSS fontWeight={400} size="$5">
				Já tem conta ?
			</TextCSS>
			<S.Title>Faça login aqui</S.Title>
			<S.Label htmlFor="email">E-mail</S.Label>
			<S.Input name="email" type="email" />
			<S.Label htmlFor="password">Password</S.Label>
			<S.Input name="password" type="password" />
			<S.Submit type="submit">
				<p>Enviar</p>
			</S.Submit>
		</S.Form>
		<Toastfy />
	</S.Wrapper>
  );
}

export { Login };
