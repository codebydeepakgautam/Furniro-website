import { Sofa } from "lucide-react";
import Group from '../assets/Image/Group 95 (1).png';
import sofa2 from '../assets/Image/Group 157.png';

const FeaturedProducts = () => {
  return (
    <div className="bg-white p-10 px-4 sm:px-6 md:px-20 pt-16 pb-8 rounded-lg shadow-md text-gray-800">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        
        {/* Left Panel */}
        <div className="md:w-1/4 space-y-2">
          <h2 className="text-[28px] font-semibold">Go to Product page for more Products</h2>
          <a href="#" className="text-sm text-gray-500 underline hover:text-gray-700">View More</a>
        </div>

        {/* Products */}
        <div className="flex flex-col sm:flex-row gap-8 md:w-2/4">
          {/* Product 1 */}
          <div className="text-center">
            <img src={Group} alt="Asgaard Sofa" className="w-64 h-40 object-cover rounded-md mx-auto" />
            <h3 className="font-semibold mt-2">Asgaard Sofa</h3>
            <p className="text-sm text-gray-600">Rs. 250,000.00</p>
            <div className="text-yellow-500 text-sm mt-1">
              4.7 ★★★★★ <span className="text-gray-500 text-xs ml-1">204 Review</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <img src={sofa2} alt="Outdoor Sofa Set" className="w-60 h-40 object-cover rounded-md mx-auto" />
            <h3 className="font-semibold mt-2">Outdoor Sofa Set</h3>
            <p className="text-sm text-gray-600">Rs. 224,000.00</p>
            <div className="text-yellow-500 text-sm mt-1">
              4.2 ★★★★★ <span className="text-gray-500 text-xs ml-1">145 Review</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/4">
          <h2 className="text-lg font-semibold mb-2">Add A Product</h2>
          <select className="bg-yellow-700 text-white px-4 py-2 rounded-md">
            <option>Choose a Product</option>
            <option>Sofa</option>
            <option>Chair</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
