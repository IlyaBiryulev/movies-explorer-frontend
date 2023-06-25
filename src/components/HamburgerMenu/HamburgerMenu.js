import './HamburgerMenu.css';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.js';
import Overlay from '../Overlay/Overlay.js';

function HamburgerMenu({ isOpen, onBurgerClick }) {
  return (
    <Overlay isOpen={isOpen} onClose={onBurgerClick}>
      <div className={`humburger-menu ${isOpen ? 'humburger-menu_active' : ''}`}>
      <button className='humburger-menu__btn-close' onClick={onBurgerClick}></button>
      <Link className='header__link-nav' to='/' onClick={onBurgerClick}>Главная</Link>
      <Navigation />
    </div>
    </Overlay>
  );
}

export default HamburgerMenu;
