import { Dynamic_GridSqs, Hero, ServicesIncludes } from '@/components'
import DynamicFooterBanner from '@/components/Dynamic_FooterBanner'

export default function Home() {
  return (
    <>  
      <Hero />    

      {/* //todo ABOUT ID */}
      <Dynamic_GridSqs
          containerStyles="dropshadow-lg text-white bg-onyx"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic earum consequuntur libero facilis, esse obcaecati alias voluptatibus facere iusto. Deleniti quia animi atque voluptates. Veniam adipisci provident voluptas ratione.
          "
          item1="seo- Lorem ipsum dolor sit amet consectetur adipisicing elit. I"
          item2="speed- Lorem ipsum dolor sit amet consectetur adipisicing elit. I"
          item3="24/7- Lorem ipsum dolor sit amet consectetur adipisicing elit. I"
          item4="cancel anytime- Lorem ipsum dolor sit amet consectetur adipisicing elit. I"
           />
       <ServicesIncludes />
    
      <DynamicFooterBanner
        title="Web Development CTA"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sunt, est quas amet aut explicabo tempore quasi autem iure, minus consequatur eveniet tempora unde, eos quia odio accusamus totam praesentium."
        containerStyles="border border-richBlack bg-onyx text-parchment dropshadow-md"
      
      />

      {/* //? FEATURED WORKS- front and center ?? */}
    </>
  )
}
