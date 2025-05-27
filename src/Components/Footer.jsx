import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black px-4 sm:px-6 md:px-20 pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Address */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
          <address className="not-italic text-gray-400 text-sm leading-6">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-400 font-medium mb-4">Links</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-400 font-medium mb-4">Help</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#" className="hover:underline">Payment Options</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-400 font-medium mb-4">Newsletter</h3>
          <form
            aria-label="Subscribe to newsletter"
            className="flex flex-col sm:flex-row sm:items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full sm:w-auto flex-1 border-b border-black placeholder:text-gray-400 text-sm bg-transparent mb-3 sm:mb-0 sm:mr-2"
              required
            />
            <button
              type="submit"
              className="text-sm font-semibold border-b border-black hover:text-gray-700 whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <hr className="my-10 border-gray-200" />
      <p className="text-sm text-black ">&copy; 2023 Funiro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
