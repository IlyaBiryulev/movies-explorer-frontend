import React, { useEffect, useState } from "react";
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import ShowMore from "../ShowMore/ShowMore.js";

const MOVIE_API = 'https://api.nomoreparties.co/beatfilm-movies';

const CountDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;
  return `${hours}ч ${min < 10 ? '0' : ''}${min}м`;
}

function MoviesCardList({showMore}) {
  const [movie, setMovie] = useState([]);

  //Временное решение
  useEffect(()=> {
    fetch(`${MOVIE_API}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [])

  const movieElement = movie.slice(0, showMore).map((movie) => (
    <MoviesCard key={movie.id} title={movie.nameRU} duration={CountDuration(movie.duration)} link={`https://api.nomoreparties.co${movie.image.url}`} linkAlt={movie.image.name}/>
  ))

  return (
    <section className='movies-card-list'>
      {movieElement}
    </section>
  );
}

export default MoviesCardList;
