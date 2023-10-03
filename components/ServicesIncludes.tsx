import { TbBrandNextjs } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
import { FaJar } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";


 export const services = [
  {
    // title: " SERVICE & SUPPORT",    {/* //todo: CHOOSE TITLE  */}
    title: "Hands Off Services and Support",
    icon:   <BsCodeSlash />,
    paragraph:"I assist with pretty much everything, leaving you more time to spend on your business---The goal of SEO is to increase organic (non-paid) traffic to a website."
  },
  {
    title: "Development and design advantages",
    icon:   <TbBrandNextjs />,
    paragraph:"A developer with design skills----The goal of SEO is to increase organic (non-paid) traffic to a website."   
  },
  {
    title: "seo",
    icon:   <FcShop />,
    paragraph:"The goal of SEO is to increase organic (non-paid) traffic to a website. Search Engine Optimization is how we make sure people find your ice cream shop when searching in your area. We help Google understand where you’re located and when a relevant customer is looking for your ice cream shop."   
  },
  {
    title: "Jamstack, Headless CMS Benefits",
    icon:   <FaJar />,
    paragraph:" Flexibility, Performance, Secured Static sites, Speedy- (A fast-loading website is important for user experience and can influence search engine rankings), Scalability, Simplified Hosting and Deployment. I work this list of tools with both web design and development."   
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



    //todo: CHANGE CONTENT TO SERVICES INCLUDES v
              //* SQtitle1="seo"
              //* SQparagraph1="The goal of SEO is to increase organic (non-paid) traffic to a website. Search Engine Optimization is how we make sure people find your ice cream shop when searching in your area. We help Google understand where you’re located and when a relevant customer is looking for your ice cream shop."
              //* SQtitle2="speed"
              //* SQparagraph2="A fast-loading website is important for user experience and can influence search engine rankings."
              //* SQtitle3="Hands Off Services"
              // *SQparagraph3="I assist with pretty much everything, leaving you more time to spend on your business"
              // SQtitle4="cancel anytime"
              // SQparagraph4="No hidden fees or surprises!"
          //todo: CHANGE CONTENT TO SERVICES INCLUDES ^



const ServicesIncludes = () => {
  return (
    <div className="pt-5">
      {/* <h2 className="text-black text-center font-bold 2xl:text-4xl text-2xl 2xl:pt-0 pt-5 sm:px-5">
      So why choose Laughing Coyote Dev?
      </h2>   */}
  <h3 className="text-black text-center 2xl:text-3xl text-2xl 2xl:pt-0 pt-5 sm:px-5">
      Services Include:
      </h3>


      
 <section id="services" className="w-full flex justify-center py-5">
   <div className="grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 gap-2">
   {services.map((service) => (
    <div className="" key={service.title}>
      <div className="mt-5 flex flex-col text-center">
   <h2 className="2xl:font-normal font-semibold 2xl:text-2xl text-lg">{service.title}</h2>
   <div className="text-4xl 2xl:py-2 py-0 flex justify-center">
    {service.icon}
    </div>
    <section className="flex justify-center">
    <p className="2xl:w-1/2 w-full px-5">{service.paragraph}</p>
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