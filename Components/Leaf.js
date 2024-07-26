import React from 'react';
import leaf from "../Images/leaf.png";

const Leaf = () => {
    return (
        <div className="relative flex flex-col top-[-100px] mt-0 ml-56">
            <div className="flex flex-row items-start ">
                <img src={leaf} height={319} width={319} alt="Leaf" />
            </div>
            <div className="mt-2 ml-16 relative top-[-96px]">
                <h1 className="text-yellow-300 ">CHEF MATT PRODUCTS</h1>
                <hr className="w-2/5 border-yellow-400 my-2" />
                <p className='text-white'>
                    Shop Gourmet Chef Quality Products from the Chef Matt Brand.<br />
                    Chef it yourself and Thanks us later
                </p>
            </div>
        </div>
    );
}

export default Leaf;
