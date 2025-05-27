import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import bedroomImg from "../assets/Image/Rectangle 24.png";
import diningroomImg from "../assets/Image/diningroom.png";
import potty from "../assets/Image/potty.png";

const Inspirations = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidths = [400, 280, 280];

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const gap = 24;
      const scrollLeft = cardWidths.slice(0, index).reduce((acc, w) => acc + w + gap, 0);

      scrollRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      let acc = 0;
      let index = 0;
      const gap = 24;
      for (let i = 0; i < cardWidths.length; i++) {
        acc += cardWidths[i] + gap;
        if (scrollLeft < acc) {
          index = i;
          break;
        }
      }
      if (index !== activeIndex) setActiveIndex(index);
    }
  };

  const scrollRight = () => {
    const nextIndex = Math.min(activeIndex + 1, 2);
    scrollToIndex(nextIndex);
  };

  return (
    <div className="bg-[#fdf9f5] relative py-16 px-6 md:px-16 lg:px-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div className=" mt-10 w-full lg:w-1/3 pr-0 lg:pr-10 mb-12 lg:mb-0 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-[30px] font-extrabold text-gray-900 leading-tight mb-6">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-md mb-10">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <button className="bg-[#c99b32] hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded w-max">
            Explore More
          </button>
        </div>

        {/* Scrollable Images Container */}
        <div className="w-full lg:w-2/3 relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {/* First Card */}
            <div className="relative shrink-0 w-[260px] h-[350px] md:w-[320px] md:h-[420px] lg:w-[400px] lg:h-[500px] rounded-lg">
              <img
                src={bedroomImg}
                alt="Inner Peace"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-6 left-0 right-0 bg-white bg-opacity-90 px-4 py-4 flex items-center justify-between rounded-b-lg">
                <div>
                  <p className="text-sm text-gray-500">01 — Bed Room</p>
                  <p className="text-xl md:text-2xl font-semibold text-gray-900">Inner Peace</p>
                </div>
                <button className="bg-[#c99b32] p-2 text-white rounded">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Second Card */}
            <div className="relative shrink-0 w-[220px] h-[300px] md:w-[280px] md:h-[350px] rounded-lg">
              <img
                src={diningroomImg}
                alt="Dining Room"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Pagination Dots below second card */}
              <div className="absolute bottom-[-36px] left-1/2 transform -translate-x-1/2 flex space-x-3">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    className={`h-3 w-3 rounded-full border-2 transition-colors duration-300 ${
                      activeIndex === i
                        ? "border-[#c99b32] bg-[#c99b32]"
                        : "border-[#c99b32] bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Third Card */}
            <div className="relative shrink-0 w-[220px] h-[300px] md:w-[280px] md:h-[350px] rounded-lg">
              <img
                src={potty}
                alt="Potty Room"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Slide Button */}
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-[-16px] md:right-[-24px] transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10"
            aria-label="Scroll right"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inspirations;
