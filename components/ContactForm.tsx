import { motion } from "framer-motion";


const ContactForm = () => {
  return (
  //   <motion.div
  //   initial={{
  //     x: -200,
  //     opacity: 0,
  //   }}
  //   transition={{
  //     duration: 1.5,
  //   }}
  //   whileInView={{ opacity: 1, x: 0 }}
  //   viewport={{ once: true }}
  //   className="mr-5 md:p-5 p-1 bg text-"
  // >
    <div id="contact-form" className="text-2xl p-1">
      <h2 className="font-bold text-3xl pb-5">
        Contact Form
      </h2>
      <form className="flex flex-col gap-y-4 2xl:w-1/2 w-full ">
        <input className="bg-teal text-parchment pl-1 border-2 border-black rounded-lg" placeholder="name" />
        <input className="bg-teal text-parchment pl-1 border-2 border-black rounded-lg" placeholder="email"/>

        {/* //todo: CREATE QUESTIONAIRE INVOLVING PKG RATES- 'SELECT YOUR DESIRED SECTIONS, PKG" */}

        <textarea className="pl-1 bg-teal border-2 border-black rounded-lg" placeholder="message"/>
        <button className="bg-carribean text-parchment hover:text-teal rounded border border-black w-1/4">Send</button>
      </form>
    </div>
  // </motion.div>
  )
}

export default ContactForm