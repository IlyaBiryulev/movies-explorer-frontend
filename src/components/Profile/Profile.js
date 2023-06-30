import './Profile.css';
import { useState, useContext, useEffect } from "react";
import Header from '../Header/Header.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import Validation from '../Validation/Validation.js';

function Profile({ onBurgerClick, editProfile, onLogOut }) {
  const currentUser = useContext(CurrentUserContext);

  const [ isClickEdit, setIsClickEdit ] = useState(false);
  const [ editUser, setUserData] = useState(true);

  const { values, errors, isValid, setValues, onChange } = Validation();

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email});;
  }, [currentUser.name, currentUser.email, setValues]);

  const handleEditClick = () => {
    setIsClickEdit(!isClickEdit);
  }

  const btnDataSave = () => {
    if (isClickEdit) {
      return(
        <>
          <button
            className='profile__btn profile__btn_save'
            type='submit'>
              Сохранить
          </button>
        </>
      )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    editProfile({
      name: values.name,
      email: values.email
    });
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
              required
              disabled={!isClickEdit}
              value={values.name || ''}
              onChange={onChange}
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
              disabled={!isClickEdit}
              value={values.email || ''}
              onChange={onChange}
            />
          </label>
          {btnDataSave()}
        </form>
        <div className='profile__btn-wrapper'>
          <button className='profile__btn' type='button' onClick={handleEditClick}>Редактировать</button>
          <button className='profile__btn profile__btn_logout' type='button' onClick={onLogOut}>Выйти из акканута</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
