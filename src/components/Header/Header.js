import './Header.css';
import Navigation from '../Navigation/Navigation.js';

function Header() {
    return (
        <div>
          <header className="header">
            <div className="header__logo"></div>
            <Navigation />
          </header>
        </div>
    );
}

export default Header;

