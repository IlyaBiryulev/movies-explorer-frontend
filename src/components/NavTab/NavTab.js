import './NavTab.css';

function NavTab({ onProjectClick, onTechsClick, onAboutClick}) {
    return (
        <section className='navtab'>
          <ul className='navtab__wrapper'>
            <li className='navtap__link'><button className='navtap__btn'onClick={onProjectClick}>О проекте</button></li>
            <li className='navtap__link'><button className='navtap__btn' onClick={onTechsClick}>Технологии</button></li>
            <li className='navtap__link'><button className='navtap__btn' onClick={onAboutClick}>Студент</button></li>
          </ul>
        </section>
    );
}

export default NavTab;
