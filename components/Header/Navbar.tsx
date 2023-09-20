'use client'
import {useRouter} from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

 return (
<div className="bg-test1 w-1/2 flex 2xl:flex-row flex-end flex-col">
      <button className="font-bold dropshadow-2xl md:text-2xl text-lg text-onyx" type="button" onClick={() => router.push('/')}>
      Laughing Coyote Dev
      </button>

      
      <div className="flex pt-1">
      <button type="button" onClick={() => router.push('/web-development')}     className="px-3 md:block hidden hover:text-orange-300">
          Web Development
        </button>
 

        <button type="button" onClick={() => router.push('/writing')}>
        Writing
        </button>
    </div>
    </div>
  )
}

export default Navbar