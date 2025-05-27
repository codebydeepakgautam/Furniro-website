import React from 'react';
import laptop from '../assets/Image/Rectangle 68.png'
import search from '../assets/Image/akar-icons_search (2).png'
const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
      {/* Main Blog Post Section */}
      <div className="lg:w-2/3">
        <img
          src={laptop}
          alt="Millennial Design"
          className="rounded-lg w-full mb-4"
        />
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
          <span>👤 Admin</span>
          <span>📅 14 Oct 2022</span>
          <span>📍 Wood</span>
        </div>
       
      </div>

      {/* Sidebar */}
     <aside className="space-y-10">
      {/* Search Box */}
      <div className="relative">
  <input
    type="text"
    placeholder="Search"
    className="w-full border border-gray-300 rounded px-4 py-2 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <span className="absolute right-3 top-2.5 text-gray-400 text-lg"><img src={search} alt="" /></span>
</div>


      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <ul className="space-y-10 text-gray-700">
          <li className="flex justify-between">Crafts <span>2</span></li>
          <li className="flex justify-between">Design <span>8</span></li>
          <li className="flex justify-between">Handmade <span>7</span></li>
          <li className="flex justify-between">Interior <span>1</span></li>
          <li className="flex justify-between">Wood <span>6</span></li>
        </ul>
      </div>
    </aside>
    </div>
  );
};

export default Blog;
