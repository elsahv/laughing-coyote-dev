import ServicesIncludes from '@/components/ServicesIncludes'
import Hero from '../components/Hero'
import FooterBanner from '@/components/FooterBanner'

export default function Home() {
  return (
    <>
      <Hero />    
        <div>
       <section className="bg-test1 w-full flex justify-center">
       <ServicesIncludes />

        </section>



       <section className="bg-teal w-full flex justify-center">4 step process</section>
       <section className="bg-test2 w-full flex justify-center">
        <FooterBanner />
       </section>    
      </div>

      {/* //? FEATURED WORKS- front and center ?? */}
    
    </>
  )
}
