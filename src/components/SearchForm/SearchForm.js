import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__wrapper'>
        <form className='search__form' name='search'>
          <input className='search__form-input' type='text' placeholder='Фильм'></input>
          <button type='submit' className='search__form-btn'></button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
