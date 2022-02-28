/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';
import HeadContent from '@/components/head';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { queryClient } from '@/services/queryClient';
import { ErrorFallback } from '@/components/error-boundary';
import { useAuthStore } from '@/features/user/store';
import { useThemeStore, dark_theme, light_theme } from '@/features/ui/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const { isLoggedIn } = useAuthStore();

  const sidebarPaths = ['/user/signin', '/user/signup', '/v1/create-awesome'];
  const headerPaths = ['/user/signin', '/user/signup'];

  const { theme } = useThemeStore();
  const themeMode = theme === 'light' ? light_theme : dark_theme;

  useEffect(() => {
    const classTheme = document.querySelector('#class-theme');
    if (!classTheme) return;
    classTheme.className = themeMode;
  }, [themeMode]);

  return (
		<QueryClientProvider client={queryClient}>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<div id="class-theme">
					{!sidebarPaths.includes(pathname) && isLoggedIn && <Sidebar />}
					<HeadContent />
					{!headerPaths.includes(pathname) && isLoggedIn && <Header />}
					<Component {...pageProps} />
				</div>
			</ErrorBoundary>
		</QueryClientProvider>
  );
};

export default MyApp;
