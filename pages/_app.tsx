/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import 'react-markdown-editor-lite/lib/index.css';

import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import HeadContent from '@/components/head';
import Config from './_config';

interface MyAppProps extends AppProps {
	session: Session;
 }

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: MyAppProps) => (
		<SessionProvider session={session}>
			<Config>
				<HeadContent />
				<Component {...pageProps} />
			</Config>
		</SessionProvider>
);

export default MyApp;
