import React from 'react';
import Sidebar from './Sidebar';
import Body_Carousal from './Body_Carousal';
import Lower_Body from './Lower_Body';
import Promotion from './Promotion';
import Footer from './Footer';
import { Child_body } from './Child_body';
import { Shop_Online } from './Shop_Online';
import './styles.css';
import Leaf from './Leaf';


const Body = () => {
    return (
        <div className="bg-slate-800">
            <Sidebar />
            <Child_body />
            <Leaf />
            <Body_Carousal />
            <Shop_Online />
            <Lower_Body />
            <Promotion />
            <Footer />


        </div>
    );
};

export default Body;
