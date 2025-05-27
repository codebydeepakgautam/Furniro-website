import React from 'react';
import shopBg from '../assets/Image/shop-header.png';
import house from '../assets/Image/Meubel House_Logos-05 (1).png'

export default function ShopHeader() {
  return (
    <div
      className="w-full h-[250px] bg-cover bg-center flex items-center justify-center m-0 p-0"
      style={{
        backgroundImage: `url(${shopBg})`,
      }}
    >
      <div className="text-center text-black px-4 py-2 rounded">
        <img className=' mx-auto py-2 w-[77]' src={house} alt="house" />
        <h1 className="text-[40px] font-semibold mb-2">Cart</h1>
        <div className="text-sm">
          <span className="font-semibold">Home</span>
          <span className="mx-1">›</span>
          <span className="text-gray-700">Cart</span>
        </div>
      </div>
    </div>
  );
}
