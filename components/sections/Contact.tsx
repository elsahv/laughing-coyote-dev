'use client'

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
          <div className="mx-auto max-w-[608px] bg-coral px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[2em] pb-8">
            <div className="text-center">
              <h3 className="font-bold text-2xl md:text-3xl">Get a free quote</h3>
              <div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
                <div className=" text-sm sm:text-sm">Looking forward to hearing from you!</div>
              </div>
              <div className="mx-auto w-full max-w-[400px]">
                <div className="mx-auto max-w-[400px] text-left mb-4">
                  <form name="wf-form-password" method="get">
                    <div className="relative">
                      <label htmlFor="name-2" className="mb-1 font-medium">Your Name</label>
                      <input 
                       type="text" className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4" 
                       name="name-2"
                        placeholder=""
                         />
                    </div>
                    <div className="relative mb-2">
                      <label htmlFor="name-2" className="mb-1 font-medium">Email Address</label>
                      <input type="email" className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"  name="name-2" placeholder="" />
                    </div>
                    <div className="relative mb-5 md:mb-6 lg:mb-8">
                      <label htmlFor="field-3" className="mb-1 font-medium">Project Brief</label>
                      <textarea placeholder=""  name="field" className="m-0 block h-auto min-h-[128px] w-full overflow-auto border border-solid border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm mb-2.5 px-3 py-2 rounded-md pl-4"/>													 
                    </div>
                    <input type="submit" value="Get free quote" className="m-0 inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Contact