import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Plantation from './pages/Plantation';
import Stock from './pages/Stock';
import Sensor from './pages/Sensor';
import Consultancy from './pages/Consultancy';
import About from './pages/About';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plantation" element={<Plantation />} />
        <Route path="/stock" element={<Stock />} />    
        <Route path="/sensor" element={<Sensor />} />        
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
