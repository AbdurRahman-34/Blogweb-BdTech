import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 // blogs per page
    const [selectedCatergory, setSelectedCatergory] = useState(null)

    useEffect(() => {
        async function fetchBlogs(){
            let url =`http://localhost:5000/blogs?pages=${currentPage}&limit=${pageSize}`

            // filter by category
            if(selectedCatergory){
                url +=`&category=${selectedCatergory}`
            }

            const response = await fetch(url)
            const data = await response.json();
            console.log(data)
            setBlogs(data)
        }
        fetchBlogs()
    },[currentPage, pageSize, selectedCatergory])

    const handlePageChange = 
    return (
        <div className='container mx-auto'>
            {/* category section */}
            <div>Page Category</div>

            {/* Blog cards section */}
            <div>
                <BlogCards blogs={blogs} />
            </div>

            {/* pagination section */}
            <div>Pagination 1  2  3</div>
        </div>
    );
};

export default BlogPage;