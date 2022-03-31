/* eslint-disable react/no-unstable-nested-components */
import { VscRocket } from 'react-icons/vsc'
import { signOut, useSession } from 'next-auth/react'
import { HiOutlineLogout } from 'react-icons/hi'
import { useCallback } from 'react'
import dynamic from 'next/dynamic'
import { TextCSS } from '@/features/ui'

import { Switch } from '@/features/ui/switch'
import {
  ContainerCSS,
  NavCSS,
  TitleCSS
} from './styled'

const MenuItem = dynamic(() => import('./components/menu'))
const SubItem = dynamic(() => import('./components/sub-item'))

const Header = () => {
  const { data: session } = useSession()

  const handleLogout = useCallback(() => {
    signOut({
      callbackUrl: `${window.location.origin}/auth/signin`,
      redirect: true
    })
  }, [signOut])

  return (
		<ContainerCSS>
			<TitleCSS>
				<TextCSS font="sm">
					<VscRocket size={15} /> { '  ' }
					MyAwesome {session?.user && <span> | {session?.user?.name}</span>}
				</TextCSS>
			</TitleCSS>
			<NavCSS>
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
  )
}

export default Header
