import React from 'react'
import temp1 from '../../public/assets/screenshots/site1.png'
import temp2 from '../../public/assets/screenshots/site2.png'
import temp3 from '../../public/assets/screenshots/site3.png'
import Image from 'next/image'
import { MdFileOpen } from "react-icons/md";
import Link from 'next/link'


const templates = [
    {
      id:1,
      title:"A. business card layout",
      siteImg: temp1,   
      p: 'Perfect starter for a business starting out. Voluptates commodi pariatur modi saepe assumenda accu sdam hic? Velit dolore ullam aliquam suscipit.',
      url: 'https://template-left-nav-journal-layout-1.vercel.app/'
      },
    {
      id:2,
        title:"B. Three page/ components",
        siteImg: temp2,
        p: 'A three page template with all important things covered. Lorem iaepe assumenda accusamus cupiditate, eum doloribus atque explicabo adipisci consequatur quos quibusdam hic? Velit dolore ullam aliquam suscipit.',
        url: 'https://lc-fish-expo-demo.vercel.app/'
        
      },
      {
        id:3,
        title:"C. single pg journal",
        siteImg: temp3,
        p: 'A single pg portfolio which covers all three comp, perfect for online art studio, or journal. Lorem iaepe assumenda accusamus cupiditate, eum doloribus atque explicabo adipisci consequatur quos quibusdam hic? Velit dolore ullam aliquam suscipit.',
        url: 'https://template-left-nav-journal-layout-1.vercel.app/'
        
      },
]
const Templates = () => {
  return (
    <section id="templates" className="">
 <div id="section-wrapper" className="2xl:p-[25px] p-auto flex justify-center">
  <div id="section-container" className="2xl:m-[75px] md:m-[45px] sm:m-0">
    <div className="2xl:p-5 p-1">
    <h2 className="font-semibold 2xl:text-4xl text-3xl">Which website would be best for my business?</h2> 
     <p className="pt-1 pl-1 pb-5 my-1  ">Sometimes it can be difficult to settle on a design, or page layout. Laughing Coyote takes away this dilemna by offering three select templates. Each one is customizable.</p>
     </div>
    <div id="grid-container" className="2xl:px-5 px-1">
    <div id="grid" className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-16 gap-8">
    {templates.map((template, index) => (
     <div id="sq" className="rounded text-onyx border border-black" key={index}>
      <div id="top-bar-container" className="flex pl-3 pt-3">
         <h2 className="2xl:text-lg text-medium capitalize font-semibold">{template.title}</h2>
          <Link className="hover:opacity-80 hover:ease-in duration-300 text-2xl pl-1" href={template.url}>
            <MdFileOpen />
              </Link>
         </div>

         <Link className="hover:opacity-80 hover:ease-in duration-300 text-2xl pl-1" href={template.url}>
          <Image className="border-t border-b border-black"
           src={template.siteImg}
            alt=""/>   
              </Link>
         
         
          <div id="paragraph-container" className="p-3">
          <p className="md:text-md text-sm">{template.p}</p>
          </div>
          {/* //todo later: ADD SLUG TO DESCRIBE WEBSITES MORE IN DETAIL v */}
          {/* <div id="bottom-bar-container" className="p-3">
            <div id="sm-container" className="flex">
          <div className="text-parchment bg-onyx py-1 px-2 text-sm">View Template</div>
          </div>
          </div> */}
          {/* //todo later: ADD SLUG TO DESCRIBE WEBSITES MORE IN DETAIL ^ */}
     </div>

     
    ))}
  </div>
  </div>
  </div>
 </div>
 </section>
  )
}

export default Templates


       
