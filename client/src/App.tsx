import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import { Context, UserProvider } from './context/UserContext';
import { MethaProvider } from './context/MethaContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Register from './pages/Register'
import { Verification } from './pages/Verification';
import ForgotPassword from './pages/ForgotPassword';
import { ForgotPasswordEmail } from './pages/ForgotPasswordEmail';
import User from './pages/User';
import ProtectedRoute from './utils/PrivateRoute';
import { useContext } from 'react';
import PrivateRoute from './utils/PrivateRoute';
import Initial from './pages/Initial';

/* contexts */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <MethaProvider>
            <Routes>
              <Route path='/' element={<Initial />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<PrivateRoute component={Home} />} />
              <Route path='/register' element={<Register />} />
              <Route path='/config' element={<PrivateRoute component={Settings} />} />
              <Route path='/user' element={<PrivateRoute component={User} />} />
              <Route path='/forgot' element={<ForgotPasswordEmail />} />
              <Route path='/forgot/:id' element={<ForgotPassword />} />
              <Route path='/verify/:id' element={<Verification />} />
            </Routes>
          </MethaProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;