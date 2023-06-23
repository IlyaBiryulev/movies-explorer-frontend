import './Techs.css';
import SectionMainTitle from '../SectionMainTitle/SectionMainTitle.js';

function Techs({ onRef }) {
  return (
    <section className='techs' ref={ onRef }>
      <SectionMainTitle title='Технологии'/>
      <div className='techs__wrapper'>
        <h2 className='techs__title'>7 технологий</h2>
        <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__list'>
          <li className='techs__list-text'>HTML</li>
          <li className='techs__list-text'>CSS</li>
          <li className='techs__list-text'>JS</li>
          <li className='techs__list-text'>React</li>
          <li className='techs__list-text'>Git</li>
          <li className='techs__list-text'>Exress.js</li>
          <li className='techs__list-text'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
