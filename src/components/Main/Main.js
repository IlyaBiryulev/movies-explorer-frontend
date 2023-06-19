import './Main.css';
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
    return (
        <main className='main'>
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
        </main>
    );
}

export default Main;
