/* eslint-disable no-return-assign */
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { useState } from 'react';
import * as CSS from './styled';
import { SidebarLinks } from './sidebar-links.component';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const side = document.querySelector('.side-navigation') as HTMLElement;
    if (side === null) return;

    side.classList.toggle('active');
    setIsOpen((state) => !state);
  };

  return (
		<CSS.SidebarContainer className="side-navigation">
			<CSS.Button
				type="button"
				onClick={() => {
				  handleClick();
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
  );
};

export default Sidebar;
