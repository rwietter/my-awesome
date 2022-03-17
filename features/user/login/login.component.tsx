/* eslint-disable react/button-has-type */
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import { setCookie } from 'nookies';
import Link from 'next/link';
import {
  signIn as signInOAuth, getProviders, signIn, getSession,
} from 'next-auth/react';
import { adapter } from '@/services/api';
import { authActions } from '@/features/user/store/actions';
import { TextCSS, Toastfy } from '@/features/ui';
import * as S from '../styled';
import { getIcon, personalIcon } from '../styled';
import { handleError } from '@/helpers/handler-notify';
import { Button } from '@/features/ui/button';
import { Margin } from '@/features/ui/margin';
import { styled } from '@/features/ui/theme';

function Login() {
  const router = useRouter();
  const { signin } = authActions();
  const [providers, setProviders] = useState<any>([]);
  const [credentials, setCredentials] = useState<any>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      // const response = await adapter.post('/signin', {
      //   pass: e.currentTarget.password.value,
      //   email: e.currentTarget.email.value,
      // });

      // if (response.status !== 200) {
      //   throw response;
      // }

      // const { token, userId } = response.data.body;
      // adapter.defaults.headers.common.Authorization = `Bearer ${token}`;
      // setCookie(undefined, 'awesome:token', token, {
      //   maxAge: 2.592e6, // 4 hours
      // });

      signIn(
        'credentials',
        {
          email: e.currentTarget.email.value,
          password: e.currentTarget.password.value,
          callbackUrl: `${window.location.origin}/home`,
        },
      );

      // signin({ isLoggedIn: true, token, userId });
    } catch (err: any) {
      handleError(err);
    }
  };

  useEffect(() => {
    (async () => {
      const authProviders = await getProviders();

      if (!authProviders) return;

      const {
        github, google, twitter, credentials,
      } = authProviders;

      setProviders({ github, google, twitter });
      setCredentials(credentials);
    })();
  }, []);

  return (
		<S.Wrapper>
			<S.Form onSubmit={handleSubmit}>
				<TextCSS textColor="text" font="md" display="inline">
					Sign in to MyAwesome
				</TextCSS>
				<Margin margin="1rem 0 0 0" />
				<S.Label htmlFor="email">E-mail</S.Label>
				<S.Input name="email" type="email" />
				<S.Label htmlFor="password">Password</S.Label>
				<S.Input name="password" type="password" />
				<Margin margin="2rem 0 1rem 0" />
				<Button type="submit" color="primary">
					Sign In
				</Button>
				<Margin margin="1.5rem 0" />
				<TextCSS textColor="text" font="sm" display="inline">
					New to MyAwesome?
					<Link href="/auth/signup">
						<TextCSS textColor="link" font="sm" display="inline">
							{' '}
							Create an account
						</TextCSS>
					</Link>
					.
				</TextCSS>
				<Margin margin="2rem 0 0 0" />
				<S.SeparatorContainer>
					<S.Separator />
					<S.SeparatorTitle>Or continue with</S.SeparatorTitle>
					<S.Separator />
				</S.SeparatorContainer>
				<Margin margin="1rem 0" />
				<S.OAuthContainer>
					{providers
						&& Object.values(providers).map(({ name, id }: any) => {
						  const { icon: Icon } = getIcon(id);
						  const OAuthIcon = styled(Icon, personalIcon);
						  return (
								<OAuthIcon
									size={24}
									type={id}
									name={name}
									key={name}
									onClick={() => signInOAuth(id, { callbackUrl: `${window.location.origin}/home` })}
								/>
						  );
						})}
				</S.OAuthContainer>
			</S.Form>
			<Toastfy />
		</S.Wrapper>
  );
}

export { Login };
