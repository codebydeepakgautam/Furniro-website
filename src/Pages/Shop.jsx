import React from 'react';
import ShopHeader from '../Components/ShopHeader';
import ShopFilterBar from '../Components/ShopFilterBar';
import ProductsSection from '../Components/ProductsSectionbar';
import Quality  from '../Components/Quality';


const Shop = () => {
  return <div className="pt-20 ">
   <ShopHeader/>
    <ShopFilterBar/>
    <ProductsSection/>
    <Quality/>
  </div>;
};

export default Shop;
