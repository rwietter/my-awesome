import axios from 'axios';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';

import * as S from '../styled';
import { Toastfy } from '@/features/ui/toastfy';
import { handleError } from '@/helpers/http-error';
import { TextCSS } from '@/features/ui';

const SignUp = () => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await axios.post('/api/signup/', {
        user: e.currentTarget.username.value,
        pass: e.currentTarget.password.value,
        email: e.currentTarget.email.value,
      });

      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return router.push('/user/signin');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <TextCSS fontWeight={400} size="$5">
          Não tem conta ?
        </TextCSS>
        <S.Title>Crie sua conta aqui</S.Title>
        <S.Label htmlFor="username">Nome</S.Label>
        <S.Input name="username" type="text" />
        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Input name="email" type="email" />
        <S.Label htmlFor="password">Password</S.Label>
        <S.Input name="password" type="password" />
        <S.Submit type="submit">
          <TextCSS color="$white">Enviar</TextCSS>
        </S.Submit>
      </S.Form>
      <Toastfy />
    </S.Wrapper>
  );
};

export { SignUp };
