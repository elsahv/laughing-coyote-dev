'use client'

import Image from "next/image";
import Link from "next/link";
import site1 from "../public/assets/screenshots/site1.png";
import site2 from "../public/assets/screenshots/site2.png";
import site3 from "../public/assets/screenshots/designs/fish-expo-demo.png";
import site4 from "../public/assets/screenshots/hoveyroofing.png";
import site5 from "../public/assets/screenshots/site4.png";
import site6 from "../public/assets/screenshots/site7.png";
import site7 from "../public/assets/screenshots/site3.png";
import { motion } from "framer-motion";

const content = [
    {
      image: site1,
      url: "https://lc-resume-portfolio-demo-h5tmgpd06-elsahv.vercel.app/",
    },
    {
      image: site2,
      url: "https://template-left-nav-journal-layout-1.vercel.app/",
    },
    {
      image: site3,
      url: "https://lc-fish-expo-demo.vercel.app/",
    },
    {
        image: site4,
        url: "https://lc-fish-expo-demo.vercel.app/",
      },
    {
        image: site5,
        url: "https://hoveyroofing.com/",
      },
      {
        image: site6,
        url: "https://template-left-nav-journal-layout-1.vercel.app/",
      },
      {
        image: site7,
        url: "https://template-left-nav-journal-layout-1.vercel.app/",
      },
     
  ];


const Websites = () => {
  return (
    <div id="websites" className="dropshadow-lg border-6 border-brown my-[55px]">
 

<div className="grid 2xl:grid-cols-3 grid-cols-2 gap-4">
  <div className="bg-test1">
    <Image className="h-[100%] border-2 border-sienna rounded"
     src={site1}
     alt=""
     />
    </div>



  <div className="bg-test2">
  <Image className="h-[100%] border-2 border-sienna rounded"
     src={site2}
     alt=""
     />
  </div>
  <div className="bg-test1">
  <Image className="h-[100%] border-2 border-sienna rounded"
     src={site3}
     alt=""
     />
  </div>

  {/* //*SECTION CONTENT  v*/}
  <div className="flex justify-center col-span-2 py-5 ">
  <section className="2xl:w-1/2 w-3/4 py-5" id="content">
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
    >
  <h2 className="text-black font-bold 2xl:text-4xl md:text-3xl text-2xl 2xl:my-5">
  Endless Designs available
      </h2>
      <p>
     - Here at Laughing Coyote, we work together to not only use your website to display information, but to express {"it's"} individuality and your personality.
      </p>
      <br />
     
     
       <p>
      View all website template demos cta. 
      We take all the guesswork out of that. With a diverse range of design elements, color palettes, typography choices, and layout options, and endless designs available
      </p> 
      </motion.div>
    </section>
    </div>
  {/* //*SECTION CONTENT  ^*/}


  <div className="bg-test1">
  <Image className="h-[100%] border-2 border-sienna rounded"
     src={site4}
     alt=""
     />
  </div>
  <div className="bg-test2">
  <Image className="h-[100%] border-2 border-sienna rounded"
     src={site5}
     alt=""
     />
  </div>
  <div className="bg-test1">
  <Image className="h-[100%] border-2 border-sienna rounded"
     src={site6}
     alt=""
     />
  </div>
  <div className="bg-test2">
  <Image className="h-[100%] border-2 border-sienna rounded"
     src={site7}
     alt=""
     />
  </div>
</div>


    {/* <div className="flex justify-center">
      <div className="bg-orange-400  grid gap-1 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {content.map((item, index) => (
          <div className="border-4 border-onyx" key={index}>
            <Link href={item.url}>
            <Image  className="h-[100%] border-1 border-black"
              src={item.image}
              alt=""
            />
            </Link>
          </div>
        ))}
      </div>
    </div> */}
  </div>
  )
}

export default Websites