'use client'
import Link from "next/link";
import { ContactForm } from ".";

export interface FooterbannerProps {
   title: string;
   paragraph: string;
   containerStyles?: string
}


const Dynamic_FooterBanner = ({
  title,
  paragraph,
  containerStyles
}: FooterbannerProps) => {
  return (
    <section id="contact" className={`bg- p-5 text-onyx grid md:grid-cols-2 grid-cols-1 ${containerStyles}`}>
         <div className="pt-5 mx-1">
          <h3 className="lg:text-3xl text-2xl font-bold">{title}</h3>
           <p className="mb-1 mt-2 text-md">{paragraph}</p>
           </div>
           {/* //todo: IMP CONTACT FORM v */}          
           <ContactForm />                            {/* //! CHANGE FORM TO CTA BANNER*/}
           {/* //todo ^ */}
            
       </section> 
  )
}

export default Dynamic_FooterBanner  

