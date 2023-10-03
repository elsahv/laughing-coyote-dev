import {  Dynamic_FooterBanner, PackageRates, ServicesIncludes } from '@/components'
import DynamicGridSqs from '@/components/Dynamic_GridSqs'
import Websites from '@/components/Websites'

const WebDevelopment = () => {
  return (
    <>
        <Websites />
           <DynamicGridSqs
          containerStyles="dropshadow-lg"
          Headline="4 STEP PROCESS- How it works!"
   
          SQtitle1="Discovery phase"
          SQparagraph1="Decide which package is right for you. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle2="Creative Phase"
          SQparagraph2="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle3="Development Phase"
          SQparagraph3="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle4="Launch Phase"  
          SQparagraph4="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
           />
        <ServicesIncludes />


      {/* //todo... v */}
       {/* <FAQaccordian /> */}
      {/* //todo... ^ */}

       <PackageRates />


       <Dynamic_FooterBanner
        title="Contact CTA jldkf jkldfja jlkdsfj"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sunt, est quas amet aut explicabo tempore quasi autem iure, minus consequatur eveniet tempora unde, eos quia odio accusamus totam praesentium."
       />
    </>
  )
}

export default WebDevelopment