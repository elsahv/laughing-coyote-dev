  import { AboutMe, Dynamic_FooterBanner, Hero } from '@/components'

export default function Home() {
  return (
    <>  
      <Hero />   
      <AboutMe />
 

      <Dynamic_FooterBanner
        title="Has my portfolio piqued your interest....? "
        paragraph="If so, you can contact me at devdesignsbyelsa@gmail.com Looking forward to hearing from you!"
        containerStyles="border border-richBlack dropshadow-md"
      />
    </>
  )
}
