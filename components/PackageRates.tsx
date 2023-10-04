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
    title: "The Growing Pup- WEBSITE BUILD  + BASIC SUPPORT SERVICES     ",                            //? <- WEBSITE BUILD 
    item1: "STANDARD PAGES TEMPLATES (w/ template components)- perfect for when you need something a bit quicker!",
    item2: "Our Gallery (show everything you offer along with mouth-watering pictures)",
    item3: "-Home/Welcome (with phone number, hours, address, and directions)",
    item4: "About (show off and let customers know why they should drive past ‘the other guy’ to visit you)",
    item5: "Our Story (Tell your customers who you are)",
    item6: "Contact Us (including links to your social media channels)",
     },
  
  {
    id: 2,
    image: site2,      
    title: "The Rising Carnivore-WEBSITE BUILD + SUBSCRIPTION SUPPORT SERVICES      ",             //? <- WEBSITE BUILD + SUBSCRIPTION SUPPORT SERVICES                    
    item1: "SPECIALIZED PGS (w/ specialized components)",
    item2: "Monthly hosting on secure off-site servers",                                       
    item3: "Domain name purchase & annual renewals",
    item4: "Detailed monthly Google Analytics reports",
    item5: "Specials Or Seasonal Promotions",
    item6: "Monthly security & software updates",
    },
  // {
  //   id: 3,
  //   image: site3,
  //   title: "The Alpha- WEBSITE BUILD + SUPPORT SUBSCRIPTION SERVICES + A LA CARTE, GROW WITH SEO CONTENT, email marketing ",         //? <- WEBSITE BUILD + SUPPORT SUBSCRIPTION SERVICES + GROW WITH SEO CONTENT 
  //   item1: "SEO",
  //   item2: "Sanity",
  //   item3: "",
  //   item4: "",
  //   item5: "",
  //   item6: "Email Marketing Join Our Newsletter",
  // },

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
