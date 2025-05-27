import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartDrawer from './CartDrawer';

import madi from '../assets/Image/mdi_account-alert-outline (1).png';
import icon from '../assets/Image/akar-icons_search (1).png';
import icon2 from '../assets/Image/akar-icons_heart (1).png';
import icon3 from '../assets/Image/ant-design_shopping-cart-outlined (1).png';
import house from '../assets/Image/Meubel House_Logos-05 (1).png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={house} alt="Logo" className="h-8" />
          <span className="self-center text-3xl font-[500] whitespace-nowrap dark:text-white">
            Furniro
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? 'flex' : 'hidden'
          } flex-col md:flex-row md:items-center`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li className="mt-4 md:mt-0">
              <div className="flex justify-center md:justify-start items-center space-x-4 md:ml-6">
                <Link to="/user" onClick={() => setMenuOpen(false)}>
                  <img src={madi} alt="User Icon" className="h-6 w-6" />
                </Link>
                <Link to="/search" onClick={() => setMenuOpen(false)}>
                  <img src={icon} alt="Search Icon" className="h-6 w-6" />
                </Link>
                <Link to="/favorites" onClick={() => setMenuOpen(false)}>
                  <img src={icon2} alt="Favorites Icon" className="h-6 w-6" />
                </Link>

                {/* Cart Icon with Hover Drawer */}
                <div
                  className="relative"
                  onMouseEnter={() => setCartOpen(true)}
                  onMouseLeave={() => setCartOpen(false)}
                >
                  <img src={icon3} alt="Cart Icon" className="h-6 w-6 cursor-pointer" />
                  <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
