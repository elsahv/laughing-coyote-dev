import Image from "next/image"
import Img from '../public/blue.jpg'



const AboutMe = () => {
  return (
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


               {/* 3 */}
              <section id="3" className="p-5 bg-test2 border border-black">
              <h3 className="text-lg font-semibold">Here is what you would have if you took on web design yourself-</h3>
              <p>list/ cost of everything</p>
              <ul>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde doloremque, temporibus sapiente blanditiis debitis?</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde doloremque, temporibus sapiente blanditiis debitis?</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde doloremque, temporibus sapiente blanditiis debitis?</li>
              </ul>
              </section>
             {/* 4 */}
              <section id="4" className="p-5 bg-orange border border-black">
               <h3 className="text-lg font-semibold">Here is what you would have if you went with me</h3>
              <ul>
                <li>advantages, what I do</li>
                <li>phases cta link</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde doloremque, temporibus sapiente blanditiis debitis?</li>
              </ul>
              </section>
    </div>
  )
}

export default AboutMe