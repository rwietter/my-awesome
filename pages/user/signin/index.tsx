import { useRouter } from 'next/router';
import { FormEvent } from 'react';

import * as S from '../../../components/login/style';
import { TextCSS } from '../../../components/styles/Text';
import { notify, Toastfy } from '../../../components/toastfy';
import { httpError } from '../../../helpers/http-error';
import { adapter } from '../../../services/api';
import { authActions } from '../../api/context/auth/actions';

const Login = () => {
	const router = useRouter();
	const { signin } = authActions();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();

			const response = await adapter.post('/signin/', {
				pass: e.currentTarget.password.value,
				email: e.currentTarget.email.value,
			});

			console.log(response);

			if (response.status !== 200) {
				throw response;
			}

			const { token, userId } = response.data.body;

			adapter.defaults.headers.common.Authorization = `Bearer ${token}`;

			signin({ isLoggedIn: true, token, user_id: userId });

			return router.push('/home');
		} catch (err: any) {
			const { statusCode, name, message } = httpError(err);
			notify.error(`${name} (${statusCode}) : ${message}`, {
				position: 'top-right',
				toastId: name,
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
};

export default Login;
