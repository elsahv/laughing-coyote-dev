import { Dynamic_GridSqs, Hero, ServicesIncludes } from '@/components'
import DynamicFooterBanner from '@/components/Dynamic_FooterBanner'

export default function Home() {
  return (
    <>  
      <Hero />    

      {/* //todo ABOUT ID */}
      <Dynamic_GridSqs
          containerStyles="dropshadow-lg border border-black my-5"
          PgTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic earum consequuntur libero facilis, esse obcaecati alias voluptatibus facere iusto. Deleniti quia animi atque voluptates. Veniam adipisci provident voluptas ratione.
          "
              SQtitle1="seo"
              SQparagraph1="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."


              SQtitle2="speed"
              SQparagraph2="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."

 
 
              SQtitle3="24/7"
              SQparagraph3="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."

 
 
              SQtitle4="cancel anytime"
              SQparagraph4="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."

           />
       <ServicesIncludes />
    
      <DynamicFooterBanner
        title="Web Development CTA- Lorem ipsum dolor sit amet consectetur adipisicing elit."
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sunt, est quas amet aut explicabo tempore quasi autem iure, minus consequatur eveniet tempora unde, eos quia odio accusamus totam praesentium."
        containerStyles="border border-richBlack dropshadow-md"
      
      />

      {/* //? FEATURED WORKS- front and center ?? */}
    </>
  )
}
