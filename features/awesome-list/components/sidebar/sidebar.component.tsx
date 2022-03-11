/* eslint-disable no-return-assign */
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import * as CSS from './styled';
import { withProtect } from '@/hoc/auth';
import { awesomeListActions } from '../../store/actions';
import { SidebarLinks } from './sidebar-links.component';
import { useSidebarStore } from './store/store';

const Sidebar = () => {
  const { isNavigationOpen, setNavigationStatus } = useSidebarStore();

  const handleClick = () => {
    const side = document.querySelector('.side-navigation') as HTMLElement;
    if (side === null) return;

    side.classList.toggle('active');
    setNavigationStatus();
  };

  return (
		<CSS.SidebarContainer className="side-navigation">
			<CSS.Button
				type="button"
				onClick={() => {
				  handleClick();
				}}
			>
				{isNavigationOpen && (
					<VscChevronLeft size={30} color="var(--colors-primary)" />
				)}
				{!isNavigationOpen && (
					<VscChevronRight size={30} color="var(--colors-primary)" />
				)}
			</CSS.Button>
			<CSS.OverFlow className="sidebar-overflow">
				<SidebarLinks />
			</CSS.OverFlow>
		</CSS.SidebarContainer>
  );
};

export default withProtect(Sidebar);
