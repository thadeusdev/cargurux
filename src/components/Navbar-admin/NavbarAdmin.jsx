import React, { useState } from 'react'
import './NavbarAdmin.css'
import {
    FaTh,
    FaBars,
    FaBlog,
}from "react-icons/fa";

import { AiFillCar, AiOutlineFileProtect } from "react-icons/ai";
import { GiSpanner } from "react-icons/gi";
import { BsFillGeoAltFill } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";

import { NavLink} from 'react-router-dom';

const NavbarAdmin = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/admin",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/admin/cars-for-sale",
            name:"Cars",
            icon:<AiFillCar/>
        },
        {
            path:"/admin/car-accessories",
            name:"Accessories",
            icon:<GiSpanner/>
        },
        {
            path:"/admin/car-tracking",
            name:"Car Tracking",
            icon:<BsFillGeoAltFill/>
        },
        {
            path:"/admin/vehicle-insurance",
            name:"Insurance",
            icon:<AiOutlineFileProtect/>
        },
        {
            path:"/admin/blog-listing",
            name:"Blog",
            icon:<FaBlog/>
        },
        {
            path:"/admin/about-us",
            name:"About Us",
            icon:<SiAboutdotme/>
        },
    ]

    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="navbarAdmin">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} id="logo1">Admin</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                    <div>
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                    </div>
                   ))
               }             
           </div>              
           <main>{children}</main>
        </div>
    );
}

export default NavbarAdmin