import './SavedMovies.css';
import React, { useState, useCallback, useEffect } from "react";

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js'

import { SHORT_MOVIE_DURATION } from '../../utils/constants.js';

function SavedMovies({ onBurgerClick, savedMovie, deleteMovie }) {

  const [ movieCard,         setMovieCard       ] = useState([]);
  const [ movieFiltered,        setMovieFiltered      ] = useState([]);
  const [ movieNotFound,     setMovieNotFound   ] = useState([]);
  const [ isSearch,          setIsSearch        ] = useState(false);
  const [ isFilterOn,        setFilterOn        ] = useState(false);

  function movieFilter(movies, onCheckbox) {
    const shortMovie = movies.filter((movie) => {
      return movie.duration <= SHORT_MOVIE_DURATION;
    });

    localStorage.setItem("filterSavedMovies", onCheckbox);

    if (onCheckbox) {
      return shortMovie
    } else {
      return movies;
    }
  }

  function searchMovie(movies, query) {
    const movieResult = movies.filter((item) => {
      return(item.nameRU.toLowerCase().includes(query.toLowerCase()) || item.nameEN.toLowerCase().includes(query.toLowerCase()))
    })
    localStorage.setItem('savedMovies', query.toLowerCase().trim());
    return movieResult;
  }

  const handleSearchMovieSubmit = useCallback((searchQuery) => {
    setMovieNotFound(false);
    setIsSearch(true);

    if (savedMovie.length) {
      const found = searchMovie(savedMovie, searchQuery);
      const filtered = movieFilter(found, isFilterOn);
      setMovieCard(filtered);
      setIsSearch(false);
      setMovieNotFound(filtered.length === 0);
    } else {
      setIsSearch(false);
      setMovieNotFound(true);
    }
  }, [savedMovie, isFilterOn]);

  const handleFilter = useCallback(
    async (isClick) => {
      setFilterOn(isClick);
      setMovieNotFound(false);
      const filtered = movieFilter(movieFiltered, isClick);
      setMovieCard(filtered);
      if (filtered.length === 0) {
        setMovieNotFound(true);
      }
    },
    [movieFiltered]
  );

  useEffect(() => {
    setMovieNotFound(false);

    const savedMoviesSearchQuery = localStorage.getItem("savedMovies");
    const isSavedMoviesFilterOn = localStorage.getItem("filterSavedMovies");
    const filter = JSON.parse(isSavedMoviesFilterOn);
    const query = savedMoviesSearchQuery || "";

    const savedMovieList = searchMovie(savedMovie, query);
    setMovieFiltered(savedMovieList);

    if (savedMoviesSearchQuery && isSavedMoviesFilterOn) {
      setFilterOn(filter);
      const filteredSavedMovieList = movieFilter(savedMovieList, filter);
      setMovieCard(filteredSavedMovieList);
      if (filteredSavedMovieList.length === 0) {
        setMovieNotFound(true);
      }
    } else if (isSavedMoviesFilterOn) {
      setFilterOn(filter);
      const filtered = movieFilter(savedMovie, filter);
      setMovieCard(filtered);
      if (filtered.length === 0) {
        setMovieNotFound(true);
      }
    } else {
      setMovieCard(savedMovie);
      setMovieFiltered(savedMovie);
    }
  }, [savedMovie]);

  return (
    <main className='movies'>
      <Header onBurgerClick={onBurgerClick}/>
      <SearchForm
        onSearch={handleSearchMovieSubmit}
        onFilter={handleFilter}
        isFilterOn={isFilterOn}
        isSearch={isSearch}
      />
      <MoviesCardList
        movies={movieCard}
        savedMovie={savedMovie}
        movieNotFound={movieNotFound}
        onDelete={deleteMovie}
      />
      <Footer />
    </main>
  );
}

export default SavedMovies;
