import './Navigation.css';
import {Link, useLocation} from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  function navLinkToggle() {
    if (location.pathname === '/movies' || '/saved-movies' || '/profile') {
      return (
        <div className='header__nav-wrapper'>
          <div className='header__links-movie'>
            <Link className={`header__link-nav ${location.pathname === '/movies' ?  'header__link_select' : ''}`} to='/movies'>Фильмы</Link>
            <Link className={`header__link-nav ${location.pathname === '/saved-movies' ?  'header__link_select' : ''}`} to='/saved-movies'>Сохранённые фильмы</Link>
          </div>
          <Link className={`header__link-profile ${location.pathname === '/profile' ?  'header__link_select' : ''}`} to='/profile'>
            Аккаунт
            <span className='header__link-avatar header__link_select'></span>
          </Link>
        </div>
      );
    }

  }

  return (
    <div className='header__nav'>{navLinkToggle()}</div>
  );
}

export default Navigation;
