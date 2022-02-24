/* eslint-disable consistent-return */
import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { setCookie } from 'nookies';
import * as S from '../../../components/login/style';
import { TextCSS } from '../../../components/styles/Text';
import { notifyError, Toastfy } from '../../../components/toastfy';
import { httpError } from '../../../helpers/http-error';
import { adapter } from '../../../services/api';
import { authActions } from '../../api/context/auth/actions';

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
      const { statusCode, name, message } = httpError(err, 'signin');
      notifyError({
        id: name, message, name, statusCode,
      });
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

export default Login;
