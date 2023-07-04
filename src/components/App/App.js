import './App.css';
import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute.js';

import * as mainApi from '../../utils/MainApi.js';
import * as movieApi from '../../utils/MoviesApi.js';

import { MOVIE_API } from '../../utils/constants.js';

function App() {
  const navigate = useNavigate();

  const [ loggedIn,         setLoggedIn         ] = useState(false);
  const [ loading,          setLoading          ] = useState(false);
  const [ currentUser,      setCurrentUser      ] = useState({});

  const [ isBurgerMenuOpen, setIsBurgerMenuOpen ] = useState(false);

  const [ searchError,      setSearchError      ] = useState(false);
  const [ saveCard,         setSaveCard         ] = useState([]);

  const handleUserAuthorization = useCallback(
    async({ email, password }) => {
      setLoading(true);
      try {
        const userData = await mainApi.authorize({ email, password })
        if (userData) {
          setLoggedIn(true);
          navigate('/movies', {replace: true})
        }
      } catch(err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    }, [navigate]
  );

  const handleUserRegistration = useCallback(
    async({ name, email, password }) => {
      setLoading(true);
      try {
        const userData = await mainApi.register({ name, email, password })
        if (userData) {
          handleUserAuthorization({ email, password })
          navigate('/movies', {replace: true})
        }
      } catch(err) {
        console.error(err)
      } finally {
        setLoading(false);
      }
    }, [handleUserAuthorization, navigate]
  );

  const handleUserCheck = useCallback(
    async() => {
      try {
        const userData = await mainApi.getUserInfo()
        setLoggedIn(true);
        setCurrentUser(userData);
      } catch(err) {
        console.error(err);
      }
    }, []
  );

  async function userProfileUpdate ({ name, email }) {
    setLoading(true);
    try {
      const userData = await mainApi.setUserProfile({ name, email })
      if (userData) {
        setCurrentUser(userData);
      }
    } catch(err) {
      console.error(err)
    } finally {
      setLoading(false);
    }
  };

  const handleUserLogOut = useCallback(
    async () => {
    try {
      const data = await mainApi.logout();
      if (data) {
        setLoggedIn(false);
        setCurrentUser({});
        setSaveCard([]);
        localStorage.clear();
        navigate('/', { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  }, [navigate]);

  async function getMoviesCards() {
    setLoading(true);
    try {
      const data = await movieApi.getMovies();
      if (data) {
        return data;
      }
    } catch(err) {
      console.error(err);
      setSearchError(true);
    } finally {
      setLoading(false);
    }
  }

  async function saveMovieCard(movie) {
    try {
      const movieData = await mainApi.createMovieCard({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIE_API}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIE_API}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
      if (movieData) {
        setSaveCard([movieData, ...saveCard])
      }
    } catch(err) {
      console.error(err);
    }
  }

  const getSavedMovies = useCallback(
    async () => {
    try {
      const savedMovie = await mainApi.getSavedMovies();
      if (savedMovie) {
        setSaveCard(savedMovie);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  async function deleteSavedMovie(movie) {
    const savedMovie = saveCard.find(
      (card) => card.movieId === movie.id || card.movieId === movie.movieId
    );
    try {
      const data = await mainApi.deleteCard(savedMovie._id)
      if (data) {
        setSaveCard((state) => state.filter((movie) => movie._id !== savedMovie._id));
      }
    } catch(err) {
      console.error(err)
    }
  }

  const handleBurgerMenuClick = () => {
    if(!isBurgerMenuOpen) {
      setIsBurgerMenuOpen(true)
    } else {
      setIsBurgerMenuOpen(false)
    }
  }

  useEffect(() => {
    handleUserCheck();
  }, [ loggedIn, handleUserCheck ])

  useEffect(() => {
    if (loggedIn) {
      getSavedMovies()
    }
  }, [ loggedIn, getSavedMovies ])

  return (
    <div className='app__content'>
      <CurrentUserContext.Provider value = {currentUser}>
        <HamburgerMenu
          isOpen = {isBurgerMenuOpen}
          onBurgerClick = {handleBurgerMenuClick}
        />
        <Routes>
          <Route path='/' element={<Main loggedIn = {loggedIn}/>} />
          <Route path='/movies'
            element = {
              <ProtectedRouteElement
                element={Movies}
                onBurgerClick = {handleBurgerMenuClick}
                SearchMovies = {getMoviesCards}
                isSearchError = {searchError}
                isLoading = {loading}
                savedMovie = {saveCard}
                saveMovie = {saveMovieCard}
                deleteMovie = {deleteSavedMovie}
                loggedIn = {loggedIn}
              />
            }
          />
          <Route path='/saved-movies'
            element = {
              <ProtectedRouteElement
                element = {SavedMovies}
                onBurgerClick = {handleBurgerMenuClick}
                loggedIn = {loggedIn}
                savedMovie = {saveCard}
                deleteMovie = {deleteSavedMovie}
              />
            }
          />
          <Route path='/profile'
            element = {
              <ProtectedRouteElement
                element={Profile}
                onBurgerClick = {handleBurgerMenuClick}
                editProfile = {userProfileUpdate}
                onLogOut = {handleUserLogOut}
                loggedIn = {loggedIn}
                isLoading = {loading}
              />
            }
          />
          <Route path='/signin'
            element = {
            <Login
              onLogin = {handleUserAuthorization}
              isLoading = {loading}
              loggedIn = {loggedIn}
            />
          }/>
          <Route path='/signup'
            element = {
            <Register
              onRegister = {handleUserRegistration}
              isLoading = {loading}
              loggedIn = {loggedIn}
            />
          }/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
