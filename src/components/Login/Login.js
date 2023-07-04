import './Login.css';
import { Navigate } from "react-router-dom";

import Authentication from '../Authentication/Authentication.js';
import Validation from '../Validation/Validation.js';

function Login({ onLogin, isLoading, loggedIn }) {
  const { values, errors, isValid, onChange } = Validation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  return loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <main>
    <Authentication
    name={'login'}
    title={'Рады видеть!'}
    btnSubmit={isLoading ? 'Вход' : 'Войти'}
    onSubmit={handleSubmit}
    isValid={isValid}
    isLogin={'Ещё не зарегистророваны?'}
    Auth={'Регистрация'}
    Route={'/signup'}
    >
      <p className='auth__placeholder'>E-mail</p>
      <input
      type="email"
      name="email"
      id="email-input"
      className="auth__form-input"
      required
      onChange={onChange}
      value={values.email || ''}
      />
      <span className={`auth__form-input-error ${errors.email ? 'auth__form-input-error_active' : ''}`}>{errors.email}</span>
      <p className='auth__placeholder'>Пароль</p>
      <input
      type="password"
      name="password"
      id="password-input"
      minLength={6}
      maxLength={30}
      className="auth__form-input"
      required
      onChange={onChange}
      value={values.password || ''}
      />
      <span className={`auth__form-input-error ${errors.password ? 'auth__form-input-error_active' : ''}`}>{errors.password}</span>
    </Authentication>
  </main>
  )
}

export default Login;
