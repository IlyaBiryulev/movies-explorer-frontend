import React, { useState } from "react";

import './MoviesCard.css';

import { useLocation } from 'react-router-dom';

const CountDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;
  return `${hours}ч ${min < 10 ? '0' : ''}${min}м`;
}

function MoviesCard({ movie, saveMovie, isSaveMovie, onDelete, savedMovie }) {
  const location = useLocation();

  const [ saveBtnStatus, setSaveBtnStatus] = useState(false);

  const handleSaveClick = () => {
    saveMovie(movie);
  }

  const handleDeleteClick = () => {
    onDelete(movie);
  }

  const handleSaveMovie = (savedMovie, movie) => {
    return savedMovie.find((card) => {
      return card.movieId === (movie.id || movie.movieId);
    });
  }

  const saveMovieStatus = handleSaveMovie(savedMovie, movie);

  const handleSaveBtn = () => {
    if (location.pathname === '/movies') {
      return(
      <button
        className={`movies-card__save-btn ${saveMovieStatus ? 'movies-card__save-btn_active' : ''}`}
        type="button"
        onClick={handleSaveClick}
        >
      </button>)
    } else if (location.pathname === '/saved-movies') {
      return(
        <button
          className='movies-card__delete-btn'
          type="button"
          onClick={handleDeleteClick}>
        </button>)
    }
  }

  return (
    <div className='movies-card'>
      <a href={`${movie.trailerLink}`}  target='_blank' rel='noopener noreferrer'><img src={location.pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : `${movie.image}`} alt={movie.image.name} className='movies-card__img'></img></a>
      <div className='movies-card__caption'>
        <div className='movies-card__text'>
          <h2 className='movies-card__title'>{movie.nameRU}</h2>
          <p className='movies-card__duration'>{CountDuration(movie.duration)}</p>
        </div>
        {handleSaveBtn()}
      </div>
    </div>
  );
}

export default MoviesCard;
