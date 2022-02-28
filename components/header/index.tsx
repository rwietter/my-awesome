/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';
import { TextCSS } from '@/features/ui';

import { authActions } from '@/api/context/auth/actions';
import { Switch } from '../../features/ui/switch';
import { ContainerCSS, NavCSS, TitleCSS } from './styled';

const Header = () => {
  const { logout } = authActions();
  const handleLogout = () => logout({ isLoggedIn: false });

  return (
		<ContainerCSS>
			<TitleCSS>
				<TextCSS>MyAwesome</TextCSS>
			</TitleCSS>
			<NavCSS>
				<Link href="/v1/home">Início</Link>
				<span> • </span>
				<Link href="/v1/create-awesome">Criar Awesome</Link>
				<span> • </span>
				<a data-type="logout" onClick={handleLogout}>
					Logout
				</a>
				<span> | </span>
				<Switch />
			</NavCSS>
		</ContainerCSS>
  );
};

export default Header;
