import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm({onSearch, onFilter, isFilterOn, isSearch}) {
  const location = useLocation();

  const [ movieQuery, setMovieQuery ] = useState('');
  const [ error,      setError      ] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    movieQuery
      ? onSearch(movieQuery)
      : setError('Введите ключевое слово');
  }

  useEffect(() => {
    setError('');
  }, [movieQuery]);

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('moviesQuery')) {
      const savedMovieQuery = localStorage.getItem('moviesQuery');
      setMovieQuery(savedMovieQuery);
    }
    if (location.pathname === '/saved-movies' && localStorage.getItem('savedMovies')) {
      const savedMovieQuery = localStorage.getItem('savedMovies');
      setMovieQuery(savedMovieQuery);
    }
  }, [location.pathname]);

  return (
    <section className='search'>
      <div className='search__wrapper'>
        <form className='search__form' name='search' onSubmit={handleSubmit} noValidate>
          <input
            className='search__form-input'
            name='search'
            type='text'
            placeholder='Фильм'
            required
            onChange={(e) => setMovieQuery(e.target.value)}
            value={movieQuery || ''}
          ></input>
          <button type='submit' className='search__form-btn'></button>
        </form>
        <FilterCheckbox
          onFilter={onFilter}
          isFilterOn={isFilterOn}
          isSearch={isSearch}
        />
        <span className='search__form-error'>{error}</span>
      </div>
    </section>
  );
}

export default SearchForm;
