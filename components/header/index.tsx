import Link from 'next/link';

import { authActions } from '../../pages/api/context/auth/actions';
import { TextCSS } from '../styles/Text';
import { Switch } from '../switch';
import { ContainerCSS, NavCSS, TitleCSS } from './styled';

const Header = () => {
  const { logout } = authActions();
  
  const handleLogout = () => logout({ isLoggedIn: false });
  
  return (
    <ContainerCSS>
      <TitleCSS>
        <TextCSS>MyAwesome</TextCSS>
      </TitleCSS>
      <NavCSS>
        <Link href="/home">Início</Link>
        <span> • </span>
        <Link href="/create-awesome">Criar Awesome</Link>
        <span> • </span>
        <a data-type="logout" onClick={handleLogout}>Logout</a>
        <span> | </span>
        <Switch />
      </NavCSS>
    </ContainerCSS>
  );
};

export default Header;
