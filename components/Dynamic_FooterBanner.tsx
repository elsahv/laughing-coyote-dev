'use client'
import Link from "next/link";

export interface FooterbannerProps {
   title: string;
   paragraph: string;
   containerStyles?: string
}

 {/* //todo-CONDITIONAL STATEMENT- WEB DEV/CONTACT CTA */}


const DynamicFooterBanner = ({
  title,
  paragraph,
  containerStyles
}: FooterbannerProps) => {
  return (
<section className={`bg-onyx text-parchment p-5 ${containerStyles}`}>

          <h3 className="text-3xl font-bold">{title}</h3>
           <p className="mb-1 text-md">{paragraph}</p>

           {/* //todo: IMP DYNAMIC BTNS */}
       <Link className="py-1 px-3 bg-teal"href="/package-rates">package-rates</Link>
        <Link className="px-2 py-1 bg-carribean"href="/contact">contact- lets go!</Link>
        
       </section> 
  )
}

export default DynamicFooterBanner  

 {/* //todo-END */}
