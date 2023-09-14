'use client'

import Image from "next/image";
import content from "./data";
import { motion } from "framer-motion";


const Designs = () => {
  return (
    <div className="dropshadow-lg bg-parchment border-6 border-brown py-[55px]"
      id="fish-gallery"
    >
      <div className="flex justify-center">
        <div className="bg-orange-400  grid gap-1 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {content.map((item, index) => (
            <div className="border-4 border-onyx" key={index}>
              <a href={item.url}>
              <Image  className="h-[100%] border-1 border-black"
                src={item.image}
                alt=""
              />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designs;
