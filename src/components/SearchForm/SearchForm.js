import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm({onSearch, onFilter, isFilterOn, isSearch}) {
  const location = useLocation();

  const [ movieQuery, setMovieQuery ] = useState('');
  const [ error,      setError      ] = useState('');

  useEffect(() => {
    if (
      location.pathname === '/movies' &&
      localStorage.getItem('movieSearch')
    ) {
      const savedMovieQuery = localStorage.getItem('movieSearch');
      setMovieQuery(savedMovieQuery);
    } else if (
      location.pathname === '/saved-movies' &&
      localStorage.getItem('savedMovieSearch')
    ) {
      const savedMovieQuery = localStorage.getItem('savedMovieSearch');
      setMovieQuery(savedMovieQuery);
    }
  }, [location.pathname]);

  function handleSubmit(e) {
    e.preventDefault();
    if (location.pathname === '/movies') {
      movieQuery
        ? onSearch(movieQuery)
        : setError('Введите ключевое слово');
    } else {
      onSearch(movieQuery);
    }
  }

  useEffect(() => {
    setError("");
  }, [movieQuery]);

  return (
    <section className='search'>
      <div className='search__wrapper'>
        <form className='search__form' name='search' onSubmit={handleSubmit}>
          <input
            className='search__form-input'
            type='text'
            placeholder='Фильм'
            required
            onChange={(e) => setMovieQuery(e.target.value)}
            value={movieQuery || ''}
          />
          <button type='submit' className='search__form-btn'></button>
        </form>
        <FilterCheckbox
          onFilter={onFilter}
          isFilterOn={isFilterOn}
          isSearch={isSearch}
        />
      </div>
    </section>
  );
}

export default SearchForm;
