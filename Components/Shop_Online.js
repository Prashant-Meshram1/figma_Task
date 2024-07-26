import React from 'react';
import fruit from "../Images/fruit.png";

export const Shop_Online = () => {
    return (
        <div className="relative bg-slate-800 ml-20">
            <img
                className='w-full'
                src={fruit}
                width={1233}
                height={345}
                alt="fruit"
            />
            <div className="absolute top-0 left-0 p-4  from-black  w-full h-full ">
                <h1 className='  border-black border-b-2 absolute top-[51px] left-[570px] text-black font-bold px-3 py-3'>
                    ONLINE ONLY
                </h1>

                <p className=' mt-4  absolute top-[195px] left-[478px]'>
                    GET 20% OFF YOUR ORDER OF $50 OR MORE<br />
                    USE CODE <span className='font-bold text-gray-800'>"Cheff20"</span>
                </p>
                <span className='border-black text-black px-14 py-2 hover:border-blue-400 border-4 absolute bottom-[173px] left-[520px]'>
                    Shop Now
                </span>
            </div>
        </div>
    );
}
