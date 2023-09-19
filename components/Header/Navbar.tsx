import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
<>
    <Logo />
    <div className="flex pt-1">
    <a href="/web-development" className="px-3 md:block hidden hover:text-orange-300">
         Web Development
      </a>
      <a href="/writing" className="px-3 md:block hidden hover:text-orange-300">
        Writing
      </a>
    </div>
    
    </>
  )
}

export default Navbar