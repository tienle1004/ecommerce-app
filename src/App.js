import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import NotFound from './components/NotFound'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='products' element={<Product />} />
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <hr />
      <Footer />
    </>
  );
}

export default App;
