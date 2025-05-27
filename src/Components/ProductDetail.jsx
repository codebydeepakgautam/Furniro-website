import React, { useState } from "react";
import sofa1 from '../assets/Image/Group 95 (1).png';
import sofa2 from '../assets/Image/Group 94 (1).png';
import sofa3 from '../assets/Image/Group 98 (1).png';
import sofa4 from '../assets/Image/Group 97.png';
import sofa5 from '../assets/Image/Group 96.png';

export default function ProductDetailPage() {
  const images = [sofa1, sofa2, sofa3, sofa4, sofa5];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Image Section */}
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className={`w-16 h-16 object-cover rounded-md cursor-pointer border ${
                selectedImage === img ? "border-yellow-700" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 bg-[#f9f1e7] rounded-xl p-4 h-72 sm:h-96 md:h-[500px] flex items-center justify-center">
          <img src={selectedImage} alt="Selected Sofa" className="max-h-full max-w-full object-contain" />
        </div>
      </div>

      {/* Product Info Section */}
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Asgaard sofa</h1>
        <p className="text-xl text-gray-500 mt-2">Rs. 250,000.00</p>

        <div className="flex items-center mt-2">
          <div className="text-yellow-500 text-xl">★★★★☆</div>
          <span className="ml-2 text-sm text-gray-400">5 Customer Review</span>
        </div>

        <p className="mt-4 text-gray-700 text-sm sm:text-base">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
          stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound.
        </p>

        {/* Size */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-800">Size</h3>
          <div className="flex gap-2 mt-2">
            {["L", "XL", "XS"].map((size) => (
              <button
                key={size}
                className={`px-3 py-1 border rounded-md text-sm ${
                  selectedSize === size
                    ? "bg-yellow-700 text-white border-yellow-700"
                    : "border-gray-300 text-gray-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-800">Color</h3>
          <div className="flex gap-2 mt-2">
            {[{ name: "purple", color: "bg-purple-500" }, { name: "black", color: "bg-black" }, { name: "gold", color: "bg-yellow-800" }].map(
              ({ name, color }) => (
                <button
                  key={name}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === name ? "border-yellow-700" : "border-gray-300"
                  } ${color}`}
                  onClick={() => setSelectedColor(name)}
                ></button>
              )
            )}
          </div>
        </div>

        {/* Quantity & Actions */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center border rounded-md">
            <button onClick={() => handleQuantityChange(-1)} className="px-3 py-1 text-xl">-</button>
            <span className="px-4">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="px-3 py-1 text-xl">+</button>
          </div>

          <button className="bg-yellow-700 text-white px-6 py-2 rounded-md hover:bg-yellow-800">
            Add To Cart
          </button>

          <button className="border border-gray-400 px-6 py-2 rounded-md hover:bg-gray-100">
            + Compare
          </button>
        </div>

        <hr className="my-8" />

        {/* Product Meta */}
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>SKU</strong>: SS001</p>
          <p><strong>Category</strong>: Sofas</p>
          <p><strong>Tags</strong>: Sofa, Chair, Home, Shop</p>
          <p className="flex gap-2 items-center">
            <strong>Share</strong>:
            <span className="flex gap-2 text-lg">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
