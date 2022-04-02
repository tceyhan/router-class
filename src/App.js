
import './App.css';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
     </BrowserRouter>

    </div>
  );
}

export default App;
