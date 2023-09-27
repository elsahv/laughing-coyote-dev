'use client'
import Link from "next/link";
import { ContactForm } from ".";

export interface FooterbannerProps {
   title: string;
   paragraph: string;
   containerStyles?: string
}

 {/* //todo-CONDITIONAL STATEMENT- WEB DEV/CONTACT CTA */}


const Dynamic_FooterBanner = ({
  title,
  paragraph,
  containerStyles
}: FooterbannerProps) => {
  return (
    <section className={`bg-onyx text-parchment grid 2xl:grid-cols-2 grid-cols-1 ${containerStyles}`}>
         <div className="pt-[105px] pl-5 2xl:text-right">
          <h3 className="text-3xl font-bold">{title}</h3>
           <p className="mb-1 text-md">{paragraph}</p>
           </div>
           
           <ContactForm />

           {/* <div className="bg-carribean p-5"> */}
           {/* //todo: IMP CONTACT FORM */}
               {/* <ul className="text-parchment text-lg">
                <li className="underline text-3xl font-bold">Contact at:</li>
                <li className="pt-4">laughingcoyotedev@gmail.com</li>
               </ul>
               </div> */}
       </section> 
  )
}

export default Dynamic_FooterBanner  

 {/* //todo-END */}
