import './Authentication.css';

import { Link } from "react-router-dom";
import Logo from '../Logo/Logo.js';

function Authentication({ title, name, btnSubmit, isLogin, Auth, children, onSubmit, Route, isValid }) {
    return (
        <section className="auth">
          <div className="auth__container">
            <div className='logo'><Logo /></div>
            <h2 className="auth__title">{title}</h2>
            <form
              action="#"
              className="auth__form"
              name={name}
              onSubmit={onSubmit}
              noValidate>
              {children}
              <button
                form={name}
                className='auth__submit-button'
                type='submit'
                disabled={isValid ? false : true}>{btnSubmit}</button>
              <Link className='auth__link' to={Route}>{isLogin}<span className='auth__link-span'>{Auth}</span></Link>
            </form>
          </div>
        </section>
      );
}

export default Authentication;
