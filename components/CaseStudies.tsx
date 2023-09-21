'use client'
import Roof from "../public/assets/screenshots/hoveyroofing.png";
import site4 from "../public/assets/screenshots/site4.png";
import site7 from "../public/assets/screenshots/site7.png";

import Image from "next/image";
import Link from "next/link";

//todo: HOVER GRID EFFECT 

const content = [
  {
    id: 1,
    image: Roof,
    url: "https://hoveyroofing.com/",
  },
  {
    id: 2,
    image: site4,
    url: "https://template-left-nav-journal-layout-1.vercel.app/",
  },
  {
    id: 3,
    image: site7,
    url: "https://lc-fish-expo-demo.vercel.app/",
  },
   
];



const CaseStudies = () => {
  return (
    <div className="dropshadow-lg bg-parchment border-6 border-brown py-[55px]"
      id="fish-gallery"
    >
      <div className="flex justify-center">
        <div className="bg-orange-400 grid gap-1 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
      </div>
    </div>
  );
};

export default CaseStudies;
