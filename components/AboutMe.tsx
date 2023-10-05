import Image from "next/image"
import SelfImg from '../public/self.jpg'
import { Dynamic_GridSqs } from "."
import Link from "next/link"



const AboutMe = () => {
  return (
    <div className="">
    <div className="grid md:grid-cols-2 grid-cols-1">

      {/* 1 */}
          <section id="1" className="flex justify-end">
            <Image className="w-1/2 bg-onyx py-1.5 pl-1 pr-2 m-[55px] drop-shadow-md border border-black"
             src={SelfImg} 
             alt=""/>
          </section>

       {/* 2 */}
         
         <section id="2" className="p-5 mt-[55px]">
           <h2 className="mt-5">About</h2>
           <h3 className="font-semibold">Hi there, and welcome to Laughing Coyote!</h3>
           <p className="pt-5">{"I'm"} Elsa, and I love creating colorful and unconventional websites.</p> {/* //?<-- LINK TO PORTFOLIO?*/}
           <p className="pt-5">As someone who has started a creative career from the ground up, I know what its like to be overwhelmed with figuring out web design, selling strategies, and marketing.</p>
           <p className="pt-5">This was what Laughing Coyote Dev was created for, to save you some headaches that come with learning about:</p>
           <ul>
            <li className="pt-2">- how to design a website</li>
            <li className="pt-2">- how to pick a domain and use hosting</li>
            <li className="pt-2">- and etc! See 
            <Link href="/#services" className="pl-1 underline">
            services below!
            </Link>
            </li>
            
           </ul>
              </section>


               {/* 3 //todo: MAKE VISIBLE WHEN MORE CONTENT v*/}
              {/* <section id="3" className="p-5 bg-test2 border border-black">
              <h3 className="text-lg font-semibold">Here is what you would have if you took on web design yourself-</h3>
              <p>list/ cost of everything</p>
              <ul>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde doloremque, temporibus sapiente blanditiis debitis?</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde doloremque, temporibus sapiente blanditiis debitis?</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde doloremque, temporibus sapiente blanditiis debitis?</li>
              </ul>
            </section> */}
             {/* 4 */}
              {/* <section id="4" className="p-5 bg-orange border border-black">
               <h3 className="text-lg font-semibold">Here is what you would have if you went with me</h3>
               <ul>
               <li>advantages, what I do</li>
               <li>phases cta link</li>
               <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde doloremque, temporibus sapiente blanditiis debitis?</li>
               </ul>
              </section>  ^*/}
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