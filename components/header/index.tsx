/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { VscRocket } from 'react-icons/vsc';
import { signOut, useSession } from 'next-auth/react';
import { HiOutlineLogout } from 'react-icons/hi';
import { useCallback } from 'react';
import { TextCSS } from '@/features/ui';

import { Switch } from '@/features/ui/switch';
import {
  ContainerCSS,
  NavCSS,
  TitleCSS,
} from './styled';
import { MenuItem, SubItem } from './components/menu';

const Header = () => {
  const { data: session } = useSession();

  const handleLogout = useCallback(() => {
    signOut({
      callbackUrl: `${window.location.origin}/auth/signin`,
      redirect: true,
    });
  }, [signOut]);

  return (
		<ContainerCSS>
			<TitleCSS>
				<TextCSS font="sm">
					<VscRocket size={15} /> { '  ' }
					MyAwesome {session?.user && <span> | {session?.user?.name}</span>}
				</TextCSS>
			</TitleCSS>
			<NavCSS>
				{/* <Link href="/home">Home</Link> */}
				{/* <Link href="/create-awesome">Create list</Link> */}
				<MenuItem option="Options">
					<SubItem
						title="Home"
						url="/home"
						id="home"
						icon={() => <HiOutlineLogout size={20} />}
					/>
					<SubItem
						title="Create awesome"
						url="/create-awesome"
						id="create-awesome"
						icon={() => <HiOutlineLogout size={20} />}
					/>
					<SubItem
						title="Privacy"
						description="Privacy Policy"
						url="/privacy"
						id="privacy"
						icon={() => <HiOutlineLogout size={20} />}
					/>
				</MenuItem>
				<MenuItem option="Profile">
					<SubItem
						title={session?.user?.name ?? 'Profile'}
						avatar={session?.user?.image ?? 'https://picsum.photos/200'}
						isProfile
						url="/profile"
						description="A SaaS for e-commerce and product management"
						id="profile"
						icon={() => <HiOutlineLogout size={20} />}
					/>
					<SubItem
						title="Logout"
						description="Terms of Service"
						url="/terms"
						id="terms"
						onClick={handleLogout}
						data-type="logout"
						icon={() => <HiOutlineLogout size={20} />}
					/>
				</MenuItem>
				<Switch />
			</NavCSS>
		</ContainerCSS>
  );
};

export default Header;
