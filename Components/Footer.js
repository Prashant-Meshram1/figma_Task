import React from 'react';
import Name from "../Images/Name.png";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { LuCheckCircle } from "react-icons/lu";

const Footer = () => {
    return (
        <div className="w-full bg-black py-4">
            <div className="flex justify-around border-yellow-700 p-8 border-b-4">
                <div className="text-yellow-300 flex flex-col items-center">
                    <div className="flex items-center">
                        <RiShoppingBag2Fill size={24} />
                        <span className="ml-2">FREE SHIPPING WORLDWIDE</span>
                    </div>
                    <p className="text-white text-sm">Guaranteed Delivery</p>
                </div>
                <div className="text-yellow-300 flex flex-col items-center">
                    <div className="flex items-center">
                        <FaHeadphonesSimple size={24} />
                        <span className="ml-2">24/7 CUSTOMER SERVICE</span>
                    </div>
                    <p className="text-white text-sm">Text Us 24/7 at 070-7782-9137</p>
                </div>
                <div className="text-yellow-300 flex flex-col items-center">
                    <div className="flex items-center">
                        <LuCheckCircle size={24} />
                        <span className="ml-2">QUALITY GUARANTEE</span>
                    </div>
                    <p className="text-white text-sm">Send Within 30 Days</p>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <img
                    src={Name}
                    alt="Name"


                    className="max-w-full h-36"
                />
            </div>
        </div>
    );
}

export default Footer;
