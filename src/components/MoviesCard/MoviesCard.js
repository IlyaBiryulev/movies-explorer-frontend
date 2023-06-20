import './MoviesCard.css';

import { useLocation} from 'react-router-dom';

import film1 from '../../images/film1.jpg';
import film2 from '../../images/film2.png';

function MoviesCard() {
  const location = useLocation();

  function MovieButton() {
    if (location.pathname === '/movies') {
      return (<button className='movies-card__save-btn' type="button" ></button>);
    } else if (location.pathname === '/saved-movies') {
      return (<button className='movies-card__delete-btn' type="button" ></button>);
    }
  }

  return (
    <>
      <div className='movies-card'>
        <img src={film1} alt='1' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          {MovieButton()}
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
      <div className='movies-card'>
        <img src={film2} alt='2' className='movies-card__img'></img>
        <div className='movies-card__caption'>
          <div className='movies-card__text'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч42м</p>
          </div>
          <button className='movies-card__save-btn movies-card__save-btn_active' type="button" ></button>
        </div>
      </div>
    </>
  );
}

export default MoviesCard;
