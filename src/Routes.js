import { useContext } from 'react';
import { AppContext } from '../src/context';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Home from './pages/Home';
import Plantation from './pages/Plantation';
import Stock from './pages/Stock';
import Sensor from './pages/Sensor';
import Consultancy from './pages/Consultancy';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
  
  const AppRoutes = () => {
    const { logged } = useContext(AppContext);

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={logged ? <Home /> : <Navigate to='/login' />} />
          <Route path="/plantation" element={logged ? <Plantation /> : <Navigate to='/login' />} />
          <Route path="/stock" element={logged ? <Stock /> : <Navigate to='/login' />} />
          <Route path="/sensor" element={logged ? <Sensor /> : <Navigate to='/login' />} />
          <Route path="/consultancy" element={logged ? <Consultancy /> : <Navigate to='/login' />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={logged ? <Navigate to='/' /> : <Login />} />
          <Route path="/register" element={logged ? <Navigate to='/' /> : <Register />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;
  