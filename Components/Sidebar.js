import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import Name from '../Images/Name.png';
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleSidebar}
                className="absolute top-4 left-4 z-30 p-2 bg-white text-black border rounded"
            >
                {isCollapsed ? <FaBars /> : <ImCross />}
            </button>
            <div className={`absolute h-screen transition-transform transform border-r-2 border-yellow-500 ${isCollapsed ? 'w-24' : 'w-64'} z-20 bg-gray-800 bg-opacity-70 text-white`}>

                <div className={`flex items-center justify-center p-4 ${isCollapsed ? 'hidden' : ''}`}>
                    <img
                        src={Name}
                        alt="Name"
                        className="transition-all duration-300"
                    />
                </div>
                <ul className={`mt-3 space-y-4 p-4 ${isCollapsed ? 'hidden' : ''}`}>
                    <li><a href="#home" className="block p-1 border-b border-gray-600 no-underline hover:text-yellow-400">HOME</a></li>
                    <li><a href="#products" className="block p-1 border-b border-gray-600 no-underline hover:text-yellow-400">PRODUCTS</a></li>
                    <li><a href="#meet" className="block p-1 border-b border-gray-600 no-underline hover:text-yellow-400">MEET CHEF MATT</a></li>
                    <li><a href="#faq" className="block p-1 border-b border-gray-600 no-underline hover:text-yellow-400">FAQ</a></li>
                    <li><a href="#contact" className="block p-1 border-b border-gray-600 no-underline hover:text-yellow-400">CONTACT WITH US</a></li>
                </ul>
                {!isCollapsed &&
                    <p className='absolute bottom-16 left-4 text-sm'>TEXT SUPPORT 24/7 <a className='text-yellow-300 underline' href="tel:070-7782-9137">070-7782-9137</a></p>
                }

                {!isCollapsed && (
                    <div className="absolute bottom-4 left-4 flex space-x-4">
                        <div className='flex'>
                            <IoBagHandleOutline className="text-white text-xl mx-2" />CART
                        </div>
                        <div className='flex'>
                            <FaRegHeart className="text-white text-xl mx-2" />WISHLIST
                        </div>
                    </div>
                )}
                {isCollapsed &&
                    <div className="flex justify-center items-center h-full">
                        <img
                            src={Name}
                            alt="Name"
                            className="w-20 h-36 -rotate-90 transition-all duration-300 p-3 m-3"
                        />
                    </div>}
            </div>
        </div>
    );
};

export default Sidebar;
