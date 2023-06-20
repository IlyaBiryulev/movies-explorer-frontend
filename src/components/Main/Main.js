import './Main.css';
import { React, useRef } from 'react';
import Header from '../Header/Header.js'
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer.js'


function Main() {
  const AboutPr = useRef(null);
  const Tech = useRef(null);
  const About = useRef(null);

  const handleClickProject = () => {
    AboutPr.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  const handleClickTechs = () => {
    Tech.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleClickAboutMe = () => {
    About.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
    return (
        <main className='main'>
          <Header />
          <Promo />
          <NavTab
            onProjectClick={handleClickProject}
            onTechsClick={handleClickTechs}
            onAboutClick={handleClickAboutMe}/>
          <AboutProject onRef={AboutPr}/>
          <Techs onRef={Tech}/>
          <AboutMe onRef={About}/>
          <Footer />
        </main>
    );
}

export default Main;
