const desktopScreenWidth = 1280;
const padScreenWidth = 768;
const mobileScreenWidth = 320;

const initialCard = {
  desktop: {
    movie: 12,
    more: 3,
  },
  pad: {
    movie: 8,
    more: 2,
  },
  mobile: {
    movie: 5,
    more: 2,
  }
}

const MAIN_API = 'http://localhost:3000';
const MOVIE_API = 'https://api.nomoreparties.co';

export {
  desktopScreenWidth,
  padScreenWidth,
  mobileScreenWidth,
  initialCard,
  MOVIE_API,
  MAIN_API
}
