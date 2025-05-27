// src/pages/Blog.jsx
import React from 'react';
import Blogdeatil from '../Components/Blogdeatil';
import BlogPostCard from '../Components/BlogPostCard';
import Sidebar from '../Components/Sidebar'; // ✅ FIX: Missing import
import Blogcarda from '../Components/Bolgcarda'
import Quality from '../Components/Quality'

const Blog = () => {
  return (
    <div className="pt-20">
      <div className="">
        <Blogdeatil />
        <BlogPostCard />
        <Sidebar/>
       < Blogcarda/>
       
      </div>
      <div className='my-10'>
        <Quality/>
      </div>
    </div>
  );
};

export default Blog;
