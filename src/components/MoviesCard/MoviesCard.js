import React, { useState } from "react";

import './MoviesCard.css';

import { useLocation } from 'react-router-dom';

function MoviesCard({ title, duration, link, linkAlt}) {
  const location = useLocation();

  const [ isSave, setIsSave] = useState(false);

  const handleSaveClick = () => {
    setIsSave((state) => !state)
  }

  return (
    <div className='movies-card'>
      <img src={link} alt={linkAlt} className='movies-card__img'></img>
      <div className='movies-card__caption'>
        <div className='movies-card__text'>
          <h2 className='movies-card__title'>{title}</h2>
          <p className='movies-card__duration'>{duration}</p>
        </div>
        <button
          className={location.pathname === '/movies' ? `movies-card__save-btn ${isSave ? 'movies-card__save-btn_active' : ''}` : 'movies-card__delete-btn'}
          type="button"
          onClick={handleSaveClick}></button>
      </div>
    </div>
  );
}

export default MoviesCard;
