"use client";

import React from "react";
import ContactForm from "../ContactForm";
import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <div id="contact" className="main_grid">
        {/* //*LEFT SIDE */}

        <section className="left-sq pt-[50px] border-r-2 border-black">
          <div className="2xl:p-5 lg:p-1 ml-5 text-onyx">
            {/* //todo make visible when site is ready */}
            {/* Want to know more about Laughing Coyote? Read my
            <Link href="/" className="ml-1">
              blog
            </Link> */}
            {/* //todo END */}

            <p className="md:text-2xl sm:text-lg">
              Has my portfolio piqued your interest? If so, you can contact me
              at
              <a
                className="underline pl-2"
                href="mailto:devdesignsbyelsa@gmail.com"
              >
                devdesignsbyelsa@gmail.com
              </a>
              , or simply fill out the form on the right. Looking forward to
              hearing from you!
            </p>
          </div>
        </section>

        {/* //*RIGHT SIDE */}
        <section className="p-5 right-sq mt-[50px] 2xl:mx-5 lg:mx-1">
          <h2 className="font-bold text-3xl text-onyx">Contact Form</h2>
          <ContactForm />
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
