'use client'


import Image from "next/image";
import ContactImg from "../../public/coyote.png";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section className="h-screen flex 2xl:flex-row flex-col justify-center items-center bg-parchment">
      <ContactForm />
      <motion.div className="my-10 drop-shadow-lg p-5 flex md:justify-end justify-center">
        <Image
          src={ContactImg}
          alt=""
          className="md:w-3/4 w-full"
        />
      </motion.div>
    </section>
  );
};

export default Contact;
