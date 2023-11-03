'use client'

import { TbBrandNextjs } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";


 export const contents = [
  {
    title: "Service and Support",
    icon:   <BsCodeSlash />,
    paragraph:"I assist with: domains, hosting, web development and design. In other words... pretty much everything from setup to ongoing service, leaving you more time to spend on your business!"
  },
  {
    title: "Development and design advantages",
    icon:   <TbBrandNextjs />,
    paragraph:"As a developer who designs, I rely on Javascript languages and frameworks, mainly NextJs. My knowledge on coding gives me the advantage to design and breaking the limits!"   
  },
  {
    title: "Monthly Updates",
    icon:   <BsGraphUpArrow />,
    paragraph:"Need to make a change? Or add more content or photos?. Monthly updates are available with subscription."   
  },
  {
    title: "Mobile Optimization",
    icon:   <FaMobileAlt />,
    paragraph:"Studies show that the majority of website visitors use phones and tablets, as opposed to computers at home. "   
  },

 ]

   



const Services = () => {
  return (
    <div  id="services" className="h-screen flex items-center">
      <div className="">
  <h3 className="font-semibold text-center 2xl:text-3xl text-2xl 2xl:pt-0 pt-5 sm:px-5 underline">
      Services Include:
      </h3>

 <section className="w-full flex justify-center py-5">
   <div className="grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 gap-2">
   {contents.map((content) => (
    <div className="" key={content.title}>
      <div className="mt-5 flex flex-col text-center">
   <h2 className="pt-5 2xl:font-normal font-semibold 2xl:text-2xl text-lg">{content.title}</h2>
   <div className="text-4xl py-1 flex justify-center">
    {content.icon}
    </div>
    <section className="flex justify-center">
    <p className="2xl:w-1/2 w-full px-5">{content.paragraph}</p>
    </section>
    </div>
    </div>
   ))}
   
   </div>
     </section>
     </div>
     </div>
  )
}

export default Services