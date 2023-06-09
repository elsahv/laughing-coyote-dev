"use client";

import Image from "next/image";
import content from "./data";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <div id="services" className="main_grid text-onyx">
        {/* //*LEFT SQ */}
        <section className="left-sq pt-[80px] border-r-2">
          <div className=" mb-[50px] 2xl:mx-5 2xl:px-5 sm:px-1 sm:mx-1">
            <h2 className="text-black font-bold text-2xl mb-5">
              So why should you bother with a website? What can a website do for
              your business?
            </h2>
            <div className="my-5 _textShadow">
              <p className="text-lg pl-1 py-2">
                -A website provides a platform for small businesses to showcase
                their products or services to a wider audience.
              </p>
              <p className="text-lg py-2">
                -Why should you prefer a custom-made website, when you can
                simply use wix or wordpress? Because a custom website fits your
                business, personality, goals... and you alone.
              </p>
              {/* <p className="text-lg pl-1 py-2">
              -Because each and every page and code was made with you in mind.
              Either you fit the website, or the website fits you!
            </p> */}
              {/* <p className="text-lg pl-1 py-2 pb-[50px]">
              -Laughing Coyote Dev was created to simplify the process of
              bringing your business online. Each site build comes with multiple
              services, leaving your more time to focus on your business
              instead!
            </p> */}
            </div>
            <Link
              className="text-lg bg-parchment py-2 px-3 border border-onyx rounded-md hover:bg-onyx hover:text-parchment"
              href="/creative-projects"
            >
              View Website Designs
            </Link>
          </div>
        </section>

        {/* //*RIGHT SQ */}
        <section className="right-sq">
          <div className="py-5b ">
            <h2 className="font-bold text-onyx text-2xl mt-5 text-center underline ">
              Services Offered:
            </h2>
            <div className="grid 2xl:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 px-5 mt-5 ">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-black bg-parchment"
                >
                  <h3 className="text-lg text-center font-bold pt-3 px-3">
                    {item.title}
                  </h3>
                  <div className="flex justify-center py-2">
                    <Image
                      src={item.image}
                      alt=""
                      id="border"
                      className="rounded-2xl w-16 p-3 bg-munsell border border-onyx"
                    />
                  </div>
                  <p className="text-md mt-5 px-2 pt-1 pb-3 text-md text-center">
                    {item.paragraph1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Services;
