import './Navigation.css';
import {Link, useLocation} from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  function navLinkToggle() {
    if (location.pathname === '/') {
      return (
        <>
          <Link className='header__link' to='/signup'>Регистрация</Link>
          <Link className='header__link header__link_signin' to='/signin'>Войти</Link>
        </>
      );
    } else if (location.pathname === '/movies' || '/saved-movies') {
      return (
        <>
          <Link className='header__link' to='/movies'>Фильмы</Link>
          <Link className='header__link' to='/saved-movies'>Сохранённые фильмы</Link>
          <Link className='header__link' to='/'>Аккаунт</Link>
        </>
      );
    }
  }

    return (
      <div className="header__nav">{navLinkToggle()}</div>
    );
}

export default Navigation;
