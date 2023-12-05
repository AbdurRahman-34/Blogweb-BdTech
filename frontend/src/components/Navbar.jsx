import React from 'react'; React
import { NavLink } from 'react-router-dom';
// react icons :
import { FaBars, FaFacebook, FaInstagram, FaSquareTwitter   } from "react-icons/fa6";


const Navbar = () => {

    //Navitems ::
    const navitems = [
        {path : "/", link : 'Home'},
        {path : "/services", link : 'Services'},
        {path : "/about", link : 'About'},
        {path : "/blogs", link : 'Blogs'},
        {path : "/contact", link : 'Contact'},
    ]
    return (
        <header className='bg-black text-white '>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <a href="/" className='text-xl font-bold text-white'>Bd<span className='text-blue-400'>Tech</span></a>
               
                {/* Navigate for lg device */}
                <ul className='md:flex gap-12 text-lg  hidden'>
                    {
                        navitems.map(({path, link}) => 
                        <li className='text-white' key={path}>
                         <NavLink to={path}>{link}</NavLink>   
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
                <button><FaBars/></button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;