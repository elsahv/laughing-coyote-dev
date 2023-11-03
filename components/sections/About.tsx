'use client'
import Image from "next/image"
import SelfImg from '../../public/self.jpg'
import Link from "next/link"



const AboutMe = () => {
  return (
    <div className="">
    <div id="about-grid" className="grid md:grid-cols-2 grid-cols-1">
          <div id="img-wrapper" className="flex justify-end">
            <Image className="2xl:w-1/2 w-full bg-onyx py-1 pl-1 pr-2 m-[55px] drop-shadow-md border border-black"
             src={SelfImg} 
             alt=""/>
          </div>
         <div id="about-me" className="p-5 mt-[55px] text-lg">
           <h2 className="mt-5 text-3xl underline">About</h2>
           <p className="pt-">Hi there, and welcome! {"I'm"} Elsa, and I love creating colorful and unconventional websites.</p> {/* //?<-- LINK TO PORTFOLIO?*/}
           <p className="">As someone who has started a creative career from the ground up, I know what its like to be overwhelmed with figuring out web design, selling strategies, and marketing.</p>
           <p className="pt-[55px]">This was what Laughing Coyote Dev was created for, to save you some headaches that come with learning about:</p>
           <ul>
            <li className="">- how to design a website</li>
            <li className="">- how to pick a domain and use hosting</li>
            <li className="">- and etc! See 
            <Link href="/#services" className="pl-1 underline">
            services below!
            </Link>
            </li>
            
           </ul>
              </div>

               {/* 3 //todo: MAKE VISIBLE WHEN MORE CONTENT v*/}
              
             </div>
                {/* <Dynamic_GridSqs
              containerStyles="dropshadow-lg"
              Headline="4 STEP PROCESS- How it works!"

              SQtitle1="Discovery phase"
              SQparagraph1="phone calls, meetings, consultations.... research, planning, scheduling... develop site structure/sitemap ex:10 hours x $50/hr=$500. -What does the user want? -how to make brand provide value?"

              SQtitle2="Creative Phase"
              SQparagraph2="sitemap, wireframe site--> mockup first draft--> mockup revised, final draft"

              SQtitle3="Development Phase"
              SQparagraph3="set up vercel temp--> convert mockups into code--> go over temp with client --> final revisions"

              SQtitle4="Launch Phase"  
              SQparagraph4="final review and Q&A--> move local website to live server, hosting, client training--> final payment"
              /> //todo: MAKE VISIBLE WHEN MORE CONTENT */}
    </div>
  )
}

export default AboutMe