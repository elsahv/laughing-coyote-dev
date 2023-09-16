'use client'

import site1 from "../public/assets/screenshots/site1.png";
import site2 from "../public/assets/screenshots/site2.png";
import site3 from "../public/assets/screenshots/site3.png";

import Image from "next/image";
import { motion } from "framer-motion";
// import {content} from "@/constants";


export const content = [
  {
    id: 1,
    image: site1,
    title: "The Growing Pup",
    item1: "template small brochure single to 3 pages",
    item2: "-hero/Cta",
    item3: "-about section",
    item4: "-contact----- ",
    item5: "adipisci qui nesciunt ut haru",
    item6: "Lorem  esse eaque ipsam commodi nisi libero esse",
     },
  
  {
    id: 2,
    image: site2,
    title: "The Rising Carnivore/ Omega",
    item1: "small custom site with:",
    item2: "domain setup",
    item3: "hosting",
    item4: "web design",
    item5: "adipisci qui nesciunt ut haru",
    item6: "Lorem  esse eaque ipsam commodi nisi libero esse",
    },
  {
    id: 3,
    image: site3,
    title: "The Alpha",
    item1: "small site with monthly maintenance",
    item2: "w/ SUBSCRIPTION SERVICES",
    item3: "adipisci qui nesciunt ut harum fuga?",
    item4: " totam inventore",
    item5: "adipisci qui nesciunt ut haru",
    item6: "Lorem  esse eaque ipsam commodi nisi libero esse",
  },

  //? ADD "PARK OF THE PACK" ?? 
  // {
  //   id: 4,
  //   image: site4,
  // title: "PART OF THE PACK",
  // }, 
];



const PackageRates = () => {
  return (
    <section
      id="package-rates"
      className="h-screen bg-onyx"
    >
      {/* //* RECENT CLIENTS*/}

<motion.div
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: .5 }}
>
      <h2 className="text-parchment drop-shadow-lg pt-[120px] flex justify-end font-bold pr-[200px]">
        Package rates
      </h2>
      {/* <span>Which wild animal are you??</span> */}   
      <div className="flex justify-center">
        <div className="2xl:px-[150px] px-5 pb-[50px] grid gap-x-6 gap-y-10 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-5 my-5">
          {content.map((item, index) => (
            <div className="border-2 border-black rounded-lg"
              key={index}
            >
              <Image
                className=" rounded-t-lg w-[100%] h-[270px] border-t-2 border-b-2 border-black"
                src={item.image}
                alt=""
              />
              <div className="p-2 bg-parchment rounded-b-lg">
                <h3 className="text-lavender font-bold text-lg">{item.title}</h3>
                <ul className="">
                  <li>{item.item1}</li>
                  <li>{item.item2}</li>
                  <li>{item.item3}</li>
                  <li>{item.item4}</li>
                  <li>{item.item5}</li>
                  <li>{item.item6}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
   

      </motion.div>
    </section>
  );
};

export default PackageRates;
