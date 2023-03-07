import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Register from './pages/Register'
import { Verification } from './pages/Verification';
import ForgotPassword from './pages/ForgotPassword';
import { ForgotPasswordEmail } from './pages/ForgotPasswordEmail';
import { MethaProvider } from './context/MethaContext';

/* contexts */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <MethaProvider>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home/:id' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/config' element={<Settings />} />
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
