'use client'
import Hamburger from "../Hamburger";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="text-carribean bg-parchment  w-full  z-50 pt-3 dropshadow-3xl">
      <nav className="flex justify-between py-4 pb-3 px-3 w-full text-2xl">
        <Navbar />
        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
