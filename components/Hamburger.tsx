'use client'

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import DynamicMenu from "./Dynamic_Menu";


const Hamburger = () => {
  return (
    <div className="p-3"> 
        <FaBars className="" />
        <div className="hidden">
        <AiOutlineClose />
          <DynamicMenu />
          </div>
        </div>
  )
}

export default Hamburger