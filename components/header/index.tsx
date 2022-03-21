/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';
import { VscRocket, VscDebugBreakpointLog } from 'react-icons/vsc';
import { signOut, useSession } from 'next-auth/react';
import { TextCSS } from '@/features/ui';

import { authActions } from '@/features/user/store/actions';
import { Switch } from '@/features/ui/switch';
import {
  ContainerCSS,
  HexagonIcon,
  NavCSS,
  SeparatorIcon,
  TitleCSS,
} from './styled';

const Header = () => {
  // const { logout } = authActions();
  // const { isLoggedIn } = useAuthStore();

  // if (!isLoggedIn) return <div />;
  const { data: session } = useSession();

  const handleLogout = () => {
    signOut({
      callbackUrl: `${window.location.origin}/auth/signin`,
      redirect: true,
    });
  };

  return (
		<ContainerCSS>
			<TitleCSS>
				<TextCSS font="sm">
					<VscRocket size={15} />
					MyAwesome {session?.user && <span>| {session?.user?.name}</span>}
				</TextCSS>
			</TitleCSS>
			<NavCSS>
				<Link href="/home">Home</Link>
				<HexagonIcon size={5} />
				<Link href="/create-awesome">Create list</Link>
				<HexagonIcon size={5} />
				<a
					data-type="logout"
					onClick={handleLogout}
				>
					Sign out
				</a>
				<SeparatorIcon size={20} />
				<Switch />
			</NavCSS>
		</ContainerCSS>
  );
};

export default Header;
