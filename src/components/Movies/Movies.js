import React, {  useState } from "react";
import './Movies.css';

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import ShowMore from '../ShowMore/ShowMore.js';
import Footer from '../Footer/Footer.js'

function Movies() {
  const initialMoviesToShow = 16;
  const [moviesToShow, setMoviesToShow] = useState(initialMoviesToShow)

  const handleShowMore = () => {
    setMoviesToShow(moviesToShow + initialMoviesToShow);
  };

  return (
    <body className='movies'>
      <Header />
      <SearchForm />
      <MoviesCardList showMore={moviesToShow}/>
      <ShowMore onClick={handleShowMore}/>
      <Footer />
    </body>
  );
}

export default Movies;
