'use client'
import site1 from "../public/assets/screenshots/site1.png";
import site2 from "../public/assets/screenshots/site2.png";
import site3 from "../public/assets/screenshots/designs/fish-expo-demo.png";

import Image from "next/image";
import Link from "next/link";


const content = [
  {
    id: 1,
    image: site1,
    url: "https://lc-resume-portfolio-demo-h5tmgpd06-elsahv.vercel.app/",
  },
  {
    id: 2,
    image: site2,
    url: "https://template-left-nav-journal-layout-1.vercel.app/",
  },
  {
    id: 3,
    image: site3,
    url: "https://lc-fish-expo-demo.vercel.app/",
  },
   
];



const Designs = () => {
  return (
    <div className="dropshadow-lg bg-parchment border-6 border-brown my-[55px]"
      id="fish-gallery"
    >
      <div className="flex justify-center">
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
      </div>
    </div>
  );
};

export default Designs;
