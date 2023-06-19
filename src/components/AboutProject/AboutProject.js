import './AboutProject.css';
import SectionMainTitle from '../SectionMainTitle/SectionMainTitle.js';

function AboutProject({ onRef }) {
    return (
        <section className='about' ref={ onRef }>
          <SectionMainTitle title='О проекте'/>
          <div className='about__information'>
            <p className='about__text'>Дипломный проект включал 5 этапов</p>
            <p className='about__text'>На выполнение диплома ушло 5 недель</p>
            <p className='about__caption'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <p className='about__caption'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
          <div className='about__due-date'>
            <p className='about__due-date-text about__due-date-text_week'>1 неделя</p>
            <p className='about__due-date-text about__due-date-text_week'>4 неделя</p>
            <p className='about__due-date-text about__due-date-text_part'>Back-end</p>
            <p className='about__due-date-text about__due-date-text_part'>Front-end</p>
          </div>
        </section>
    );
}

export default AboutProject;
