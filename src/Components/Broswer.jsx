import React from 'react';
import diningImg  from '../assets/Image/dining.png';
import livingImg from '../assets/Image/living.png';
import bedroomImg from '../assets/Image/bedroom.png';

export default function BrowseRange() {
  
   const items = [
  { title: 'Dining', image: diningImg },
  { title: 'Living', image: livingImg },
  { title: 'Bedroom', image: bedroomImg },
];
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
        Browse The Range
      </h2>
      <p className="text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-110 object-cover"
            />
            <div className="py-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
