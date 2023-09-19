import Link from 'next/link'
import React from 'react'

const DynamicButtons = () => {
  return (
    <>

<button className="dropshadow-lg bg-teal px-2 py-1 text-orange-300 hover:text-parchment dropshadow-md">
              <Link href="/web-development">
            Find Out More!
            </Link>
            
              </button>
              <button className="dropshadow-lg bg-carribean px-2 py-1 text-orange-300 hover:text-parchment dropshadow-md">
                <Link href="/contact">
               Contact- free consultation
               </Link>
              </button>
    </>
  )
}

export default DynamicButtons