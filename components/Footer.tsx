'use client'

import { FaLinkedin, FaYelp } from "react-icons/fa";
import DynamicMenu from "./Dynamic_Menu";
const today = new Date();

const Footer = () => {
  return (
    <footer className="bg-onyx text-parchment text-lg flex justify-center items-center py-5">
      <FaLinkedin className="" />
      <FaYelp className="" />
      <p className="pl-2 ml-5">Laughing Coyote Dev &copy; {today.getFullYear()}</p>
    {/*  <DynamicMenu />   //todo: MAKE VISIBLE WHEN READY*/}
    </footer>
  );
};

export default Footer;
