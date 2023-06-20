import './SavedMovies.css';

import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js'

function SavedMovies() {
    return (
        <section className='movies'>
          <Header />
          <SearchForm />
          <MoviesCardList />
          <Footer />
        </section>
    );
}

export default SavedMovies;
