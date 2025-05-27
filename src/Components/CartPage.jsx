import React from 'react';
import { Trash2 } from 'lucide-react';
import sofa1 from '../assets/Image/Group 95.png'

const CartPage = () => {
  return (
    <div className=" p-4 bg-white flex flex-col lg:flex-row gap-6 font-sans text-sm">
      {/* Cart Items Section */}
      <div className="flex-1">
        {/* Table Header */}
        <div className="bg-[#f9f1e7] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 text-xs sm:text-sm text-black p-4 rounded-md font-semibold">
          <span className="col-span-2">Product</span>
          <span className="hidden sm:block">Price</span>
          <span className="hidden sm:block">Quantity</span>
          <span className="hidden sm:block">Subtotal</span>
        </div>

        {/* Single Cart Item */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 items-center py-8  border-gray-200 text-xs sm:text-sm gap-2 sm:gap-4">
          {/* Product Info */}
          <div className="col-span-2 flex items-center gap-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden bg-[#f9f1e7] flex items-center justify-center">
              <img
                src={sofa1}
                alt="Asgaard Sofa"
                class="w-full h-full object-contain"
              />
            </div>
            <span className="text-gray-500 text-xs sm:text-sm">Asgaard sofa</span>
          </div>

          {/* Price */}
          <span className="text-gray-400 hidden sm:block">Rs. 250,000.00</span>

          {/* Quantity Input */}
          <input
            type="number"
            value={1}
            readOnly
            className="w-12 h-8 border border-gray-300 text-center rounded-md text-sm  "
          />

          {/* Subtotal & Trash */}
          <div className="flex items-center justify-between pr-2 text-black col-span-2 sm:col-span-1">
            <span>Rs. 250,000.00</span>
            <Trash2 className="w-4 h-4 text-yellow-700 ml-2 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Cart Totals Section */}
      <div className="w-full sm:max-w-sm bg-[#f9f1e7] p-4 sm:p-5 rounded-md flex flex-col gap-4 self-start">
        <h2 className="text-lg font-bold text-black text-center">Cart Totals</h2>

        <div className="flex justify-evenly text-sm">
          <span className="font-semibold">Subtotal</span>
          <span className="text-gray-400">Rs. 250,000.00</span>
        </div>

        <div className="flex justify-evenly text-sm">
          <span className="font-semibold">Total</span>
          <span className="text-yellow-700 font-bold">Rs. 250,000.00</span>
        </div>

        <button className="mt-2 mx-auto w-full sm:w-40 border border-black text-black font-semibold py-2 rounded-md hover:bg-black hover:text-white transition-all">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartPage;
