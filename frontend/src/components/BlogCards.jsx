import React from 'react'
import {Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import {FaCalendar} from 'react-icons/fa6'

const BlogCards = ({blogs, currentPage, selectedCatergory, pageSize}) => {
    const filterBlogs = blogs.filter((blogs) => !selectedCatergory || blogs.category === selectedCatergory)
    .slice((currentPage -1)*pageSize, currentPage * pageSize)
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
            filterBlogs.map(blog => <Link key={blog.id} className='p-5 shadow-lg rounded'>
                <div>
                    <img src={blog.image} alt="blog-img"  className='w-full'/>
                </div>
                <h3 className='mt-4 mb-2 font-bold hover:text-blue-400 cursor-pointer'>{blog.title}</h3>
                <p className='mb-2 text-sm text-gray-600'><FaUser className='inline-flex items-center mr-2' />{blog.author}</p>
                <p className='mb-2 text-sm text-gray-600'><FaCalendar className='inline-flex items-center mr-2' />Published : {blog.published_date}</p>
            </Link>)
        }
    </div>
  )
}

export default BlogCards