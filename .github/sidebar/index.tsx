/* eslint-disable no-return-assign */
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import * as S from './styled';
import SidebarLinks from '../sidebarlinks';
import { actionSideNavigation, useSideNavigation } from './store';
import { withProtect } from '../../hoc/auth';

const Sidebar = () => {
  const { setNavigatinState } = actionSideNavigation();
  const { isNavigationOpen } = useSideNavigation();

  const handleClick = () => {
    const side = document.querySelector('.side-navigation') as HTMLElement;
    if (side === null) return;

    side.classList.toggle('active');
    setNavigatinState({ isNavigationOpen: !isNavigationOpen });
  };

  return (
		<S.Container className="side-navigation">
			<S.Button
				type="button"
				onClick={() => {
				  handleClick();
				}}
			>
				{isNavigationOpen && <VscChevronLeft size={30} color="var(--colors-primary)" />}
				{!isNavigationOpen && <VscChevronRight size={30} color="var(--colors-primary)" />}
			</S.Button>
			<S.OverFlow className="sidebar-overflow">
			<SidebarLinks />
			</S.OverFlow>
		</S.Container>
  );
};

export default withProtect(Sidebar);
