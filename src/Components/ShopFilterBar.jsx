import React from 'react';
import { SlidersHorizontal, LayoutGrid, List } from 'lucide-react';

const ShopFilterBar = () => {
  return (
    <div className="bg-[#faf3eb] w-full flex flex-wrap items-center justify-between px-4 py-3 border-b">
      {/* Left side */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Filter */}
        <button className="flex items-center gap-1 text-black font-medium">
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>

        {/* Grid/List Toggle */}
        <div className="flex items-center gap-2 text-black">
          <LayoutGrid className="w-5 h-5 cursor-pointer" />
          <List className="w-5 h-5 cursor-pointer" />
        </div>

        {/* Divider */}
        <div className="h-6 border-l border-gray-400 mx-2" />

        {/* Result Count */}
        <p className="text-sm text-black">Showing 1–16 of 32 results</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        {/* Show Count */}
        <div className="flex items-center gap-2">
          <span className="text-black font-medium">Show</span>
          <span className="bg-white px-3 py-1 border text-sm">16</span>
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <span className="text-black font-medium">Short by</span>
          <span className="bg-white px-4 py-1 border text-sm text-gray-400">Default</span>
        </div>
      </div>
    </div>
  );
};

export default ShopFilterBar;
