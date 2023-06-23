import './Navigation.css';
import {Link, useLocation} from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  function navLinkToggle() {
    if (location.pathname === '/movies' || '/saved-movies' || '/profile') {
      return (
        <div className='header__nav-wrapper'>
          <div className='header__links-movie'>
            <Link className='header__link-nav' to='/movies'>Фильмы</Link>
            <Link className='header__link-nav' to='/saved-movies'>Сохранённые фильмы</Link>
          </div>
          <Link className='header__link-profile' to='/profile'>
            Аккаунт
            <span className='header__link-avatar'></span>
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
