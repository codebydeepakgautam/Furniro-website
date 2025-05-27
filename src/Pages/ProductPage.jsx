// src/pages/ProductPage.jsx
import React, { useState } from 'react';
import CartDrawer from '../components/CartDrawer';
import About from './About';  // Import your About component

function ProductPage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="p-8 min-h-screen bg-gray-50 relative">
      {/* Replace product info with About component */}
      <About />

      {/* Button to open Cart Drawer */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transition"
      >
        Open Cart
      </button>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default ProductPage;
