import { TbBrandNextjs } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
import { FaJar } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";


 export const services = [
  {
    title: "NextJS Code and Benefits",
    icon:   <TbBrandNextjs />
  },
  {
    title: "Development and design advantages",
    icon:   <BsCodeSlash />
  },
  {
    title: "Branding unique for your business",
    icon:   <FcShop />
  },
  {
    title: "Jamstack, Headless CMS Benefits",
    icon:   <FaJar />
  },
  {
    title: "Monthly Analytics",
    icon:   <BsGraphUpArrow />
  },
  {
    title: "Mobile SEO",
    icon:   <FaMobileAlt />
  },
 ]


const ServicesIncludes = () => {
  return (
 <section className=" w-full flex justify-center py-5">
   <div className="grid grid-cols-2 gap-2">
   {services.map((service) => (
    <div className="" key={service.title}>
      <div className="mt-5 flex flex-col text-center">
   <h2 className="">{service.title}</h2>
   <div className="text-4xl py-2 bg- flex justify-center">
    {service.icon}
    </div>
    <section className="flex justify-center">
   <p className="w-1/2 text-center ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas culpa voluptatum tempore consequuntur quibusdam, fugit ut deserunt molestiae debitis dolores hic esse veniam sint praesentium quae aliquam, aspernatur, quas laboriosam.</p>
    </section>
    </div>
    </div>
   ))}
   
   </div>
     </section>

  )
}

export default ServicesIncludes