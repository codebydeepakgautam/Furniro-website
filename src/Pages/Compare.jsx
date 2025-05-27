import React from 'react';
import Comparefile from '../Components/Comparefile'
import ProductCard from '../Components/ProductCard';
import TopRated from '../Components/TopRated';
import ProductGrid from '../Components/ProductGrid';
import Quality from '../Components/Quality'

const Wishlist = () => {
  return (
    <div className="pt-20">
      <Comparefile/>
      <ProductCard/>
      <TopRated/>
      <ProductGrid/>
     <Quality/>
     
    </div>
  );
};

export default Wishlist;
