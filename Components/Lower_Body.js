import React from 'react';
import cheff from "../Images/cheff.png";
import items from "../Images/items.jpeg";
import racipes from "../Images/racipes.jpeg";
import live from "../Images/live.jpeg";

const Lower_Body = () => {
    return (
        <div className="grid grid-cols-2 pt-10 ml-[79px]" >
            <div className="border-4 hover:border-cyan-400 overflow-hidden h-[230px]">
                <img
                    src={items}
                    alt="items"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="border-4 hover:border-cyan-400 overflow-hidden h-[230px]">
                <img
                    src={cheff}
                    alt="cheff"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="border-4 hover:border-cyan-400 overflow-hidden h-[230px]">
                <img
                    src={racipes}
                    alt="racipes"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="border-4 hover:border-cyan-400 overflow-hidden h-[230px]">
                <img
                    src={live}
                    alt="live"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default Lower_Body;
