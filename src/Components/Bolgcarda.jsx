import React from 'react';
import laptop from '../assets/Image/Rectangle 68.png';
import Rectangle from '../assets/Image/Rectangle 69.png'
import Rectanglea from '../assets/Image/Rectangle 69 (1).png'
import Rectanglec from '../assets/Image/Rectangle 69 (2).png'
import Imagea from '../assets/Image/Rectangle 69 (3).png'
import Imagec from '../assets/Image/Rectangle 69 (4).png'
import lapot from '../assets/Image/Rectangle 68 (1).png'


// Dummy recent posts
const recentPosts = [
  {
    title: 'Going all-in with millennial design',
    date: '03 Aug 2022',
    img: Rectangle,
  },
  {
    title: 'Exploring new ways of decorating',
    date: '03 Aug 2022',
    img: Rectanglea,
  },
  {
    title: 'Handmade pieces that took time to make',
    date: '03 Aug 2022',
    img: Rectanglec,
  },
  {
    title: 'Modern home in Milan',
    date: '03 Aug 2022',
    img: Imagea,
  },
  {
    title: 'Colorful office redesign',
    date: '03 Aug 2022',
    img: Imagec,
  },
];

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4  flex flex-col lg:flex-row gap-8">
      {/* Main Blog Post Section */}
      <div className="lg:w-2/3">
        <h2 className="text-2xl font-bold pt-5">Going all-in with millennial design</h2>
        <p className="text-gray-700 pt-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
       <a href="/">
  <button className="border-b-2 my-5 border-black pb-1 hover:text-gray-600">
    Read more
  </button>
</a>

        <div className="mt-6">
          <img src={lapot} alt="Laptop on desk" className="rounded-lg w-full" />
        </div>
       
      </div>

      {/* Sidebar */}
      <aside className="lg:w-1/3 space-y-4 ">
        {/* Search Box */}
        <div className="relative">
          
        </div>

        {/* Recent Posts */}
        

        {/* Categories */}
        
      </aside>
    </div>
  );
};

export default Blog;
