import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Register from './pages/Register'

/* contexts */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/config' element={<Settings />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
