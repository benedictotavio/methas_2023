import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/config' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
