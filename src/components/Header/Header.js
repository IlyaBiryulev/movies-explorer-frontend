import './Header.css';
import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js';

function Header() {
    return (
        <div>
          <header className="header">
            <Logo />
            <Navigation />
          </header>
        </div>
    );
}

export default Header;

