import { AboutMe, Dynamic_FooterBanner, Hero } from '@/components'
import DynamicGridSqs from '@/components/Dynamic_GridSqs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">  
      <Hero />   
          <>
          <DynamicGridSqs
          containerStyles="dropshadow-lg"
          Headline="We have one main goal, to get more views towards your business! With Laughing Coyote Dev, you get more than just a website:"
   
          SQtitle1="the information is incomplete"
          SQparagraph1="Decide which package is right for you. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle2="people aren’t finding it on Google,"
          SQparagraph2="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle3="or they can’t navigate it on their phones"
          SQparagraph3="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle4="Simply Having A Website Is Not The Goal: getting more customers Is Your Goal!"  
          SQparagraph4="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
           />
          </>
        <AboutMe />
      <div id="contact" className="">
       <Dynamic_FooterBanner
        title="Has my portfolio piqued your interest....? "
        paragraph="If so, you can contact me at devdesignsbyelsa@gmail.com Looking forward to hearing from you!"
        containerStyles="border border-richBlack dropshadow-md"
      />
</div>
    </div>
  )
}
