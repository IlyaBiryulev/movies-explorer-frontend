import './Profile.css';

import Header from '../Header/Header.js';

function Profile({ onBurgerClick }) {
  return (
    <body className='profile'>
      <Header onBurgerClick={ onBurgerClick }/>
      <section className='profile__wrapper'>
        <h1 className='profile__title'>Привет, Илья!</h1>
        <form className='profile__form-edit' name='profile'>
          <label className='profile__form-wrapper'>
            Имя
            <input
              type="name"
              name="name"
              form="profile"
              id="name-input"
              className="profile__form-input"
              value={'Илья'}
              required
            />
          </label>
          <label className='profile__form-wrapper'>
            Email
            <input
              type="email"
              name="email"
              form="profile"
              id="email-input"
              className="profile__form-input"
              required
              value={'birulevila@yandex.ru'}
            />
          </label>
        </form>
        <div className='profile__btn-wrapper'>
          <button className='profile__btn'>Редактировать</button>
          <button className='profile__btn profile__btn_logout' type='button'>Выйти из акканута</button>
        </div>
      </section>
    </body>
  );
}

export default Profile;
