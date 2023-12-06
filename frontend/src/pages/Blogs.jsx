import React from 'react';
import BlogPage from '../components/BlogPage';

const Blogs = () => {
    return (
        <div>
        <div className='py-40 bg-black text-center text-white px-4'>
            <h2 className='text-5xl lg:text-6xl leading-snug font-bold mb-5'>Blogs Page</h2>
        </div>

        
        {/* All blogs container */}
            <BlogPage/>
        </div>
    );
};

export default Blogs;