import './Authentication.css';

import { Link } from "react-router-dom";
import Logo from '../Logo/Logo.js';

function Authentication({ title, name, btnSubmit, isValid, isLogin, Auth, children, Route, onSubmit}) {
  return (
    <section className="auth">
      <div className="auth__container">
        <div className='auth__header'>
          <Logo />
          <h2 className='auth__title'>{title}</h2>
        </div>
        <form
          action='#'
          className='auth__form'
          name={name}
          onSubmit={onSubmit}
          noValidate>
          {children}
          <button
            type='submit'
            className='auth__submit-button'
            disabled={!isValid}
          >
            {btnSubmit}
          </button>
          <Link className='auth__link' to={Route}>{isLogin}<span className='auth__link-span'>{Auth}</span></Link>
        </form>
      </div>
    </section>
  );
}

export default Authentication;
