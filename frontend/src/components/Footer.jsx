import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
const Footer = () => {
   // Create a new Date object
let currentDate = new Date();

// Get the current year
let currentYear = currentDate.getFullYear();

    return (
        <div className='bg-gray-900 '>
           <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-4'>
                <div className='grid mb-8 lg:grid-cols-6'>
                    <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Category</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>News</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>World</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Games</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Referances</a>
                                </li>
                            </ul>
                        </div>
                        
                        {/* category 2 */}

                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Apples</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Web</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Ecommerce</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Business</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Entertainment</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Portfolio</a>
                                </li>
                            </ul>
                        </div>

                        {/* category 3 */}
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Media</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Brochure</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>NonProfit</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Education</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Projects</a>
                                </li>
                            </ul>
                        </div>

                        {/* category 4 */}
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Business</p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Media</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Inforpreneur</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Personal</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Wiki</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-500'>Forum</a>
                                </li>
                            </ul>
                        </div>


                    </div>

                     {/* category 4 - Subscription*/}
                     <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                     <p className='font-medium tracking-wide text-gray-300'>Subscribe for update</p>
                        <form className='mt-4 flex flex-col md:flex-row'>
                            <input type="email" name="email" id="" placeholder='Subscribe for update' className='flex-graw w-full h-12 px-4 mb-3 transition duration-200 bg-white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-blue-300 focus:outline-none'/>
                            <button type="submit" 
                            className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-blue-400 focus:outline-none border'>
                            Subscribe</button>
                        </form>
                        <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam neque ducimus atque nisi voluptatem beatae fugit possimus ipsa accusantium distinctio voluptates enim, eos, quidem perferendis odio exercitationem illum. Excepturi, natus?</p>
                        </div>
                </div>

                <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                    <p className='text-sm text-gray-500'>©Copyright BdTech {currentYear} | All resereved.</p>
                    <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-blue-400'><FaTwitter className='h-6 w-6' /></a>
                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-blue-400'><FaInstagram className='h-6 w-6' /></a>
                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-blue-400'><FaFacebook className='h-6 w-6' /></a>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Footer;