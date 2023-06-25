import './NotFound.css';

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className='not-found'>
      <h1 className='not-found__error'>404</h1>
      <p className='not-found__error-text'>Страница не найдена</p>
      <Link className="not-found__back" to="/">Назад</Link>
    </main>
  );
}

export default NotFound;
