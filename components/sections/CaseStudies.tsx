import Image from "next/image"
import Img1 from '../../public/assets/screenshots/hoveyroofing.png'
import Img2 from '../../public/assets/screenshots/designs/fish-expo-demo.png'
import { MdFileOpen } from "react-icons/md";
import Link from "next/link";


const caseStudies = [
{
title:'HoveyRoofing',
img:Img1,
p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur voluptatibus aliquam sint dicta nihil perferendis or sit amet consectetur adipisicing elit. Ullam consequuntur voluptatibus aliquam sint dicta nihil perferendis harum a fuga! Id suscipit totam aut exercitationem hic odit porro vitae excepturi or sit amet consectetur adipisicing elit. Ullam consequuntur voluptatibus aliquam sint dicta nihil perferendis or sit amet consectetur adipisicing elit. Ullam consequuntur voluptatibus aliquam sint dicta nihil perferendis illo!",
url: "https://hoveyroofing.com"
},
{
title: 'Generations Backflow',
img:Img2,
p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur voluptatibus aliquam sint dicta nihil perferendis or sit amet consectetur adipisicing elit. Ullam consequunt lam consequuntur voluptatibus aliquam sint dicta nihil perferendis or sit amet consectetur adipisicing elit. Ullam consequuntur voluptatibus aliquam sint dicta nihil perferendis illo!",
url: "https://ie-backflow-ixj3fuw24-elsahv.vercel.app/"
},
]


const CaseStudies = () => {
  return (
    <div id="case-studies" className="px-5">
      <div className="bg-black text-white w-1/2">
        <h2 className="text-5xl underline font-bold text-center">Case Studies</h2>
 </div>
        {/* //* GRID STARTS HERE */}
        <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-4 my-3 pt-[50px]">
       {caseStudies.map((item, index) => (
          <div className="" key={index}>
         <div className="">
      <Link href={item.url}>
        <div className="hover:opacity-80">
        {/* //* TITLE STARTS HERE */}
         <div id="title" className="px-3 py-5 flex items-center">
            <h2 className="font-medium text-3xl">{item.title}</h2>
             <span className="text-4xl text-red-900">
                <MdFileOpen />
                </span>
            </div>

              {/* <div className="2x p-5">  */}
            <Image className="bg-carribean border border-black"
             src={item.img}
              alt=""
              //  width={800}
              //  height={400}
              /> 
            {/* </div> */}
            </div>
</Link>

             </div> 
            <p className="w-full dropshadow-2xl font-medium py-5 pl-5 pr-[50px] ">{item.p}</p>
        </div>
       ))}
       </div>
    </div>
  )
}

export default CaseStudies