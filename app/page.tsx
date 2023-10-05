  import { About, Contact, Dynamic_FooterBanner, Hero, PkgRates, Services, Websites } from '@/components'

export default function Home() {
  return (
    <>  
      <Hero />   
      <About />
      <Services />
      <Websites />
      <PkgRates />
      <Contact />

      {/* <Dynamic_FooterBanner
        title="Has my portfolio piqued your interest....? "
        paragraph="If so, you can contact me at devdesignsbyelsa@gmail.com Looking forward to hearing from you!"
        containerStyles="border border-richBlack dropshadow-md"
      /> */}
    </>
  )
}
