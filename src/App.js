import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Plantation from './pages/Plantation';
import Stock from './pages/Stock';
import Consultancy from './pages/Consultancy';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plantation" element={<Plantation />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/consultancy" element={<Consultancy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
