'use client'
import Link from "next/link";
import DynamicButtons from "./Dynamic_buttons";

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
<section className={`bg-onyx text-parchment grid grid-cols-2 ${containerStyles}`}>
         <div className="p-5">
          <h3 className="text-3xl font-bold">{title}</h3>
           <p className="mb-1 text-md">{paragraph}</p>
           </div>

           <div className="bg-carribean p-5">
           {/* //todo: IMP CONTACT FORM */}
               <ul className="text-parchment text-lg">
                <li className="underline text-3xl font-bold">Contact at:</li>
                <li className="pt-4">laughingcoyotedev@gmail.com</li>
               </ul>
               </div>


           {/* //todo: MAKE DYNAMIC BTNS VISIBLE WHEN PKG RATES PG AND CONTACT FORM ARE READY! */}
              {/* <DynamicButtons 
               leftBtn="package-rates"
               rightBtn="contact- lets go!"
              /> */}
             {/* //todo: MAKE DYNAMIC BTNS VISIBLE WHEN PKG RATES PG AND CONTACT FORM ARE READY! */}
       </section> 
  )
}

export default Dynamic_FooterBanner  

 {/* //todo-END */}
