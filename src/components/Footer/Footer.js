import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__wrapper'>
        <p className='footer__year'>&copy;&nbsp;2020</p>
        <ul className='footer__list'>
          <li className='footer__list-item'><a href='https://practicum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a></li>
          <li className='footer__list-item'><a href='https://github.com/IlyaBiryulev' className='footer__link'>Github</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
