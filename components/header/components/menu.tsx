import Image from 'next/image';
import Link from 'next/link';
import {
  HTMLAttributes,
  memo,
  useState,
} from 'react';
import * as CSS from './styled';

const Underline = () => (
	<CSS.UnderlineAnimation
		layoutId="underline"
		layout
	/>
);

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const MenuItemComponent = ({ option, children, ...props }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
		<CSS.MenuContainer
			onHoverStart={() => setIsBeingHovered(true)}
			onHoverEnd={() => setIsBeingHovered(false)}
			onClick={() => setIsBeingHovered((state) => !state)}
		>
			<CSS.MenuOption>
				<button type="button">{option}</button>
				{isBeingHovered && <Underline />}
			</CSS.MenuOption>
			{isBeingHovered && (
				<CSS.SubItemsContainerCSS
					id="menu-item"
					layoutId="menu"
					variants={MenuItemVariants}
					initial="hidden"
					animate="visible"
				>
					{children}
				</CSS.SubItemsContainerCSS>
			)}
		</CSS.MenuContainer>
  );
};

const SubItemVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

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
  const name = isProfile && title.split(' ')[0];
  const userImage = avatar as string;
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
  );
};

export const SubItem = memo(SubItemComponent);
export const MenuItem = memo(MenuItemComponent);
