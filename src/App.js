import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
<<<<<<< HEAD
import Plantation from './pages/Plantation';
import Stock from './pages/Stock';
import Consultancy from './pages/Consultancy';
=======
import Sensor from './pages/Sensor';
>>>>>>> 9a56fde847a8c5bfc0d2a31f561f8afd700f4fd3

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/plantation" element={<Plantation />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/consultancy" element={<Consultancy />} />
=======
        <Route path="/sensor" element={<Sensor />} />
>>>>>>> 9a56fde847a8c5bfc0d2a31f561f8afd700f4fd3
      </Routes>
    </BrowserRouter>
  );
}

export default App;
