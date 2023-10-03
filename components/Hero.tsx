'use client'

import { motion } from "framer-motion";
import Coyote from "../public/coyote.png";
import Image from "next/image";
import Link from "next/link";
import { Dynamic_GridSqs } from ".";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView="show"
    >
      <div id="hero" className="2xl:pt-[120px] pt-[90px]">
        <div className="grid 2xl:grid-cols-2 grid-cols-1 h-screen">
          <section className="px-5 flex items-center ">
            <div className="md:pl-[70px] pl-5">
              <div className="py-1 mb-1">
                <h1 className="text-2xl font-bold">The Laughing Coyote</h1>
                <h3 className="text-2xl font-bold">
                  Web design for small businesses and creatives
                </h3>
              </div>
              <p className="pb-5">
                Why should you prefer a custom-made website, when you can simply
                use wix or wordpress? Why should you prefer a custom-made
                website, when you can simply use wix or wordpress? Because a
                custom website fits your business, personality, goals... and you
                alone.
              </p>

<div className="p-1 mt-5 text-parchment">
            <button className="dropshadow-lg bg-teal hover:text-white mr-1 px-2 py-1 dropshadow-md">
              <Link href="/web-development">
              See our Web Designs
              </Link>
              </button>
              <button className="dropshadow-lg bg-carribean hover:text-orange ml-1 px-2 py-1 dropshadow-md">
              <Link href="/contact">
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
          <Dynamic_GridSqs
          containerStyles="dropshadow-lg"
          Headline="We have one main goal, to get more views towards your business! With Laughing Coyote Dev, you get more than just a website:"
   
          SQtitle1="the information is incomplete"
          SQparagraph1="Decide which package is right for you. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle2="people aren’t finding it on Google,"
          SQparagraph2="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle3="or they can’t navigate it on their phones"
          SQparagraph3="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
       
          SQtitle4="Simply Having A Website Is Not The Goal: getting more customers Is Your Goal!"  
          SQparagraph4="Lorem it reiciendis libero. Fugit repellat omnis cupiditate dolorum perspiciatis. Officia aspernatur omnis, maxime repellendus quas quibusdam quis laborum."
           />
          </>


    </motion.section>
  );
};

export default Hero;
