import './Authentication.css';

import { Link } from "react-router-dom";
import Logo from '../Logo/Logo.js';

function Authentication({title, name, btnSubmit, isLogin, Auth, children, onSubmit, Route}) {
    return (
        <section className="auth">
          <div className="auth__container">
            <Logo />
            <h2 className="auth__title">{title}</h2>
            <form action="#" className="auth__form"  name={name} onSubmit={onSubmit}>
              {children}
              <button className="auth__submit-button" type="submit">{btnSubmit}</button>
              <Link className="auth__link" to={Route}>{isLogin}<span className="auth__link-span">{Auth}</span></Link>
            </form>
          </div>
        </section>
      );
}

export default Authentication;
