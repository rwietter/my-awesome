import dynamic from 'next/dynamic'
import { HTMLAttributes, memo } from 'react'
import * as CSS from './styled'

const Image = dynamic(() => import('next/image'))
const Link = dynamic(() => import('next/link'))

const SubItemVariants = {
  hidden: {
    x: -20,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

interface SubItemProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	isProfile?: boolean;
	description?: string;
	avatar?: string;
	url: string;
	id: string;
  onClick?: () => void;
  icon?: any;
}

const SubItemComponent = ({
  title,
  isProfile,
  description,
  avatar,
  url = '/',
  onClick,
  icon: Icon,
  ...props
}: SubItemProps) => {
  const name = isProfile && title.split(' ')[0]
  const userImage = avatar as string
  return (
		<CSS.SubItemCSS
			layout
			variants={SubItemVariants}
		>
			<CSS.SubItemText
				onClick={onClick}
				data-profile={isProfile}
				{...props}
			>
				{isProfile && (
					<CSS.ProfileItem>
						<Image
							src={userImage}
							alt="user profile photo"
							width={30}
							height={30}
						/>
						<Link href="/profile">{name ?? ''}</Link>
					</CSS.ProfileItem>
				)}
				{!isProfile && <Icon />}
				{!url && <span className="title">{!isProfile && title}</span>}
        {url && (
          <Link href={url}>
					<span className="title">{!isProfile && title}</span>
          </Link>
        )}
			</CSS.SubItemText>
		</CSS.SubItemCSS>
  )
}

export default memo(SubItemComponent)
