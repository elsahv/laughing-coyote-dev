'use client'
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="text-carribean bg-parchment w-full 2xl:pt-3 pt-0 dropshadow-3xl">
      <nav className="bg-test2 flex justify-between py-4 pb-3 px-3 w-full text-2xl">
        <Navbar />
        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
