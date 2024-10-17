import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Products from './components/Products';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';  // Import Cart
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/products' element={<Products />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/cart' element={<Cart />} />  {/* Add Cart Route */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
