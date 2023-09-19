'use client'

import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import DynamicMenu from "./Dynamic_Menu";


const Hamburger = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (  
        <div className="mb-3 py-1 px-3 text-onyx hover:text-parchment dropshadow-2xl bg-[#ff7d00] border border-black hover:border-teal">
    <div onClick={showSidebar} className="cursor-pointer flex items-center dropdown ml-1 ">
       menu
      <div className="">
      <FaIcons.FaBars className="ml-2" />
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="pl-5 text-3xl" onClick={showSidebar}>
          <div className="pt-5 mb-5 pb-3 relative top-0 right-0"> 
            <AiIcons.AiOutlineClose />
          </div>
          <DynamicMenu />
        </ul>
      </nav>
      </div>

      </div>
    </div>
  );
};

export default Hamburger;
