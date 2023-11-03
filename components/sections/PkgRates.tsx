import Link from 'next/link'
import React from 'react'

const PkgRates = () => {
  return (
    <>
  <section id="package-rates">
  <div  className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-24 lg:py-32">
    <h2  className="text-center text-3xl font-bold md:text-5xl">Simple &amp; Fixed Pricing</h2>
    <p  className="mx-auto mb-8 mt-4 max-w-lg text-center text-[#636262] md:mb-12 lg:mb-16">30 days money-back guarantee</p>
    <div  className="mx-auto mb-8 grid w-full grid-cols-1 gap-4 rounded-md border border-black p-8 md:mb-12 md:grid-cols-2 md:px-12 md:py-16 lg:mb-16 lg:grid-cols-[1fr_0.25fr_1fr] lg:px-20">
      <div  className="grid grid-cols-1 gap-8 sm:gap-6">
        <div  className="flex flex-col items-center sm:flex-row">
          <div  className="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border border-black">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a087c4bede0d9ba097dcc_Vector.svg" alt="" />
          </div>
          <div  className="flex w-full flex-col items-center sm:items-start">
            <p  className="font-bold">Cloud Storage</p>
            <p  className="text-center md:text-start">Up to 100GB for works</p>
          </div>
        </div>
        <div  className="flex flex-col items-center sm:flex-row">
          <div  className="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border border-black">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a087edd287250a11d6098_Vector-1.svg" alt="" />
          </div>
          <div  className="flex w-full flex-col items-center sm:items-start">
            <p  className="font-bold">API&nbsp;Access</p>
            <p  className="text-center md:text-start">Create anything you want</p>
          </div>
        </div>
        <div  className="flex flex-col items-center sm:flex-row">
          <div  className="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border border-black">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a087de14b8df5878f0dc0_Vector-2.svg" alt="" />
          </div>
          <div  className="flex w-full flex-col items-center sm:items-start">
            <p  className="font-bold">Live Chat</p>
            <p  className="text-center md:text-start">Connect with your customers</p>
          </div>
        </div>
      </div>
      <div  className="mx-auto hidden h-full w-px border-black border-l lg:block"></div>
      <div  className="grid grid-cols-1 gap-8 sm:gap-6">
        <div  className="flex flex-col items-center sm:flex-row">
          <div  className="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border border-black">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0881c3f026042fd0f9d6_Group.svg" alt="" />
          </div>
          <div  className="flex w-full flex-col items-center sm:items-start"> 
            <p  className="font-bold">Unlimited user Accounts</p>
            <p  className="text-center md:text-start">We {'don’t'} limit you create account</p>
          </div>
        </div>
        <div  className="flex flex-col items-center sm:flex-row">
          <div  className="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border border-black">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0885befa0cf7096b80bf_Group-1.svg" alt="" />
          </div>
          <div  className="flex w-full flex-col items-center sm:items-start">
            <p  className="font-bold">Custom Domain</p>
            <p  className="text-center md:text-start">Add your own domain</p>
          </div>
        </div>
        <div  className="justify-centerr flex flex-col items-center sm:flex-row md:justify-start">
          <div  className="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border border-black">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0882f3c8a43ed446a42a_Vector.svg" alt="" />
          </div>
          <div  className="flex w-full flex-col items-center sm:items-start">
            <p  className="font-bold">Share Information</p>
            <p  className="text-center md:text-start">Connect with your customers</p>
          </div>
        </div>
      </div>
    </div>
      Pricing Button  
    <h3  className="mb-5 text-2xl md:mb-6 md:text-3xl lg:mb-8">
      <span className="font-bold">$199</span>
      /month or
       <span className="font-bold">$1788</span>
         /yr  {'<--$149/mth value!'}  
       </h3>
    <Link href="/#contact" className="rounded max-w-[300px] bg-orange mb-5 flex w-full grid-cols-2 flex-row items-center justify-center border-2 border-solid border-black px-8 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,_0)_-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px] md:mb-6 lg:mb-8">
              <div className="mr-6 font-bold">
                <div>Get Started</div>
                </div>
              <div className="h-4 w-4 flex-none">
                <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </div>
            </Link>
    <p>30 days money-back guarantee</p>
    <p>limited time: low fee!</p>
  </div>
</section>
    </>
  )
}

export default PkgRates