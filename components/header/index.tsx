/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';
import { VscRocket, VscDebugBreakpointLog } from 'react-icons/vsc';
import { TextCSS } from '@/features/ui';

import { authActions } from '@/features/user/store/actions';
import { Switch } from '@/features/ui/switch';
import {
  ContainerCSS, HexagonIcon, NavCSS, SeparatorIcon, TitleCSS,
} from './styled';

const Header = () => {
  const { logout } = authActions();
  const handleLogout = () => logout({ isLoggedIn: false });

  return (
		<ContainerCSS>
			<TitleCSS>
				<TextCSS><VscRocket size={15} /> MyAwesome</TextCSS>
			</TitleCSS>
			<NavCSS>
				<Link href="/v1/home">Home</Link>
				<HexagonIcon size={5} />
				<Link href="/v1/create-awesome">Create list</Link>
				<HexagonIcon size={5} />
				<a data-type="logout" onClick={handleLogout}>
					Sign out
				</a>
				<SeparatorIcon size={20} />
				<Switch />
			</NavCSS>
		</ContainerCSS>
  );
};

export default Header;
