import React, { useState } from 'react'; React
import { NavLink } from 'react-router-dom';
// react icons :
import { FaBars, FaFacebook, FaInstagram, FaXmark, FaSquareTwitter   } from "react-icons/fa6";


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    //Navitems ::
    const navitems = [
        {path : "/", link : 'Home'},
        {path : "/services", link : 'Services'},
        {path : "/about", link : 'About'},
        {path : "/blogs", link : 'Blogs'},
        {path : "/contact", link : 'Contact'},
    ]
    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <a href="/" className='text-xl font-bold text-white'>Bd<span className='text-blue-400'>Tech</span></a>
               
                {/* Navigate for lg device */}
                <ul className='md:flex gap-12 text-lg  hidden'>
                    {
                        navitems.map(({path, link}) => 
                        <li className='text-white' key={path}>
                         <NavLink className={({ isActive, isPending }) =>
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>   
                        </li>)
                    }
                </ul>

                {/* Menu icons */}
                <div className='text-white lg:flex  gap-4 items-center hidden'>
                    <a href="/" className='hover:text-blue-400'><FaFacebook/></a>
                    <a href="/" className='hover:text-blue-400'><FaInstagram/></a>
                    <a href="/" className='hover:text-blue-400'><FaSquareTwitter /></a>
                    <button className='bg-blue-400 px-5 py-2 font-medium rounded-none hover:bg-blue-700 duration-200 ease-in'>Log in</button>
                </div>

                {/* Mobile menu Responsive */}
                <div className='md:hidden'>
                <button onClick={toggleMenu}>
                {
                   isMenuOpen ? <FaXmark className='w-5 h-5' />  :   <FaBars className='w-5 h-5' />
                }   
                 </button>
                </div>
            </nav>

            {/* Menu items only for mobile device */}
            <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-10 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                    {
                        navitems.map(({path, link}) => 
                        <li className='text-black' key={path}>
                         <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>   
                        </li>)
                    }
                </ul>
            </div>
        </header>
    );
};

export default Navbar;