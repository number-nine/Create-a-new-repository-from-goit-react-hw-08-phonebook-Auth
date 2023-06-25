import { useSelector } from 'react-redux';
import { NavLinkStyled, HeaderStyled } from './Header.styled';
import { selectAuth } from 'redux/selectors';

import UserMenu from 'components/UserMenu';

export default function Header() {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <HeaderStyled>
      <nav>
        {!isLoggedIn && <NavLinkStyled to="/">Login</NavLinkStyled>}
        {!isLoggedIn && <NavLinkStyled to="/signup">Register</NavLinkStyled>}
        {isLoggedIn && <NavLinkStyled to="/phonebook">Phonebook</NavLinkStyled>}
        {isLoggedIn && <NavLinkStyled to="/dashboard">Dashboard</NavLinkStyled>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </HeaderStyled>
  );
}
