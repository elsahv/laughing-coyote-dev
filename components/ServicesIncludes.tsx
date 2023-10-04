import { TbBrandNextjs } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
import { FaJar } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";


 export const services = [
  {
    // title: " SERVICE & SUPPORT",    {/* //todo: CHOOSE TITLE  */}
    title: "Hands Off Service and Support",
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
  // {
  //   title: "Seo",
  //   icon:   <FcShop />,
  //   paragraph:"The goal of SEO is to increase organic (non-paid) traffic to a website. Search Engine Optimization is how we make sure people find your ice cream shop when searching in your area. We help Google understand where you’re located and when a relevant customer is looking for your ice cream shop."   
  // },
  // {
  //   title: "Jamstack, Headless CMS Benefits",
  //   icon:   <FaJar />,
  //   paragraph:" Flexibility, Performance, Secured Static sites, Speedy- (A fast-loading website is important for user experience and can influence search engine rankings), Scalability, Simplified Hosting and Deployment. I work this list of tools with both web design and development."   
  // },
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
    <div  id="services" className="h-screen flex items-center">
    
      <div className="">
  <h3 className="text-black text-center 2xl:text-3xl text-2xl 2xl:pt-0 pt-5 sm:px-5">
      Services Include:
      </h3>


      
 <section className="w-full flex justify-center py-5">
   <div className="grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 gap-2">
   {services.map((service) => (
    <div className="" key={service.title}>
      <div className="mt-5 flex flex-col text-center">
   <h2 className="pt-5 2xl:font-normal font-semibold 2xl:text-2xl text-lg">{service.title}</h2>
   <div className="text-4xl py-1 flex justify-center">
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
     </div>
  )
}

export default ServicesIncludes