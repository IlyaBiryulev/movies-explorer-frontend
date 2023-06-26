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

import * as api from '../../utils/MainApi.js';

function App() {
  const navigate = useNavigate();

  const [ loggedIn,         setLoggedIn ] = useState(false);
  const [ isRegisterSucces, setIsRegisterSucces] = useState(false);
  const [ loading,          setLoading] = useState(true);
  const [ currentUser,      setCurrentUser] = useState({});
  const [ userData,        setUserData ] = React.useState("");


  const [ isBurgerMenuOpen, setIsBurgerMenuOpen ] = useState(false);

  const handleBurgerMenuClick = () => {
    if(!isBurgerMenuOpen) {
      setIsBurgerMenuOpen(true)
    } else {
      setIsBurgerMenuOpen(false)
    }
  }

 /*  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo()])
    .then((values) => {
      setCurrentUser(values[0])
    })
    .catch((err) => {
      console.log(err);
    });
    }
  },[loggedIn]) */

  const userCheck = useCallback(
    async () => {
      try {
        const userData = await api.getUserInfo();
        if (userData) {
          setUserData(userData)
          setLoggedIn(true);
        }
      } catch(err) {
        console.error(err)
      } finally {
        setLoading(false);
      }
    },
  );

  const handleUserRegister  = useCallback(
    async ({ name, email, password }) => {
      try {
        const data = await api.register({ name, email, password });
        if(data) {
          /* setIsRegisterSucces(true); */
          navigate('/signin', {replace: true});
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  const handleUserLogin  = useCallback(
    async ({ email, password }) => {
      setLoading(true);
      try {
        const data = await api.authorize({ email, password});
        if(data) {
          setLoggedIn(true);
          navigate('/movies', {replace: true});
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  const handleUserLogOut = React.useCallback(async () => {
    try {
      const data = await api.logout();
      if (data) {
        setLoggedIn(false);
        navigate('/signin', { replace: true });
      }
    } catch (err) {
      console.error(err);
    }
  }, [navigate]);

  useEffect(() => {
    userCheck();
  }, [loggedIn, userCheck])

  return (
    <div className="app__content">
      <CurrentUserContext.Provider value={currentUser}>
        <HamburgerMenu
          isOpen={isBurgerMenuOpen}
          onBurgerClick={handleBurgerMenuClick}
        />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies'
            element = {
              <ProtectedRouteElement
                element={Movies}
                onBurgerClick = {handleBurgerMenuClick}
                loggedIn ={loggedIn}
              />
            }
          />
          <Route path='/saved-movies'
            element = {
              <ProtectedRouteElement
                element={SavedMovies}
                onBurgerClick = {handleBurgerMenuClick}
                loggedIn ={loggedIn}
              />
            }
          />
          <Route path='/profile'
            element = {
              <ProtectedRouteElement
                element={Profile}
                onBurgerClick = {handleBurgerMenuClick}
                onLogOut = {handleUserLogOut}
                loggedIn ={loggedIn}
              />
            }
          />
          <Route path='/signin' element={<Login onLogin = {handleUserLogin}/>} />
          <Route path='/signup' element={<Register onRegister = {handleUserRegister}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
