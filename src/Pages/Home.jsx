import React from 'react';
import HeroSection from '../Components/HeroSection';
import BrowseRange from '../Components/Broswer';
import ProductsSection from '../Components/ProductsSection';
import Inspirations from '../Components/Inspirations';
import FuniroFurnitureGallery from '../Components/FuniroFurnitureGallery';

const Home = () => {
  return (
    <div className="pt-16 md:pt-20"> {/* Add top padding to avoid overlap with fixed navbar */}
      <HeroSection />
      <BrowseRange/>
      <ProductsSection/>
       <Inspirations />
       <FuniroFurnitureGallery/>
    </div>
  );
};

export default Home;
