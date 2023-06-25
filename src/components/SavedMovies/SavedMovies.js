import './SavedMovies.css';

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js'

function SavedMovies({ onBurgerClick }) {
  return (
    <main className='movies'>
      <Header onBurgerClick={onBurgerClick}/>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
}

export default SavedMovies;
