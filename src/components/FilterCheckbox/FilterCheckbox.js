import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <p className='checkbox__text'>Короткометражки</p>
      <label className='checkbox__switch' for="checkbox">
        <input
        className='checkbox__switch-input'
        type='checkbox'
        id='checkbox' />
        <div className='checkbox__slider round'></div>
      </label>
    </div>
  );
}

export default FilterCheckbox;
