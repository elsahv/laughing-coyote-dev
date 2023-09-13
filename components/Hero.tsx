'use client'

import { motion } from "framer-motion";
import Coyote from "../public/coyote.png";
import Image from "next/image";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView="show"
    >
      <div id="hero" className="2xl:pt-[120px] pt-[90px] bg-parchment">

        {/* 1 */}
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

      {/* //todo- IMP CONTACT CTA V */}
              <button className="dropshadow-lg bg-teal px-2 py-1 text-orange-300 hover:text-parchment dropshadow-md">
            Find Out More!
              </button>
              <button className="dropshadow-lg bg-teal px-2 py-1 text-orange-300 hover:text-parchment dropshadow-md">
               Contact- free consultation
              </button>
      {/* //todo- END ^ */}

            </div>
          </section>

          <section className="pt-[25px]">
            <Image src={Coyote} alt="" className=""  />
          </section>
        </div>

        {/* 1 */}
      </div>
    </motion.section>
  );
};

export default Hero;
