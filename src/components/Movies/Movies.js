import React, { useState } from "react";
import './Movies.css';

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import ShowMore from '../ShowMore/ShowMore.js';
import Footer from '../Footer/Footer.js'
/* import Preloader from '../Preloader/Preloader.js' */

function Movies({ onBurgerClick }) {
  const initialMoviesToShow = 16;
  const [moviesToShow, setMoviesToShow] = useState(initialMoviesToShow)

  const handleShowMore = () => {
    setMoviesToShow(moviesToShow + initialMoviesToShow);
  };

  return (
    <section className='movies'>
      <Header onBurgerClick={onBurgerClick}/>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList showMore={moviesToShow}/>
      <ShowMore onClick={handleShowMore}/>
      <Footer />
    </section>
  );
}

export default Movies;
