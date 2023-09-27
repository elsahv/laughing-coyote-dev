'use client'
import Hamburger from "./Hamburger";
import {useRouter} from 'next/navigation'


const Header = () => {
  const router = useRouter()

  return (
    <header className="text-carribean w-full 2xl:pt-3 pt-0 dropshadow-3x">    
      <nav className="flex justify-between py-4 pb-3 px-3 w-full text-2xl">   {/* //todo: <-- CONDITIONAL BORDER WHEN SCROLL */}
        <div className="w-full flex space-between">
      <div id="logo"  className="w-1/2 flex 2xl:flex-row flex-col">
            <button className="font-bold dropshadow-2xl 2xl:text-3xl text-2xl md:pt-3 pt-0 text-onyx" type="button" onClick={() => router.push('/')}>
            Laughing Coyote Dev
            </button>
      </div>
            
             {/* //todo: MAKE VISIBLE WHEN PAGES ARE READY v */}
      {/* <div id="page-links" className="flex pt-1">
      <button className="mr-5 md:block hidden hover:text-orange-300" type="button" onClick={() => router.push('/web-development')}>
          Web Development
        </button>
 

        <button className="ml-5" type="button" onClick={() => router.push('/writing')}>
        Writing
        </button>
       </div> */}
        {/* //todo: MAKE VISIBLE WHEN PAGES ARE READY ^ */}
    </div>
        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
