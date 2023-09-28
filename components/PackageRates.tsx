'use client'

import Image from "next/image";
import site1 from "../public/assets/screenshots/site5.png";
import site2 from "../public/assets/-hero.png";
import site3 from "../public/assets/screenshots/site2.png";

// import Image from "next/image";
import { motion } from "framer-motion";
// import {content} from "@/constants";


//! SELL BY STORY: CATEGORIZED, SPECIALIZED, AND UNIQUE BRAND SECTIONS

export const content = [
  {
    id: 1,
    image: site1,
    title: "The Growing Pup",
    item1: "STANDARD PAGES",
    item2: "-Home/Welcome (with phone number, hours, address, and directions)",
    item3: "Our Menu (show everything you offer along with mouth-watering pictures)",
    item4: "Our Specialties (show those off-menu creations and let customers know why they should drive past ‘the other guy’ to visit you)",
    item5: "Our Story (Tell your customers who you are and why you love ice cream)",
    item6: "Contact Us (including links to your social media channels)",
     },
  
  {
    id: 2,
    image: site2,
    title: "The Rising Carnivore + STANDARD PAGES",
    item1: "Catering  ",
    item2: "Blog setup/integration",
    item3: "Join Our Team Hiring Page",
    item4: "Join Our Newsletter",
    item5: "Specials Or Seasonal Promotions",
    item6: "Lorem  esse eaque ipsam commodi nisi libero esse",
    },
  {
    id: 3,
    image: site3,
    title: "The Alpha- full website with monthly services  + CARNIVORE AND STANDARD PGS",         //todo: <- MAKE INVISIBLE UNTIL LEARNT RIGHT SKILLS
    item1: "Online Ordering System (third-party software of your choice. Their rates apply)",
    item2: "Domain name purchase & annual renewals",
    item3: "Monthly hosting on secure off-site servers",
    item4: "Detailed monthly Google Analytics reports",
    item5: "Events Calendar setup & integration (Third-party, user-managed)",
    item6: "Monthly security & software updates",
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
      className="2xl:h-screen h-full"
    >

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: .5 }}
    >
      <div className="text-center mt-[105px]">
        <h2 className="font-bold text-onyx drop-shadow-lg">Package rates</h2>
        {/*  //todo CTA REASONS TO CHOOSE THIS SERVICE
             //todo: CREATE CHART- ESTIMATE HOW MUCH TO CREATE AND LEARN WEBSITE VS USE LC SERCVICES
             //todo:CANCEL ANYTIME PROMISE
                      
        
        */}


        {/*  //todo 4 processes grid?? */}
      <span>Which wild animal are you??</span>   
      </div>
      <div className="flex justify-center">
        <div className="2xl:px-[150px] px-5 pb-[50px] grid gap-x-6 gap-y-10 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-5 my-5">
          {content.map((item, index) => (
            <div className="border-2 border-sienna rounded-lg"
              key={index}
            >
              <Image
                className=" rounded-t-lg w-[100%] h-[270px] border-t-2 border-b-2 border-sienna"
                src={item.image}
                alt=""
              />
              <div className="p-2 rounded-b-lg">
                <h3 className="font-bold text-lg">{item.title}</h3>
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
