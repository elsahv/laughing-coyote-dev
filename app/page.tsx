  import { About, Contact, Dynamic_FooterBanner, Hero, PkgRates, Services, Test, Websites } from '@/components'
import BasicTemplates from '@/components/BasicTemplates'
import CaseStudies from '@/components/sections/CaseStudies'

export default function Home() {
  return (
    <>  
      <Hero />   
      <About />
      <Services />

      <Websites />
      <PkgRates />
       <BasicTemplates />

      {/* <Test /> */}
      {/* <CaseStudies /> */}
      <Contact />

      {/* <Dynamic_FooterBanner
        title="Has my portfolio piqued your interest....? "
        paragraph="If so, you can contact me at devdesignsbyelsa@gmail.com Looking forward to hearing from you!"
        containerStyles="border border-richBlack dropshadow-md"
      /> */}
    </>
  )
}
