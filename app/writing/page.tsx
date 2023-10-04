import Image from "next/image";
import Sign from '../../public/closedSign.jpg'

export default async function Writing() {
  return (
    <div className="h-screen p-5">
      <h2>Writing</h2>
      <p>Currently in progress...content coming soon!</p>
       <div>
           <Image className="w-1/2" src={Sign} alt="" />
       </div>
      </div>
  )
}
