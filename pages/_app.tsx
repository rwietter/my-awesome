import '../styles/globals.css';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { QueryClientProvider } from 'react-query';

import HeadContent from '../components/head';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import { queryClient } from '../services/queryClient';
import { dark_theme, light_theme } from '../styles/theme';
import { useThemeStore } from './api/context/theme';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const paths = ["/user/signin", "/user/signup", "/create-awesome"];

  const { theme } = useThemeStore();
  const themeMode = theme === 'light' ? light_theme : dark_theme;

  useEffect(() => {
    const classTheme = document.querySelector("#class-theme");
    if (!classTheme) return;
    classTheme.className = themeMode;
  }, [themeMode]);

  return (
    <QueryClientProvider client={queryClient} >
      <div id="class-theme">
        {!paths.includes(pathname) && <Sidebar />}
        <HeadContent />
        <Header />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
