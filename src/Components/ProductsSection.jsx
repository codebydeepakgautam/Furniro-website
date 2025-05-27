import React from 'react';

import syltherine from  '../assets/Image/syltherine.png';
import leviosa from '../assets/Image/leviosa.png'
import lolito  from '../assets/Image/lolito.png';
import respira from '../assets/Image/respira.png';
import grifo from  '../assets/Image/grifo.png';
import muggo from '../assets/Image/muggo.png';
import pingky from  '../assets/Image/pingky.png';
import potty from '../assets/Image/potty.png';

const products = [
  {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: syltherine,
    tag: "-30%",
  },
  {
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: leviosa,
    tag: "Add to cart",
  },
  {
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: lolito,
    tag: "-50%",
  },
  {
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: respira,
    tag: "New",
  },
  {
    title: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: grifo,
  },
  {
    title: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    image: muggo,
    tag: "New",
  },
  {
    title: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: pingky,
    tag: "-50%",
  },
  {
    title: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    image: potty,
    tag: "New",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-12 px-4 bg-white text-center max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group bg-white text-black rounded-lg overflow-hidden shadow-md cursor-pointer"
          >
            {/* Tag */}
            {product.tag && (
              <span
                className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full z-10 ${
                  product.tag === 'New'
                    ? 'bg-teal-500 text-white'
                    : product.tag.includes('%')
                    ? 'bg-red-500 text-white'
                    : 'hidden'
                }`}
              >
                {product.tag}
              </span>
            )}

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-110 object-cover"
            />

            {/* Hover Overlay covering full card */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-lg">
              <button className="bg-white text-yellow-600 font-semibold px-4 py-2 rounded shadow hover:bg-yellow-100">
                Add to cart
              </button>
              <div className="flex space-x-4 text-white text-sm">
                <span className="hover:text-yellow-400 cursor-pointer">🔗 Share</span>
                <span className="hover:text-yellow-400 cursor-pointer">🔁 Compare</span>
                <span className="hover:text-yellow-400 cursor-pointer">🤍 Like</span>
              </div>
            </div>

            {/* Product info */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="mt-2 flex items-center justify-center space-x-2">
                <span className="font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="line-through text-gray-400 text-sm">{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-2 border border-yellow-500 text-yellow-700 font-semibold rounded hover:bg-yellow-50 transition">
        Show More
      </button>
    </section>
  );
}