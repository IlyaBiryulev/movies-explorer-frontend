import './Portfolio.css';

function Portfolio() {
    return (
        <article className='portfolio'>
          <h3 className='portfolio__title'>Портфолио</h3>
          <ul className='portfolio__list'>
            <li className='portfolio__list-item'><a href='https://github.com/IlyaBiryulev/how-to-learn' className='portfolio__link'>
              <p className='portfolio__link-text'>Статичный сайт</p>
              <p className='portfolio__link-btn'>&#x2197;</p>
              </a>
            </li>
            <li className='portfolio__list-item'><a href='https://github.com/IlyaBiryulev/russian-travel' className='portfolio__link'>
              <p className='portfolio__link-text'>Адаптивный сайт</p>
              <p className='portfolio__link-btn'>&#x2197;</p>
              </a>
            </li>
            <li className='portfolio__list-item'><a href='https://github.com/IlyaBiryulev/react-mesto-api-full-gha' className='portfolio__link'>
              <p className='portfolio__link-text'>Одностраничное приложение</p>
              <p className='portfolio__link-btn'>&#x2197;</p>
              </a>
            </li>
          </ul>
        </article>
    );
}

export default Portfolio;
