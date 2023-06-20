import './Register.css';

import Authentication from '../Authentication/Authentication.js';

function Register() {
    return (
        <section>
          <Authentication
            name={'register'}
            title={'Добро пожаловать!'}
            btnSubmit={'Зарегистрироваться'}
            isLogin={'Уже зарегистророваны?'}
            Auth={'Войти'}
          >
            <p className='auth__placeholder'>Имя</p>
            <input
              type="name"
              name="name"
              form="register"
              id="name-input"
              className="auth__form-input"
              required
            />
            <span className="auth__form-input-error"></span>
            <p className='auth__placeholder'>E-mail</p>
            <input
              type="email"
              name="email"
              form="register"
              id="email-input"
              className="auth__form-input"
              required
            />
            <span className="auth__form-input-error"></span>
            <p className='auth__placeholder'>Пароль</p>
            <input
              type="password"
              name="password"
              form="register"
              id="password-input"
              className="auth__form-input"
              required
            />
            <span className="auth__form-input-error"></span>
          </Authentication>
        </section>
    );
}

export default Register;
