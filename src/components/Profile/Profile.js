import './Profile.css';
import { useState, useContext } from "react";
import Header from '../Header/Header.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import Validation from '../Validation/Validation.js';

function Profile({ onBurgerClick }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isValid, onChange } = Validation();


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <main className='profile'>
      <Header onBurgerClick={ onBurgerClick }/>
      <section className='profile__wrapper'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form className='profile__form-edit' name='profile' onSubmit={handleSubmit}>
          <label className='profile__form-wrapper'>
            Имя
            <input
              type="name"
              name="name"
              form="profile"
              id="name-input"
              className="profile__form-input"
              value={currentUser.name}
              onChange={onChange}
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
              value={currentUser.email}
              onChange={onChange}
            />
          </label>
        </form>
        <div className='profile__btn-wrapper'>
          <button className='profile__btn'>Редактировать</button>
          <button className='profile__btn profile__btn_logout' type='button'>Выйти из акканута</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
