import './Login.css';

import Authentication from '../Authentication/Authentication.js';
import Validation from '../Validation/Validation.js';

function Login() {
  const { values, errors, isValid, onChange } = Validation();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main>
      <Authentication
      name={'login'}
      title={'Рады видеть!'}
      btnSubmit={'Войти'}
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
        form="login"
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
        form="login"
        id="password-input"
        className="auth__form-input"
        required
        onChange={onChange}
        value={values.password || ''}
        />
        <span className={`auth__form-input-error ${errors.password ? 'auth__form-input-error_active' : ''}`}>{errors.password}</span>
      </Authentication>
    </main>
  );
}

export default Login;
