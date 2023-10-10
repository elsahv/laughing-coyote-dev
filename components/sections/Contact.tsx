'use client'

import ContactForm from "../ContactForm"

const Contact = () => {
  return (
    <>
 
<section id="contact" className="block">
  <div className="px-5 md:px-10">
    <div className="mx-auto w-full max-w-7xl">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
          <div className="border border-onyx rounded max-[991px]:max-w-[720px]">
            <section className="_textShadow text-white bg-teal p-5"> 
            <h2 className="font-bold mb-2 text-3xl md:text-5xl">Contact</h2>
            <div className="ml-0 mr-0 mt-4 max-w-[528px]">
              <p className="max-[479px]:text-sm">Lets work together!</p>
            </div>
        
            <div className="mb-8 max-w-[480px]">
              <p className="max-[479px]:text-sm">Fill out the form to start your consultation process!</p>
            </div>
            </section>
          </div>

          <>
          <ContactForm />
          </>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Contact