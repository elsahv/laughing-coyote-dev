import { Dynamic_GridSqs, Hero, ServicesIncludes } from '@/components'
import DynamicFooterBanner from '@/components/Dynamic_FooterBanner'

export default function Home() {
  return (
    <>
      <Hero />    
      <Dynamic_GridSqs
          title="4 Main Reasons"
          item1="seo"
          item2="speed"
          item3="24/7"
          item4="cancel anytime"
           />
       <ServicesIncludes />
    
      <DynamicFooterBanner
        title="Web Development CTA"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sunt, est quas amet aut explicabo tempore quasi autem iure, minus consequatur eveniet tempora unde, eos quia odio accusamus totam praesentium."
       />

      {/* //? FEATURED WORKS- front and center ?? */}
    </>
  )
}
