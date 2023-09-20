'use client'
import Link from 'next/link'


export interface CustomGridProps {
  leftBtn: string;
  rightBtn: string;
 
}
 

const DynamicButtons = ({
  leftBtn,
  rightBtn,
}) => {
  return (
    <div className="p-1 mt-5 text-parchment">

<button className="dropshadow-lg bg-teal hover:text-white mr-1 px-2 py-1 dropshadow-md">
            <Link href="/web-development">
            {leftBtn}
            </Link>
              </button>
              <button className="dropshadow-lg bg-carribean hover:text-orange ml-1 px-2 py-1 dropshadow-md">
            <Link href="/contact">
            {rightBtn}
            </Link>
              </button>
    </div>
  )
}

export default DynamicButtons