import './Register.css';

import Authentication from '../Authentication/Authentication.js';
import Validation from '../Validation/Validation.js';

function Register() {
  const { values, errors, isValid, onChange } = Validation();

  function handleSubmit(e) {
    e.preventDefault();
  }
    return (
        <section>
          <Authentication
            name={'register'}
            title={'Добро пожаловать!'}
            btnSubmit={'Зарегистрироваться'}
            onSubmit={handleSubmit}
            isValid={isValid}
            isLogin={'Уже зарегистророваны?'}
            Auth={'Войти'}
            Route={'/signin'}
          >
            <p className='auth__placeholder'>Имя</p>
            <input
              type="name"
              name="name"
              form="register"
              id="name-input"
              className="auth__form-input"
              required
              onChange={onChange}
              value={values.name || ''}
            />
            <span className={`auth__form-input-error ${errors.name ? 'auth__form-input-error_active' : ''}`}>{errors.name || ''}</span>
            <p className='auth__placeholder'>E-mail</p>
            <input
              type="email"
              name="email"
              form="register"
              id="email-input"
              className="auth__form-input"
              required
              onChange={onChange}
              value={values.email || ''}
            />
            <span className={`auth__form-input-error ${errors.email ? 'auth__form-input-error_active' : ''}`}>{errors.email || ''}</span>
            <p className='auth__placeholder'>Пароль</p>
            <input
              type="password"
              name="password"
              form="register"
              id="password-input"
              className="auth__form-input"
              required
              onChange={onChange}
              value={values.password || ''}
            />
            <span className={`auth__form-input-error ${errors.email ? 'auth__form-input-error_active' : ''}`}>{errors.password || ''}</span>
          </Authentication>
        </section>
    );
}

export default Register;
