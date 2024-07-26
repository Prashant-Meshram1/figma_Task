import React from 'react';
import nonvege from "../Images/nonvege.jpeg";

const Promotion = () => {
    return (
        <div className="flex justify-end relative">
            <div className="-ml-10 -mr-20 overflow-hidden relative">
                <img
                    src={nonvege}
                    alt="nonvege"
                    height={401}
                    width={1500}
                    className="object-cover hover:border-2 border-cyan-400"
                />

                <div className="absolute top-[465px] left-[238px] border-transparent hover:border-cyan-500 p-8">
                    <h1 className="text-white border-white border-b-4 p-2 m-2 font-sans font-bold text-lg">SIGN UP SPECIAL PROMOTION</h1>
                    <p className="text-white p-2 m-2">Get exclusive deals you won't find anywhere else straight to your inbox!</p>
                    <div className="flex mt-2">
                        <input type="email" placeholder="Enter email address" className="text-white p-2 w-[346px] bg-transparent border-2 border-white" />
                        <button className="bg-yellow-900 text-white p-2 ml-2 w-[184px]">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
