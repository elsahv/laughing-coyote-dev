'use client'

export interface FooterbannerProps {
   title: string;
   paragraph: string;
}

 {/* //todo-CONDITIONAL STATEMENT- WEB DEV/CONTACT CTA */}


const DynamicFooterBanner = ({
  title,
  paragraph
}: FooterbannerProps) => {
  return (
<section className="bg-parchment p-5">
          <h3 className="text-3xl font-bold">{title}</h3>
           <p>{paragraph}</p>
       <button>lets go!</button>
       </section> 
  )
}

export default DynamicFooterBanner  

 {/* //todo-END */}
