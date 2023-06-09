import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js';
import ShowMore from '../ShowMore/ShowMore.js';


function MoviesCardList({ movies, cardRender, movieNotFound, isSearchError, isLoading, saveMovie, savedMovie, onDelete }) {
  const location = useLocation();

  const [ movieCard, setMovieCard ] = useState([]);


  useEffect(() => {
    if (location.pathname === '/movies' && movies.length) {
      const movieList = movies.filter((movie, item) => {
        return item < cardRender.movie;
      });
      setMovieCard(movieList);
    }
  }, [location.pathname, movies, cardRender]);

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setMovieCard(movies);
    }
  }, [location.pathname, movies]);

  const handleShowMore = () => {
    const initialMoviesCount =  movieCard.length;
    const MoviesToShow = initialMoviesCount + cardRender.more;
    const moviesCount = movies.length -  initialMoviesCount;
    if ( moviesCount > 0) {
      const movieElement = movies.slice(initialMoviesCount, MoviesToShow);
      setMovieCard([...movieCard, ...movieElement]);
    }
  };

  const handleLoading = () => {
    if (isLoading) {
      return(<Preloader />)
    }
  }

  const SearchResult = () => {
    if (movieNotFound) {
      return(
      <p className='movies-card-list__status'>
        Ничего не найдено
      </p>)
    } else if(isSearchError) {
      return(
      <p className='movies-card-list__status'>
        Во время запроса произошла ошибка. Возможно, проблема
        с соединением или сервер недоступен. Подождите немного
        и попробуйте ещё раз.
      </p>)
    }
    if (movies.length !== 0 && !movieNotFound) {
      return(
      <div className={`movies-card-list__items ${movieCard.length > 3 ? 'movies-card-list__items_justify-content' : ''}`}>
        {movieCard.map((movie) =>
          <MoviesCard
            movie={movie}
            key={movie.id}
            saveMovie={saveMovie}
            savedMovie={savedMovie}
            onDelete={onDelete}
          />
        )}
      </div>)
    }
  }

  const ifShowMore = () => {
    if ( location.pathname === '/movies' && movies.length >= 5 && movieCard.length < movies.length) {
      return(<ShowMore onClick={handleShowMore}/>)
    }
  }


  return (
    <section className='movies-card-list'>
      {!localStorage.getItem('MovieSearch') && movies.length === 0 && null}
      {SearchResult()}
      {handleLoading()}
      {ifShowMore()}
    </section>
  );
}

export default MoviesCardList;
