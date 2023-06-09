import React, { useState, useCallback, useEffect } from "react";
import './Movies.css';
import useResizeScreen from "../../utils/ResizeScreen";

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js'

import {
  desktopScreenWidth,
  padScreenWidth,
  mobileScreenWidth,
  initialCard,
  SHORT_MOVIE_DURATION,
} from '../../utils/constants.js'

function Movies({ onBurgerClick, SearchMovies, isSearchError, isLoading, saveMovie, savedMovie, deleteMovie }) {

  const Screen = useResizeScreen();

  const [ initialMovies,     setInitialMovies   ] = useState([]);
  const [ movieCard,         setMovieCard       ] = useState([]);
  const [ movieFound,        setMovieFound      ] = useState([]);
  const [ cardRender,        setCardRender      ] = useState([]);
  const [ movieNotFound,     setMovieNotFound   ] = useState(false);
  const [ isSearch,          setIsSearch        ] = useState(false);
  const [ isFilterOn,        setFilterOn        ] = useState(false);

  useEffect(() => {
    if (Screen === desktopScreenWidth) {
      setCardRender(initialCard.desktop);
    } else if (padScreenWidth <= Screen <= desktopScreenWidth) {
      setCardRender(initialCard.desktop);
    } else if (mobileScreenWidth <= Screen <= padScreenWidth) {
      setCardRender(initialCard.pad);
    } else if (Screen === mobileScreenWidth ) {
      setCardRender(initialCard.mobile);
    }
  }, [Screen]);


  function movieFilter(movies, onCheckbox) {
    const shortMovie = movies.filter((movie) => {
      return movie.duration <= SHORT_MOVIE_DURATION;
    });

    localStorage.setItem("filterMovies", onCheckbox);

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
    localStorage.setItem('foundMoviesList', JSON.stringify(movieResult));
    localStorage.setItem('moviesQuery', query.toLowerCase().trim());
    return movieResult;
  }

  const handleSearch = useCallback(
    (cards, query) => {
      const found = searchMovie(cards, query);
      setMovieFound(found);

      const isFound = found.length > 0;
      const filtered = isFound ? movieFilter(found, isFilterOn) : [];

      setMovieCard(filtered);
      setIsSearch(false);
      setMovieNotFound(!isFound || filtered.length === 0);
    },
    [isFilterOn]
  );

  const handleSearchMovieSubmit = useCallback(
    async (query) => {
      setMovieNotFound(false);
      setIsSearch(true);
      if (initialMovies.length === 0) {
        const moviesData = await SearchMovies();
        if (moviesData) {
          setInitialMovies(moviesData);
          handleSearch(moviesData, query);
        }
      } else {
        handleSearch(initialMovies, query);
      }
    },
    [SearchMovies, handleSearch, initialMovies]
  );

  const handleOnFilterClick = useCallback(
    (Clicked) => {
      setFilterOn(Clicked);
      setMovieNotFound(false);
      const filtered = movieFilter(movieFound, Clicked);
      setMovieCard(filtered);
      filtered.length === 0 && setMovieNotFound(true);
    },
    [movieFound]
  );

  useEffect(() => {
    if (localStorage.getItem('foundMoviesList') && localStorage.getItem('filterMovies')) {
      const filter = JSON.parse(localStorage.getItem('filterMovies'));
      setFilterOn(filter);
      const MovieList = JSON.parse(localStorage.getItem('foundMoviesList'));
      setMovieFound(MovieList);
      if (MovieList.length === 0) {
        setMovieCard(MovieList);
      } else {
        const filtered = movieFilter(MovieList, filter);
        setMovieCard(filtered);
        if (filtered.length === 0) {
          setMovieNotFound(true);
        }
      }
    }
  }, []);

  return (
    <main className='movies'>
      <Header onBurgerClick={onBurgerClick}/>
      <SearchForm
        onSearch={handleSearchMovieSubmit}
        onFilter={handleOnFilterClick}
        isFilterOn={isFilterOn}
        isSearch={isSearch}
      />
      <MoviesCardList
        movies={movieCard}
        cardRender={cardRender}
        movieNotFound={movieNotFound}
        isSearchError={isSearchError}
        isLoading={isLoading}
        saveMovie={saveMovie}
        savedMovie={savedMovie}
        onDelete={deleteMovie}
      />
      <Footer />
    </main>
  );
}

export default Movies;
