import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import { ReactNode, useState } from 'react'
import dynamic from 'next/dynamic'
import * as CSS from './styled'

const SidebarLinks = dynamic<ReactNode>(() => import('./sidebar-links.component').then((mod) => mod.SidebarLinks))

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    const side = document.querySelector('.side-navigation') as HTMLElement
    if (side === null) return

    side.classList.toggle('active')
    setIsOpen((state) => !state)
  }

  return (
		<CSS.SidebarContainer className="side-navigation">
			<CSS.Button
				type="button"
				onClick={() => {
				  handleClick()
				}}
			>
				{isOpen && (
					<VscChevronLeft
						size={30}
						color="var(--colors-primary)"
					/>
				)}
				{!isOpen && (
					<VscChevronRight
						size={30}
						color="var(--colors-primary)"
					/>
				)}
			</CSS.Button>
			<CSS.OverFlow className="sidebar-overflow">
				<SidebarLinks />
			</CSS.OverFlow>
		</CSS.SidebarContainer>
  )
}

export default Sidebar
