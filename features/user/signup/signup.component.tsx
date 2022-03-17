import axios from 'axios';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';

import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import * as S from '../styled';
import { TextCSS, Toastfy } from '@/features/ui';
import { handleError } from '@/helpers/handler-notify';
import { Button } from '@/features/ui/button';
import { Margin } from '@/features/ui/margin';

const SignUp = () => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await axios.post('/api/signup', {
        user: e.currentTarget.username.value,
        pass: e.currentTarget.password.value,
        email: e.currentTarget.email.value,
      });

      if (response.status !== 200) {
        throw response;
      }

      return router.push('/auth/signin');
    } catch (error) {
      console.log({ error });
      handleError(error);
    }
  };

  return (
		<S.Wrapper>
			<S.Form onSubmit={handleSubmit}>
				<TextCSS textColor="text" font="md">
					Welcome to MyAwesome!
				</TextCSS>
				<Margin margin="1rem 0 0 0" />
				<S.Title>Create Account</S.Title>
				<Margin margin="0 0 2rem 0" />
				<S.Label htmlFor="username">Nome</S.Label>
				<S.Input name="username" type="text" />
				<S.Label htmlFor="email">E-mail</S.Label>
				<S.Input name="email" type="email" />
				<S.Label htmlFor="password">Password</S.Label>
				<S.Input name="password" type="password" />
				<Margin margin="1.5rem 0 1rem 0" />
				<Button type="submit" color="secondary">
					Sign Up
				</Button>
				<Margin margin="1rem 0 1rem 0" />
				<TextCSS textColor="text" font="md" display="inline">
					Already have an account?
					<Link href="/auth/signin">
						<TextCSS textColor="link" font="md" display="inline">
							{ ' ' }Sign in
						</TextCSS>
					</Link>
					.
				</TextCSS>
			</S.Form>
			<Toastfy />
		</S.Wrapper>
  );
};

export { SignUp };
