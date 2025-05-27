// src/components/CartDrawer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import sofa from '../assets/Image/Group 95.png';
import abc from '../assets/Image/Group 146.png';

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleItemClick = (slug) => {
    navigate(`/product/${slug}`);
    onClose();
  };

  return (
    <div className="absolute right-0 top-full mt-3 bg-white shadow-lg w-80 max-h-[90vh] p-4 border border-gray-300 z-50 rounded-md">
      <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
        Shopping Cart
        <button
          onClick={onClose}
          aria-label="Close cart"
          className="text-gray-500 hover:text-gray-900 text-xl font-bold"
        >
          &times;
        </button>
      </h2>

      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
        <div
          onClick={() => handleItemClick('asgaard-sofa')}
          className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
        >
          <img src={sofa} alt="Asgaard Sofa" className="w-16 h-16 object-cover rounded" />
          <div className="ml-4 flex-1">
            <p className="font-medium">Asgaard sofa</p>
            <p className="text-sm text-gray-600">1 x ₹250,000.00</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log('Remove Asgaard Sofa');
            }}
            className="text-gray-600 hover:text-red-600 text-lg"
            title="Remove"
          >
            ✕
          </button>
        </div>

        <div
          onClick={() => handleItemClick('casaking-wood')}
          className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
        >
          <img src={abc} alt="Casaking Wood" className="w-16 h-16 object-cover rounded" />
          <div className="ml-4 flex-1">
            <p className="font-medium">Casaking Wood</p>
            <p className="text-sm text-gray-600">1 x ₹270,000.00</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log('Remove Casaking Wood');
            }}
            className="text-gray-600 hover:text-red-600 text-lg"
            title="Remove"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between font-semibold text-lg">
        <span>Subtotal</span>
        <span>₹520,000.00</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={() => {
            navigate('/wishlist');
            onClose();
          }}
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          Cart
        </button>
        <button
          onClick={() => {
            navigate('/checkout');
            onClose();
          }}
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          Checkout
        </button>
        <button
          onClick={() => {
            navigate('/compare');
            onClose();
          }}
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          Compare
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
