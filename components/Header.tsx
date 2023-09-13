// import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="text-teal bg-parchment  w-full z-50 pt-3 dropshadow-3xl">
      <nav className="flex justify-between py-4 pb-3 px-3 w-full text-2xl">
        <a href="/" className="font-bold dropshadow-2xl md:text-3xl text-2xl">
          Laughing Coyote Dev
        </a>
        <div className="flex pt-1">
          <a href="/about" className="px-3 md:block hidden hover:text-orange-300">
            about
          </a>


          {/* //todo: ADD DROPDOWN MENU v
         <ul>
              <li>1 2 3 columns.</li> //second section??
              <li>pkg rates</li>   //third section??
            </ul> 
            //todo: END ^
            */}
           
          <a href="/services" className="px-3 md:block hidden hover:text-orange-300">
            services
          </a>
          {/* //todo: END*/} 


        </div>
        <button className="mb-3 py-1 px-3 text-onyx hover:text-parchment dropshadow-2xl bg-orange-500 md:block hidden border border-black hover:border-parchment">
          <a href="/contact">Contact</a>
        </button>
        {/* <Hamburger /> */}
      </nav>
    </header>
  );
};

export default Header;
