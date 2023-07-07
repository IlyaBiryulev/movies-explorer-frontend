import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js';

function Header({ onBurgerClick, loggedIn }) {
  const location = useLocation();

  function header() {
    if (location.pathname === '/') {
      return ('header');
    }
    if (location.pathname === '/movies' || '/saved-movies') {
      return ('header header_black');
    }
  }

  if (location.pathname === '/' && !loggedIn) {
    return (
      <header className={header()}>
        <Logo />
        <div className='header__link-auth'>
          <Link className='header__link' to='/signup'>Регистрация</Link>
          <Link className='header__link header__link_signin' to='/signin'>Войти</Link>
        </div>
      </header>
    );
  } else if (location.pathname === '/' && loggedIn){
    return (
      <header className={header()}>
        <Logo />
        <div className='header__navtab'>
          <Navigation />
        </div>
        <button className='header__hambureger-btn' type='button' onClick={onBurgerClick}></button>
      </header>
    );
  } else if (location.pathname === '/movies' || '/saved-movies' || '/profile') {
    return (
      <header className={header()}>
        <Logo />
        <div className='header__navtab'>
          <Navigation />
        </div>
        <button className='header__hambureger-btn' type='button' onClick={onBurgerClick}></button>
      </header>
    );
  }
}

export default Header;

