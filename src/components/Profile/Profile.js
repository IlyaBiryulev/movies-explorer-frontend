import './Profile.css';
import { useState } from "react";
import Header from '../Header/Header.js';

function Profile({ onBurgerClick }) {
  //Временное решение
  const [name, setName] = useState('Илья');
  const [email, setEmail] = useState('birulevila@yandex.ru');

  const handleChangeName = (e) => {
    setName(e.target.value);
 }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
 }

 const handleSubmit = (e) => {
  e.preventDefault();
}
  return (
    <body className='profile'>
      <Header onBurgerClick={ onBurgerClick }/>
      <section className='profile__wrapper'>
        <h1 className='profile__title'>Привет, Илья!</h1>
        <form className='profile__form-edit' name='profile' onSubmit={handleSubmit}>
          <label className='profile__form-wrapper'>
            Имя
            <input
              type="name"
              name="name"
              form="profile"
              id="name-input"
              className="profile__form-input"
              value={name}
              onChange={handleChangeName}
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
              value={email}
              onChange={handleChangeEmail}
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
