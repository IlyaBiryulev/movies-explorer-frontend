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

function App() {
  const navigate = useNavigate();

  const [ loggedIn,         setLoggedIn         ] = useState(false);
  const [ loading,          setLoading          ] = useState(true);
  const [ currentUser,      setCurrentUser      ] = useState({});

  const [ isBurgerMenuOpen, setIsBurgerMenuOpen ] = useState(false);

  const [ searchError,      setSearchError      ] = useState(false);
  const [ saveCard,         setSaveCard         ] = useState([]);

  const handleUserRegistration = useCallback(
    async({ name, email, password }) => {
      try {
        const userData = await mainApi.register({ name, email, password })
        if (userData) {
          navigate('/signin', {replace: true})
        }
      } catch(err) {
        console.error(err)
      }
    }, [navigate]
  )

  const handleUserAuthorization = useCallback(
    async({ email, password }) => {
      try {
        const userData = await mainApi.authorize({ email, password })
        if (userData) {
          setLoggedIn(true);
          navigate('/movies', {replace: true})
        }
      } catch(err) {
        console.log(err)
      }
    }, [navigate]
  )

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
  )

  async function userProfileUpdate ({ name, email }) {
    try {
      const userData = await mainApi.setUserProfile({ name, email })
      if (userData) {
        setCurrentUser(userData);
      }
    } catch(err) {
      console.error(err)
    }
  }

  const handleUserLogOut = useCallback(
    async () => {
    try {
      const data = await mainApi.logout();
      if (data) {
        setLoggedIn(false);
        setCurrentUser({})
        navigate('/signin', { replace: true });
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
      console.error(err)
    } finally {
      setLoading(false);
    }
  }

   async function saveMovieCard(item) {
    try {
      const movieData = await mainApi.createMovieCard({
        /* country: item.country,
        director: item.director,
        duration: item.duration,
        year: item.year,
        description: item.description,
        image: item.image,
        trailerLink: item.trailerLink,
        thumbnail: item.thumbnail,
        movieId: item.movieId,
        nameRU: item.nameRU,
        nameEN: item.nameEN, */
      });
      if (movieData) {
        setSaveCard([movieData, ...saveCard])
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

  return (
    <div className="app__content">
      <CurrentUserContext.Provider value={currentUser}>
        <HamburgerMenu
          isOpen={isBurgerMenuOpen}
          onBurgerClick={handleBurgerMenuClick}
        />
        <Routes>
          <Route path='/' element={<Main loggedIn = {loggedIn}/>} />
          {/* <Route path='/movies'
            element={
              <Movies
                onBurgerClick = {handleBurgerMenuClick}
                onSearch={getMoviesCards}
                isSearchError={searchError}
                isLoading={loading}
                saveMovie={saveMovieCard}
                loggedIn ={loggedIn}
              />
            }
          />
          <Route path='/saved-movies'
            element={
              <SavedMovies
                onBurgerClick = {handleBurgerMenuClick}
                savedMovie={saveCard}
              />
            }
          />
          <Route path='/profile'
            element={
              <Profile
                onBurgerClick = {handleBurgerMenuClick}
              />
            }
          /> */}
          <Route path='/movies'
            element = {
              <ProtectedRouteElement
                element={Movies}
                onBurgerClick = {handleBurgerMenuClick}
                onSearch = {getMoviesCards}
                isSearchError = {searchError}
                isLoading = {loading}
                saveMovie = {saveMovieCard}
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
                loggedIn ={loggedIn}
              />
            }
          />
          <Route path='/signin'
            element={
            <Login
              onLogin = {handleUserAuthorization}
            />
          }/>
          <Route path='/signup'
            element={
            <Register
              onRegister = {handleUserRegistration}
            />
          }/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
