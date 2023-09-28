import {  Dynamic_FooterBanner, Dynamic_GridSqs, Hero, PackageRates, ServicesIncludes,  } from '@/components'
import Websites from '@/components/Websites'

export default function Home() {
  return (
    <>  
      <Hero />    
      <Dynamic_GridSqs
          containerStyles="dropshadow-lg my-5"
          Headline="About"
              SQtitle1="seo"
              SQparagraph1="The goal of SEO is to increase organic (non-paid) traffic to a website."
              SQtitle2="speed"
              SQparagraph2="A fast-loading website is important for user experience and can influence search engine rankings."
              SQtitle3="Hands Off Services"
              SQparagraph3="I assist with pretty much everything, leaving you more time to spend on your business"
              SQtitle4="cancel anytime"
              SQparagraph4="No hidden fees or surprises!"
           />
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
    </>
  )
}
