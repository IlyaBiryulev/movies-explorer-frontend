import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js'


function MoviesCardList({ movies, cardParams, showMore, movieNotFound, isSearchError, isLoading, saveMovie, savedMovie }) {
  const location = useLocation();

  const [ movieCard, setMovieCard ] = useState([]);

  useEffect(() => {
    if (location.pathname === '/movies' && movies.length) {
      const result = movies.filter((movie, index) => {
        return index < cardParams.total;
      });
      setMovieCard(result);
    }
  }, [location.pathname, movies, cardParams]);

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setMovieCard(movies);
    }
  }, [location.pathname, movies]);

  const handleSaveMovie = () => {
    return savedMovie.find((card) => {
      return card.movieId === (movies.id || movies.movieId);
    });
  }

  return (
    <section className='movies-card-list'>
      {!localStorage.getItem('movieSearch') && movies.length === 0}
      {isLoading && movies.length === 0 && <Preloader />}
      {movieNotFound && (
        <p className='movies-card-list__status'>Ничего не найдено</p>
      )}
      {isSearchError && (
        <p className='movies-card-list__status'>
          Во время запроса произошла ошибка. Возможно, проблема
          с соединением или сервер недоступен. Подождите немного
          и попробуйте ещё раз.
        </p>
      )}
      {movies.length !== 0 && !movieNotFound && (
        <div className='movies-card-list__items'>
          {movieCard.map((movie) =>
            <MoviesCard
              movie={movie}
              key={movie.id}
              saveMovie={saveMovie}
              isSaveMovie={handleSaveMovie}
            />
          )}
        </div>
      )}

    </section>
  );
}

export default MoviesCardList;
