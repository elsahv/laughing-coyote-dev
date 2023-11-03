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
      desc: "desc",
      siteImg: temp1,   
      // siteImg: 'img',
      p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates commodi pariatur modi saepe assumenda accusamus cupiditate, eum doloribus atque explicabo adipisci consequatur quos quibusdam hic? Velit dolore ullam aliquam suscipit.'
    },
    {
      id:2,
        title:"B. Three page/ components",
        desc: "desc",
        siteImg: temp2,
        // siteImg: 'img',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates commodi pariatur modi saepe assumenda accusamus cupiditate, eum doloribus atque explicabo adipisci consequatur quos quibusdam hic? Velit dolore ullam aliquam suscipit.'
      },
      {
        id:3,
        title:"C. single pg journal",
        desc: "desc",
        siteImg: temp3,
        // siteImg: 'img',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates commodi pariatur modi saepe assumenda accusamus cupiditate, eum doloribus atque explicabo adipisci consequatur quos quibusdam hic? Velit dolore ullam aliquam suscipit.'
      },
]
const BasicTemplates = () => {
  return (
 <section id="section-wrapper" className="flex justify-center">
  <div id="section-container" className="m-[75px]">

    <div className="p-5">
    <h2 className="font-semibold text-4xl">which website would be best for my business?</h2> 
     <p className="pt-1 pl-1 pb-5 my-1  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur voluptatum voluptate hic dolor dolorum nemo, amet rerum quasi qui labore unde veritatis placeat adipisci dicta corporis quidem consectetur quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto impedit aperiam neque inventore explicabo. Delectus, sapiente dolor? Adipisci modi tempore itaque natus quod explicabo labore repellat unde nostrum recusandae.</p>
     </div>


    <div id="template-section-wrapper" className="px-5">
    <div id="template-section-container" className="grid grid-cols-3 gap-16">
    {templates.map((template, index) => (
     <div id="sq" className="rounded-2xl bg-onyx border-2 border-black text-parchment" key={index}>
      <div id="top-bar-container" className="p-3 ">
         <h2 className="capitalize font-semibold">{template.title}</h2>
         <p className="capitalize font-semibold">{template.desc}</p>
         </div>
          <Image src={template.siteImg} alt=""/>   
          {/* <div className="bg-teal h-[250px]">{template.siteImg}</div> */}
          <div id="paragraph-middle-bar-container" className="p-3 ">
          <p className="">{template.p}</p>
          </div>
          <div id="bottom-bar-container" className="p-3">
            <div id="sm-container" className="flex w-1/4">
          <div className="bg-parchment text-onyx  text-sm pl-3">Find Out More</div>
          <Link className="hover:opacity-80 hover:ease-in duration-300" href="/">
            <MdFileOpen />
              </Link>
          </div>
          </div>
     </div>
     
    ))}
  </div>
  </div>
  </div>
 </section>
  )
}

export default BasicTemplates


       
