import { TbBrandNextjs } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
import { FaJar } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";


 export const services = [
  {
    title: "NextJS Code and Benefits",
    icon:   <TbBrandNextjs />,
    paragraph:"Server-Side Rendering (SSR): Next.js allows you to render pages on the server and send fully-rendered HTML pages to the client. This can improve initial page load times and enhance SEO since search engines can easily crawl the content. Client-Side Rendering (CSR): Next.js also supports client-side rendering, which is useful for building dynamic, interactive user interfaces that don't require a full page reload for updates"
  },
  {
    title: "Development and design advantages",
    icon:   <BsCodeSlash />,
    paragraph:"I work with both web design and development."   
  },
  {
    title: "Branding unique for your business",
    icon:   <FcShop />,
    paragraph:"para"   
  },
  {
    title: "Jamstack, Headless CMS Benefits",
    icon:   <FaJar />,
    paragraph:" Flexibility, Performance, Secured Static sites, Scalability, Simplified Hosting and Deployment."   
  },
  {
    title: "Monthly Analytics",
    icon:   <BsGraphUpArrow />,
    paragraph:"Monthly updates foster transparency, facilitate informed decision-making, and promote a culture of accountability, ultimately contributing to a more efficient and cohesive work environment."   
  },
  {
    title: "Mobile SEO",
    icon:   <FaMobileAlt />,
    paragraph:"With the increasing use of mobile devices, it's essential that your website is mobile-friendly."   
  },
 ]


const ServicesIncludes = () => {
  return (
    <div className="pt-5">
      <h2 className="text-black text-center font-bold 2xl:text-4xl text-2xl 2xl:pt-0 pt-5 sm:px-5">
      So why choose Laughing Coyote Dev?
      </h2>
 <section id="services" className="w-full flex justify-center py-5">
   <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
   {services.map((service) => (
    <div className="" key={service.title}>
      <div className="mt-5 flex flex-col text-center">
   <h2 className="2xl:font-normal font-semibold 2xl:text-2xl text-lg">{service.title}</h2>
   <div className="text-4xl py-2 bg- flex justify-center">
    {service.icon}
    </div>
    <section className="flex justify-center">
   {/* <p className="2xl:w-1/2 w-3/4 text-center ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas culpa voluptatum tempore consequuntur quibusdam, fugit ut deserunt molestiae debitis dolores hic esse veniam sint praesentium quae aliquam, aspernatur, quas laboriosam.</p> */}
    <p>{service.paragraph}</p>
    </section>
    </div>
    </div>
   ))}
   
   </div>
     </section>
     </div>
  )
}

export default ServicesIncludes