import { useRouter } from 'next/router';
import { FormEvent } from 'react';

import * as S from '../../../components/login/style';
import { TextCSS } from '../../../components/styles/Text';
import { api } from '../../../services/api';
import { authActions } from '../../api/context/auth/actions';

const Login = () => {
  const router = useRouter();
  const { signin } = authActions();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await api.post("/signin/", {
      pass: e.currentTarget.password.value,
      email: e.currentTarget.email.value,
    });

    if (response.status !== 200) {
      return alert(response.data.message);
    }

    const { token, user_id } = response.data;

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    api.defaults.headers.common['X-user-id'] = `${user_id}`;


    signin({ isLoggedIn: true, token, user_id });
    return router.push("/home");
  };


  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <TextCSS fontWeight={400} size={'$5'}>Já tem conta ?</TextCSS>
        <S.Title>Faça login aqui</S.Title>
        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Input name="email" type="email"></S.Input>
        <S.Label htmlFor="password">Password</S.Label>
        <S.Input name="password" type="password"></S.Input>
        <S.Submit type="submit">
          <p>Enviar</p>
        </S.Submit>
      </S.Form>
    </S.Wrapper>
  );
};

export default Login;
