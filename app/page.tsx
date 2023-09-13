import Hero from '../components/sections/Hero'
import Designs from '../components/sections/Designs'
import About from '../components/sections/About/Index'
import Services from '../components/sections/Services'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      {/* //todo- 1.START ABOUT PG V */}
      <Hero />
      <Designs />
      <About />
      {/* //todo:end ^ */}



      {/* //todo- START SERVICES PG V */}
     <Services />
   {/*    <FAQ /> */}
      {/* //todo:end ^ */}

       
      {/* //todo- START CONTACT PG ^ */}
      <Contact />
      {/* //todo:end ^ */}

    </>
  )
}
