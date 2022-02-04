import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Portal } from 'react-portal';
import { Sidebar } from '../components/sidebar';
import { HeadContent } from '../components/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Portal>
        <Sidebar />
      </Portal>
      <HeadContent />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
