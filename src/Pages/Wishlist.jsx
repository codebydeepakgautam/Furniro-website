import React from 'react';
 import Add from '../Pages/Add'
import CartPage from '../Components/CartPage';
import Quality from '../Components/Quality'
const Wishlist = () => {
  return (
    <div className="pt-20">
      <h1 className="text-2xl font-bold mb-4">
        <Add/>
        <CartPage/>
        <Quality/>
      </h1>
    
    </div>
  );
};

export default Wishlist;
