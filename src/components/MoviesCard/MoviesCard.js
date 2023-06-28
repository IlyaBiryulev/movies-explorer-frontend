import React, { useState } from "react";

import './MoviesCard.css';

import { useLocation } from 'react-router-dom';

const CountDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;
  return `${hours}ч ${min < 10 ? '0' : ''}${min}м`;
}

function MoviesCard({ movie, saveMovie, isSaveMovie }) {
  const location = useLocation();

  const handleSaveClick = () => {
    saveMovie(movie)
  }

  const handleSaveBtn = () => {
    if (location.pathname === '/movies') {
      return(
      <button
        className={`movies-card__save-btn ${isSaveMovie ? 'movies-card__save-btn_active' : ''}`}
        type="button"
        onClick={handleSaveClick}
        >
      </button>)
    } else if (location.pathname === '/saved-movies') {
      return(
        <button
          className='movies-card__delete-btn'
          type="button"
          onClick={handleSaveClick}>
        </button>)
    }
  }

  return (
    <div className='movies-card'>
      <img src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.image.name} className='movies-card__img'></img>
      <div className='movies-card__caption'>
        <div className='movies-card__text'>
          <h2 className='movies-card__title'>{movie.title}</h2>
          <p className='movies-card__duration'>{CountDuration(movie.duration)}</p>
        </div>
        {handleSaveBtn()}
      </div>
    </div>
  );
}

export default MoviesCard;
