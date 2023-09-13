import ServicesIncludes from '@/components/ServicesIncludes'
import About from '../../components/About'
import CaseStudies from '@/components/CaseStudies'
import FAQaccordian from '@/components/FAQaccordian'
import FooterBanner from '@/components/FooterBanner'

const WebDevelopment = () => {
  return (
    <div>
      <About />

.

      <section className="bg-test1 w-full flex justify-center">
        <ServicesIncludes />
        </section>
.
       <section className="bg-teal w-full flex justify-center">
       <FAQaccordian />
       </section>



      {/* //todo DYNAMIC COMP- FOOTERBANNER*/}

       <FooterBanner />
      {/* //todo END*/}



      <CaseStudies />
    </div>
  )
}

export default WebDevelopment