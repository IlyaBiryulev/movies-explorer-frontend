import React, { useState, useCallback, useEffect } from "react";
import './Movies.css';
import useResizeScreen from "../../utils/ResizeScreen";

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import ShowMore from '../ShowMore/ShowMore.js';
import Footer from '../Footer/Footer.js'
/* import Preloader from '../Preloader/Preloader.js' */

import { CARDS_PARAMS_RENDER } from "../../utils/config.js";

function Movies({ onBurgerClick, onSearch, isSearchError, isLoading, saveMovie }) {
  const initialMoviesToShow = 16;
  const [moviesToShow, setMoviesToShow] = useState(initialMoviesToShow)

  const handleShowMore = () => {
    setMoviesToShow(moviesToShow + initialMoviesToShow);
  };

  const [ initialMovies,     setInitialMovies   ] = useState([]);
  const [ movieCard,         setMovieCard       ] = useState([]);
  const [ movieCardSearch,   setMovieCardSearch ] = useState([]);
  const [ movieFound,        setMovieFound      ] = useState([]);
  const [ movieNotFound,     setMovieNotFound   ] = useState([]);
  const [ isSearch,          setIsSearch        ] = useState(false);
  const [ isFilterOn,        setFilterOn        ] = useState(false);

  const screenWidth = useResizeScreen();
  const [ cardParams,       serCardParams       ] = useState([])

  function movieFilter(movies, isFilterOn, isMovies) {
    if (isMovies) {
      localStorage.setItem('filterMovies', isFilterOn)
    } else {
      localStorage.setItem('filterSaveMovies', isFilterOn)
    }
    if (isFilterOn) {
      const result = movies.filter((movie) => movie.duration <= 40);
      return result;
    } else {
      return movies;
    }
  }

  function movieSearch(movies, movieSearch, isMovies) {
    const formattingMovieSearch = movieSearch.toLowerCase().trim();
    const result = movies.filter((movie) => {
      const nameRu = movie.nameRU.toLowerCase().trim();
      const nameEn = movie.nameEN.toLowerCase().trim();
      return(nameRu.includes(formattingMovieSearch) || nameEn.includes(formattingMovieSearch))
    })
    if (isMovies) {
      localStorage.setItem('found', JSON.stringify(result));
      localStorage.setItem('movieSearch', formattingMovieSearch);
    } else {
      localStorage.setItem('savedMovieSearch', formattingMovieSearch);
    }
    return result;
  }

  const handleSearchMovie = useCallback(
    (movie, movieQuery) => {
      const found = movieSearch(movie, movieQuery, false);
      setMovieFound(found);
      if (!found.length) {
        setMovieNotFound(true);
        setIsSearch(false);
        setMovieCard(found)
      } else {
        const filter = movieFilter(found, isFilterOn, false);
        setIsSearch(false);
        setMovieCard(filter);
        if (!filter.length) {
          setIsSearch(false);
          setMovieCard(true);
        }
      }
    },
    [isFilterOn]
  );

  const handleSearchSubmit = useCallback(
    async(movieQuery) => {
      setMovieNotFound(false);
      setIsSearch(true);
      if(!initialMovies.length) {
        const data = await onSearch();
        if (data) {
          setMovieCardSearch(data);
          handleSearchMovie(data, movieQuery);
        }
      } else {
        handleSearchMovie(initialMovies, movieQuery);
      }
    },
    [onSearch, handleSearchMovie, initialMovies]
  );

  const handleFilter = useCallback(
    (isClick) => {
      setFilterOn(isClick);
      setMovieNotFound(false);
      const filter = movieFilter(movieFound, isClick, false);
      setMovieCard(filter);
      if (!filter.length) {
        setMovieNotFound(true);
      }
    },
    [movieFound]
  );

  useEffect(() => {
    if (screenWidth >= CARDS_PARAMS_RENDER.base.width) {
      serCardParams(CARDS_PARAMS_RENDER.base.cards);
    } else if (
      screenWidth < CARDS_PARAMS_RENDER.base.width &&
      screenWidth >= CARDS_PARAMS_RENDER.desktop.width
    ) {
      serCardParams(CARDS_PARAMS_RENDER.desktop.cards);
    } else if (
      screenWidth < CARDS_PARAMS_RENDER.desktop.width &&
      screenWidth >= CARDS_PARAMS_RENDER.tablet.width
    ) {
      serCardParams(CARDS_PARAMS_RENDER.tablet.cards);
    } else {
      serCardParams(CARDS_PARAMS_RENDER.mobile.cards);
    }
  }, [screenWidth]);

  useEffect(() => {
    if (
      localStorage.getItem('found') &&
      localStorage.getItem('filterMovies')
    ) {
      const filter = JSON.parse(localStorage.getItem('filterMovies'));
      setFilterOn(filter);
      const found = JSON.parse(localStorage.getItem('found'));
      setMovieFound(found);
      if (!found.length) {
        setMovieNotFound(true);
        setMovieCard(found);
      } else {
        const movieFiltered = movieFilter(found, filter, false);
        setMovieCard(movieFiltered);
        if (!movieFiltered.length) {
          setMovieNotFound(true);
        }
      }
    }
  }, []);



  return (
    <main className='movies'>
      <Header onBurgerClick={onBurgerClick}/>
      <SearchForm
        onSearch={handleSearchSubmit}
        onFilter={handleFilter}
        isFilterOn={isFilterOn}
        isSearch={isSearch}
      />
      <MoviesCardList
        movies={movieCard}
        cardParams={cardParams}
        showMore={moviesToShow}
        movieNotFound={movieNotFound}
        isSearchError={isSearchError}
        isLoading={isLoading}
        saveMovie={saveMovie}
      />
      <ShowMore onClick={handleShowMore}/>
      <Footer />
    </main>
  );
}

export default Movies;
