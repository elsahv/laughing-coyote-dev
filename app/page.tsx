  import { AboutMe, Dynamic_FooterBanner, Hero, PkgRates, ServicesIncludes } from '@/components'
import Websites from '@/components/Websites'

export default function Home() {
  return (
    <>  
      <Hero />   
      <AboutMe />
      <ServicesIncludes />
      <Websites />
      <PkgRates />
      <Dynamic_FooterBanner
        title="Has my portfolio piqued your interest....? "
        paragraph="If so, you can contact me at devdesignsbyelsa@gmail.com Looking forward to hearing from you!"
        containerStyles="border border-richBlack dropshadow-md"
      />
    </>
  )
}
