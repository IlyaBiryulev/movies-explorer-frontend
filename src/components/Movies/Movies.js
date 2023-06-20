import './Movies.css';

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import ShowMore from '../ShowMore/ShowMore.js';
import Footer from '../Footer/Footer.js'

function Movies() {
  return (
    <body className='movies'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <ShowMore />
      <Footer />
    </body>
  );
}

export default Movies;
