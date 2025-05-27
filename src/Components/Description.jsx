import React, { useState } from "react";
import sofa1 from  '../assets/Image/Group 107.png'; // replace with actual image paths
import sofa2 from  '../assets/Image/Group 106.png'; // replace with actual image paths

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const tabClass = (tab) =>
    `px-4 py-2 font-medium border-b-2 transition ${
      activeTab === tab
        ? "text-black border-black"
        : "text-gray-500 border-transparent hover:text-black"
    }`;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Tabs */}
      <div className="flex justify-center space-x-8  border-gray-200">
        <button className={tabClass("description")} onClick={() => setActiveTab("description")}>
          Description
        </button>
        <button className={tabClass("additional")} onClick={() => setActiveTab("additional")}>
          Additional Information
        </button>
        <button className={tabClass("reviews")} onClick={() => setActiveTab("reviews")}>
          Reviews [5]
        </button>
      </div>

      {/* Content */}
      <div className="mt-10 ">
        {activeTab === "description" && (
          <>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
              speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and
              takes the show on the road.
            </p>
            <p className="text-gray-600 text-lg mt-6 max-w-4xl mx-auto">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
              engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn
              is a compact, stout-hearted hero with a well-balanced audio which boasts a clear
              midrange and extended highs for a sound that is both articulate and pronounced. The
              analogue knobs allow you to fine tune the controls to your personal preferences while
              the guitar-influenced leather strap enables easy and stylish travel.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-[#f9f1e7] rounded-xl p-4 flex justify-center">
                <img src={sofa1} alt="Sofa 1" className="max-h-72 object-contain" />
              </div>
              <div className="bg-[#f9f1e7] rounded-xl p-4 flex justify-center">
                <img src={sofa2} alt="Sofa 2" className="max-h-72 object-contain" />
              </div>
            </div>
          </>
        )}

        {activeTab === "additional" && (
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Additional product details will be shown here. You can include weight, dimensions,
            materials, and more.
          </p>
        )}

        {activeTab === "reviews" && (
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            ★★★★☆ – Great sofa! Comfortable and stylish. Would recommend.
          </p>
        )}
      </div>
    </div>
  );
}
