import React from 'react';
import heroImg from '../assets/Image/hero.png'; // Update path accordingly

function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center md:justify-end px-4 sm:px-8 md:px-24"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="bg-[#FFF2E1] max-w-xl w-full p-6 sm:p-10 md:p-12 rounded-2xl shadow-lg
                      text-center md:text-left"
      >
        <p className="text-xs sm:text-sm text-gray-600 mb-2 tracking-wide uppercase font-semibold">New Arrival</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B68B2D] leading-tight mb-4">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B68B2D] text-white font-semibold px-6 py-3 rounded hover:bg-[#a27b26] transition text-sm sm:text-base">
          BUY NOW
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
