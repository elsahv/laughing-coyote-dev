import { About, FAQaccordian, ServicesIncludes } from '@/components'
import DynamicFooterBanner from '@/components/Dynamic_FooterBanner'
import DynamicGridSqs from '@/components/Dynamic_GridSqs'

const WebDevelopment = () => {
  return (
    <div>
      <About />
        <ServicesIncludes />

        <div className="w-full">
           <DynamicGridSqs
          containerStyles=""
          title="4 STEP PROCESS"
          item1="Discovery phase"
          item2="Creative Phase"
          item3="Development Phase"
          item4="Launch Phase"  

           />
        </div>
.
       <section className="bg-carribean w-full flex justify-center">
       <FAQaccordian />
       </section>
       <DynamicFooterBanner
        title="Contact CTA"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sunt, est quas amet aut explicabo tempore quasi autem iure, minus consequatur eveniet tempora unde, eos quia odio accusamus totam praesentium."
       />
    </div>
  )
}

export default WebDevelopment