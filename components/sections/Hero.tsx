  'use client'

import { motion } from "framer-motion";
import Coyote from "../../public/coyote.png";
import Image from "next/image";
import Link from "next/link";
import { Dynamic_GridSqs } from "..";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView="show"
    >
      <div id="" className="2xl:pt-[120px] pt-[90px]">
        <div className="grid 2xl:grid-cols-2 grid-cols-1 h-screen">
          <section className="px-5 flex items-center ">
            <div className="md:pl-[70px] pl-5">
              <div className="py-1 mb-1">
                <h1 className="text-4xl font-bold">Laughing Coyote Dev</h1>
                <p className="text-2xl font-semibold pl-1 pt-1">A subscription website service for busy small-businesses owners.</p>
              </div>
              {/* <p className="pb-5">
               Why should you prefer a custom-made
                website, when you can simply use wix or wordpress? Because a
                custom website fits your business, personality, goals... and you
                alone.
              </p> */}

                    <ul className="text-lg pt-1">
                      <li> <b>-</b> Increased potential customers, easier to find on Google</li>
                      <li> <b>-</b> The ablity to tell your story and brand</li>
                      <li> <b>-</b> Peace of mind... for business owners who {"don't"} have time to build with software</li>
                      <li> <b>-</b> A custom website that fits your business, personality, goals... and you
                alone.</li>
                    </ul>





<div className="p-1 mt-5 text-parchment text-lg">
            <button className="dropshadow-lg bg-teal hover:text-white mr-1 px-2 py-1 dropshadow-md">
              <Link href="/#about">
              About
              </Link>
              </button>
              <button className="dropshadow-lg bg-carribean hover:text-orange ml-1 px-2 py-1 dropshadow-md">
              <Link href="/#contact">
              Contact
              </Link>
              </button>
    </div>

            </div>
          </section>

          <section className="pt-[25px]">
            <Image src={Coyote} alt="" className=""  />
          </section>
        </div>
      </div>
      <>


                 





          {/* //todo: MAKE VISIBLE WHEN CONTENT READY V
           <Dynamic_GridSqs
          containerStyles="dropshadow-lg"
          Headline="We have one main goal, to get more views towards your business! With Laughing Coyote Dev, you get more than just a website. "
   
          SQtitle1="Information displayed and accessible"
          SQparagraph1="Easier to find on Google"
       
          SQtitle2="The ablity to tell your businesses story"
          SQparagraph2="Owning a website gives you the ablity to tell your business story without any limitations. "
       
          SQtitle3="Mobile Optimization"
          SQparagraph3="Studies show that majority of website use is through mobile phones and tablets"
       
          SQtitle4="Cancel anytime"  
          SQparagraph4="Laughing Coyote is a subscription service that takes care of all your website brochure needs, if ever unsatisfied, you can cancel anytime"
           />  //todo: MAKE VISIBLE WHEN CONTENT READY ^ */}
          </>


    </motion.section>
  );
};

export default Hero;
