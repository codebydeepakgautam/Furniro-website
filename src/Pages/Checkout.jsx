import React from 'react';
  import Add from '../Pages/Add'
  import Checkoutdeatils from '../Components/Checkoutdeatils'
import CheckoutPage from '../Components/CheckoutPage';
import Quality from '../Components/Quality'

const Wishlist = () => {
  return (
    <div className="pt-20">
      <Checkoutdeatils/>
      <div className='mt-6'>
        <CheckoutPage/>
        <Quality/>
      </div>
     
    </div>
  );
};

export default Wishlist;
