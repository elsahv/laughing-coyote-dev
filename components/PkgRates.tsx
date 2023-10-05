import Image from 'next/image'
import {IoCheckmarkCircle} from 'react-icons/io5'


const PkgRates = () => {
  return (
   
<div id="package-rates" className="px-5 md:px-10">
  <div className="mx-auto w-full max-w-7xl">
    <div className="py-16 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-start max-[767px]:text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Simple &amp; Affordable Pricing</h2>
        <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
          <p className="text-[#636262]">Simple &amp; fixed pricing. 30 days money-back guarantee</p>
        </div>
        <div className="grid w-full grid-flow-row grid-cols-1 justify-center gap-8 md:grid-cols-2 md:gap-4 lg:w-[70%]">
          <div className="border border-black flex w-full max-w-[416px] flex-col items-start justify-self-start rounded-md p-8 max-[767px]:mx-auto max-[767px]:text-left">
            <div className="mb-4  px-4 py-1.5 bg-carribean">
              <p className="text-parchment text-sm font-bold">THE GROWING PUP</p>
            </div>
            <p className="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">WEBSITE BUILD + BASIC SUPPORT SERVICES - perfect for when you need something a bit quicker!</p>
            <h2 className="mb-5 text-left text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">$99<span className="text-sm font-light">/year</span>
            </h2>
            <a href="#" className="bg-orange mb-5 flex w-full max-w-none grid-cols-2 flex-row items-center justify-center border-2 border-solid border-black px-8 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,_0)_-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px] md:mb-6 lg:mb-8">
              <div className="mr-6 font-bold">Get Started</div>
              <div className="h-4 w-4 flex-none">
                <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </div>
            </a>
            <div className="mt-2 flex flex-row items-center text-left">
              <Image src="" alt="" className="mr-2 inline-block w-5 max-w-full" />
              <IoCheckmarkCircle className="w-[50px]"/>
              <p className="">STANDARD PAGES TEMPLATES (w/ template components)</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <IoCheckmarkCircle className="w-[50px]"/>
              <p className="">Home Page</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <IoCheckmarkCircle className="w-[50px]"/>
              <p className="">About- w/interactive Photo Gallery </p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <IoCheckmarkCircle className="w-[50px]"/>
              <p className="">Contact Page and form</p>
            </div>
          </div>
          <div className="flex w-full max-w-[416px] flex-col items-start justify-self-start rounded-md border border-solid border-black bg-test2 p-8 max-[767px]:mx-auto max-[767px]:text-left">
            <div className="mb-4 text-carribean bg-parchment px-4 py-1.5">
              <p className="text-sm font-bold">THE RISING CARNIVORE</p>
            </div>
            <p className="mb-6 font-light text-[#636262] md:mb-lg:mb-12">WEBSITE BUILD + SUBSCRIPTION SUPPORT SERVICES
            </p>
            <h2 className="mb-5 text-left text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">$149<span className="text-sm font-light">/year</span>
            </h2>
            <a href="#" className="mb-5 flex w-full max-w-none grid-cols-2 flex-row items-center justify-center bg-parchment border border-black px-8 py-4 text-center font-semibold  transition  [box-shadow:rgb(0,_0,_0)_-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]  md:mb-6 lg:mb-8">
              <div className="mr-6 font-black">Get Started</div>
              <div className="h-4 w-4 flex-none">
                <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </div>
            </a>
            <div className="mt-2 flex flex-row items-center text-left">
              <IoCheckmarkCircle className="w-[50px]"/>
              <p className="">SPECIALIZED PGS (w/ specialized components)</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <IoCheckmarkCircle className="w-[50px]"/>
              <p className="">Monthly hosting on secure off-site servers</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <IoCheckmarkCircle className="w-[50px]"/>
              <p className="">Domain name purchase & annual renewals</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <IoCheckmarkCircle className="w-[50px]"/>
              <p className="">Monthly security & software updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default PkgRates