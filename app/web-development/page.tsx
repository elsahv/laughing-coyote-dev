import { About, FAQaccordian, ServicesIncludes } from '@/components'
import DynamicFooterBanner from '@/components/Dynamic_FooterBanner'
import DynamicGridSqs from '@/components/Dynamic_GridSqs'

const WebDevelopment = () => {
  return (
    <>
      <About />
        <ServicesIncludes />
           <DynamicGridSqs
          containerStyles="dropshadow-lg"
          PgTitle="4 STEP PROCESS- Lorem ipsum, dolor sit amet "
   
          SQtitle1="Discovery phase"
          SQparagraph1="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle2="Creative Phase"
          SQparagraph2="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle3="Development Phase"
          SQparagraph3="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle4="Launch Phase"  
          SQparagraph4="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
           />

      {/* //todo... v */}
       {/* <FAQaccordian /> */}
      {/* //todo... ^ */}

       <DynamicFooterBanner
        title="Contact CTA"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sunt, est quas amet aut explicabo tempore quasi autem iure, minus consequatur eveniet tempora unde, eos quia odio accusamus totam praesentium."
       />
    </>
  )
}

export default WebDevelopment