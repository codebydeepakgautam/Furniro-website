import React, { useState } from 'react';
import CartDrawer from '../Components/CartDrawer';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setIsCartOpen(!isCartOpen)}>Toggle Cart</button>
      <CartDrawer isOpen={isCartOpen} />
    </div>
  );
};

export default App;
