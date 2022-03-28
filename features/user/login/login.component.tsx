import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn as signInOAuth, getProviders, signIn } from 'next-auth/react';
import { TextCSS, Toastfy } from '@/features/ui';
import * as S from '../styled';
import { getIcon, personalIcon } from '../styled';
import { handleError } from '@/helpers/handler-notify';
import { Button } from '@/features/ui/button';
import { Margin } from '@/features/ui/margin';
import { styled } from '@/features/ui/theme';
import { PublicHeader } from '@/components/public-header';

interface SignInProps {
	ok: boolean | null;
	error: boolean | null;
	status: number;
	url: string;
}

function Login() {
  const router = useRouter();
  const [providers, setProviders] = useState<any>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const res: SignInProps = (await signIn('credentials', {
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
        redirect: false,
      })) as unknown as SignInProps;

      const error = {
        response: {
          data: {
            message: 'User or password incorrect',
          },
        },
      };

      if (!res) {
        return handleError(error);
      }

      if (res.error) {
        return handleError(error);
      }

      if (res.ok && res.status === 200) {
        return router.push('/home');
      }

      // signin({ isLoggedIn: true, token, userId });
    } catch (err: any) {
      handleError(err);
    }
  };

  useEffect(() => {
    (async () => {
      const authProviders = await getProviders();

      if (!authProviders) return;

      const { github, google, twitter } = authProviders;

      setProviders({ github, google, twitter });
    })();
  }, []);

  const oauthSignIn = async (provider: string) => {
    try {
      signInOAuth(provider, { callbackUrl: `${window.location.origin}/home` });
    } catch (error) {
      // Handle error
    }
  };

  return (
		<S.Wrapper>
			<PublicHeader />
			<S.Form onSubmit={handleSubmit}>
				<TextCSS
					textColor="white"
					font="lg"
					display="inline"
				>
					Sign in to MyAwesome
				</TextCSS>
				<Margin margin="1rem 0 0 0" />
				<S.Label htmlFor="email">E-mail</S.Label>
				<S.Input
					name="email"
					type="email"
				/>
				<S.Label htmlFor="password">Password</S.Label>
				<S.Input
					name="password"
					type="password"
				/>
				<Margin margin="2rem 0 1rem 0" />
				<Button
					type="submit"
					color="primary"
				>
					Sign In
				</Button>
				<Margin margin="1.5rem 0" />
				<TextCSS
					textColor="white"
					font="md"
					display="inline"
				>
					New to MyAwesome?
					<Link href="/auth/signup">
						<TextCSS
							textColor="link"
							font="md"
							display="inline"
						>
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
									onClick={() => oauthSignIn(id)}
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
