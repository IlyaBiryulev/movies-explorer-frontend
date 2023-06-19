import './NavTab.css';

function NavTab() {
    return (
        <section className='navtab'>
          <ul className='navtab__wrapper'>
            <li className='navtap__link'><button className='navtap__btn'>О проекте</button></li>
            <li className='navtap__link'><button className='navtap__btn'>Технологии</button></li>
            <li className='navtap__link'><button className='navtap__btn'>Студент</button></li>
          </ul>
        </section>
    );
}

export default NavTab;
