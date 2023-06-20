import './Header.css';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js';

function Header() {
  const location = useLocation();

  function headerColor() {
    if (location.pathname === '/') {
      return ('header');
    }
    if (location.pathname === '/movies' || '/saved-movies') {
      return ('header header_black');
    }
  }

  return (
    <div>
      <header className={headerColor()}>
        <Logo />
        <Navigation />
      </header>
    </div>
  );
}

export default Header;

