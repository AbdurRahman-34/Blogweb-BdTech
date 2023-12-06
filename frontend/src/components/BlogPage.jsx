import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 // blogs per page
    const [selectedCatergory, setSelectedCatergory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)

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

    // page changing button ::
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
  
    // const handleCategoryChange 
    const handleCategoryChange = (category) => {
        setSelectedCatergory(category)
        setCurrentPage(1)
        setActiveCategory(category)
    }


    return (
        <div className='container mx-auto'>
            {/* category section */}
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} selectedCatergory={selectedCatergory} activeCategory={activeCategory}/>
            </div>




            {/* Blog cards section  */}
             <div className='flex flex-col lg:flex-row gap-12'>
                {/* Blog card components */}
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCatergory={selectedCatergory} pageSize={pageSize}/>
               
                {/* SideBar components */}
                <div>
                    <SideBar/>
                </div>
                
            </div>




            {/* // pagination section */}
            <div>
                <Pagination onPageChange={handlePageChange} blogs={blogs} currentPage={currentPage} pageSize={pageSize}/>
            </div>
            </div>
    );
};

export default BlogPage;