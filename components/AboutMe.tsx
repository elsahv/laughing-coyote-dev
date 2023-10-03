import Image from "next/image"
import Img from '../public/blue.jpg'
import { Dynamic_GridSqs } from "."



const AboutMe = () => {
  return (
    <div className="">
    <div className="grid md:grid-cols-2 grid-cols-1">

      {/* 1 */}
          <section id="1" className="flex justify-end">
            <Image className="m-[55px] drop-shadow-md border border-black"
             src={Img} 
             alt=""/>
          </section>

       {/* 2 */}
         
         <section id="2" className="p-5 mt-[55px]">
           <h2 className="mt-5">About</h2>
           <p>Hi there, {"I'm"} Elsa. I know what its like to be overwhelmed with figuring out web design, selling strategies, and marketing. Save yourself some headaches: Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, similique eaque at optio fugit odio esse aut repellendus maxime molestias laboriosam sit eos ex minus, facilis doloremque illum dolorum dolore!</p>
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
              </section> //todo: MAKE VISIBLE WHEN MORE CONTENT ^*/}
             </div>
                <Dynamic_GridSqs
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
              />
    </div>
  )
}

export default AboutMe