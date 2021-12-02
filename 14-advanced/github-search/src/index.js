import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/details/:username' element={<Profile />} />
    </Routes>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
