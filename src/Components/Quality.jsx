import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="bg-[#fdf7f0] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <FaTrophy className="text-3xl sm:text-4xl text-yellow-800 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-base sm:text-lg">High Quality</h3>
              <p className="text-gray-500 text-sm">crafted from top materials</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <FaShieldAlt className="text-3xl sm:text-4xl text-yellow-800 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Warranty Protection</h3>
              <p className="text-gray-500 text-sm">Over 2 years</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <FaShippingFast className="text-3xl sm:text-4xl text-yellow-800 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Free Shipping</h3>
              <p className="text-gray-500 text-sm">Order over 150 $</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start space-x-4">
            <FaHeadset className="text-3xl sm:text-4xl text-yellow-800 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-base sm:text-lg">24 / 7 Support</h3>
              <p className="text-gray-500 text-sm">Dedicated support</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
