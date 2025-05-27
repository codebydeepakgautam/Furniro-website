// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';         // <-- Correct import with uppercase B
import About from './pages/About';

import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import CartPage from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Compare from './pages/Compare';

import CartDrawer from './Components/CartDrawer';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Router>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
