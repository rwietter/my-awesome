import dynamic from 'next/dynamic'
import { memo, useState } from 'react'
import * as CSS from './styled'

const Underline = dynamic(() => import('./underline'))

const MenuItemVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

export const MenuItemComponent = ({ option, children, ...props }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false)

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
  )
}

export default memo(MenuItemComponent)
