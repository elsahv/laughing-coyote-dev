import {  Dynamic_FooterBanner, Dynamic_GridSqs, Hero, PackageRates, ServicesIncludes,  } from '@/components'
import Websites from '@/components/Websites'

export default function Home() {
  return (
    <div className="snap-mandatory snap-y">  
 <section className="snap-start">
      <Hero />   
      </section> 
      <section className="snap-center">
     <section className="px-[40px] pt-5 border-t-2 border-black">
        
    <h2>Your Website Has One Job: Get People In The Door</h2>
    <p>But your website {'can’t'}do its job if the information is incomplete, people {'aren’t'} finding it on Google, or they {'can’t'}navigate it on their phones.</p>
    <p> Simply Having A Website Is Not The Goal: More Customers Is Your Goal A strategic website is a tool to get there. There are tools to build your own website, but building your own website is guesswork. Take the guesswork away using our strategy with your website at the core. Our websites help you grow your email list to reach your audience when you have a special, a new product, or simply want to keep your brand front and center. </p>
</section>

      <Dynamic_GridSqs
          containerStyles="dropshadow-lg my-5"
          Headline="About- how it works"
       
          SQtitle1="Discovery phase"
          SQparagraph1="Decide which package is right for you. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle2="Creative Phase"
          SQparagraph2="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle3="Development Phase"
          SQparagraph3="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle4="Launch Phase"  
          SQparagraph4="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."

           />
    </section>
       <ServicesIncludes />
       <Websites />
       <PackageRates />
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
