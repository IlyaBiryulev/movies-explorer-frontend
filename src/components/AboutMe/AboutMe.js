import './AboutMe.css';
import SectionMainTitle from '../SectionMainTitle/SectionMainTitle.js';
import Portfolio from '../Portfolio/Portfolio.js';

import photo from '../../images/S3BaIqb3JgU.jpg';

function AboutMe() {
    return (
        <section className='about-me'>
          <SectionMainTitle title='Стдуент'/>
          <article className='about-me__wrapper'>
            <h2 className='about-me__name'>Илья</h2>
            <p className='about-me__description'>Фронтенд-разработчик, 22 года</p>
            <p className='about-me__info'>Я живу в Санкт-Петербурге, закончил ГУАП по направление электроника и наноэлектроника, где научился программировать микропроцессоры.
              Люблю заниматься спортом, а также занимаюсь фотографией. Больше года назад начал изучать front-end. Хочу развиваться в сфере front-end разработки.
              В веб-разработке привлекает создание красивых, функциональных сайтов и страниц. Также нравится сразу видеть результат свой работы.</p>
            <a href='https://github.com/IlyaBiryulev' className='about-me__git-link'>Github</a>
            <img src={photo} alt='Фотография автора' className='about-me__img'></img>
          </article>
          <Portfolio />
        </section>
    );
}

export default AboutMe;
