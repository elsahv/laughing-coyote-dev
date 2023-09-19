'use client'
import Hamburger from "../Hamburger";

const Header = () => {
  return (
    <header className="text-carribean bg-parchment  w-full absolute z-50 pt-3 dropshadow-3xl">
      <nav className="flex justify-between py-4 pb-3 px-3 w-full text-2xl">
        <a href="/" className="font-bold dropshadow-2xl md:text-3xl text-2xl text-onyx">
          Laughing Coyote Dev
        </a>
        <div className="flex pt-1">
        <a href="/web-development" className="px-3 md:block hidden hover:text-orange-300">
             Web Development
          </a>
          <a href="/writing" className="px-3 md:block hidden hover:text-orange-300">
            Writing
          </a>
        </div>

              <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
