import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.js';

function App() {
  const [ isBurgerMenuOpen, setIsBurgerMenuOpen ] = React.useState(false);

  const handleBurgerMenuClick = () => {
    if(!isBurgerMenuOpen) {
      setIsBurgerMenuOpen(true)
    } else {
      setIsBurgerMenuOpen(false)
    }
  }

  return (
    <div className="app__content">
      <HamburgerMenu
        isOpen={isBurgerMenuOpen}
        onBurgerClick={handleBurgerMenuClick}
      />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies onBurgerClick={handleBurgerMenuClick}/>} />
        <Route path='/saved-movies' element={<SavedMovies onBurgerClick={handleBurgerMenuClick}/>} />
        <Route path='/profile' element={<Profile onBurgerClick={handleBurgerMenuClick}/>} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
