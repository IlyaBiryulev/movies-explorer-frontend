import './Login.css';

import Authentication from '../Authentication/Authentication.js';

function Login() {
    return (
      <section>
          <Authentication
            name={'login'}
            title={'Рады видеть!'}
            btnSubmit={'Войти'}
            isLogin={'Ещё не зарегистророваны?'}
            Auth={'Регистрация'}
          >
            <p className='auth__placeholder'>E-mail</p>
            <input
              type="email"
              name="email"
              form="login"
              id="email-input"
              className="auth__form-input"
              required
            />
            <span className="auth__form-input-error"></span>
            <p className='auth__placeholder'>Пароль</p>
            <input
              type="password"
              name="password"
              form="login"
              id="password-input"
              className="auth__form-input"
              required
            />
            <span className="auth__form-input-error"></span>
          </Authentication>
        </section>
    );
}

export default Login;
