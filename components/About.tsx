'use client'
import Designs from "@/components/Designs"
import Image from "next/image";
import AboutImg from "../public/assets/screenshots/designs/-hero.png";
import { motion } from "framer-motion";
import DynamicButtons from "./Dynamic_buttons";
import CaseStudies from "./CaseStudies";


 
const About = () => {
  return (
    <section id="about">
      <Designs />
     
      <div className="py-5 flex 2xl:flex-row flex-col justify-center text-onyx ">
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="2xl:w-1/2 w-3/4 2xl:px-[150px] md:pl-[25px] sm:px-1 ml-5 2xl:text-lg sm:text-2xl"
    >
      <h2 className="text-black font-bold 2xl:text-4xl sm:text-5xl 2xl:my-5 lg:mt-5 sm:mt-[200px]">
      So why choose Laughing Coyote Dev?
      </h2>
      <p>
      Endless Designs available- consectetur adipisicing elit. Delectus quaerat labore quod, iure
        nihil dolorum at nesciunt? Quibusdam quasi natus repudiandae in
        repellat animi, vitae velit modi, sunt, ipsam facilis.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        ea ipsam corrupti suscipit sapiente quisquam odit dolorum totam ad
        in ab magni eos enim illo iusto delectus sed, unde autem!
      </p>

      <DynamicButtons
               leftBtn="a button!"
               rightBtn="another button!"
              />

    </motion.div>
    <div className="2xl:m-0 sm:ml-[50px] p-5">
      <Image
        src={AboutImg}
        alt=""
        className="w-[600px] universal-img"
      />
    </div>
  </div>

   
    <CaseStudies />
    </section>
  )

}

export default About