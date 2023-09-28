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
    <section className={`bg-onyx text-parchment p-5 grid 2xl:grid-cols-2 grid-cols-1 ${containerStyles}`}>
         <div className="pt-[105px] 2xl:text-right">
          <h3 className="text-3xl font-bold">{title}</h3>
           <p className="mb-1 mt-2 text-md">{paragraph}</p>
           </div>
           {/* //todo: IMP CONTACT FORM v */}
           <ContactForm />
           {/* //todo ^ */}
            
       </section> 
  )
}

export default Dynamic_FooterBanner  

