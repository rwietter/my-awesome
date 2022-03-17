import { ReactElement, ReactNode } from 'react';
import { withProtectRoute } from '@/hoc/auth-hoc';
import Header from '../header';

interface Props {
  children: ReactNode
}

function Layout({ children }: Props): ReactElement<any, any> {
  return (
    <>
      <Header />
			<main>
				{children}
			</main>
    </>
  );
}

export default Layout;
