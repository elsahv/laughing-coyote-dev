'use client'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Test: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    //todo: FIGURE OUT WHY .ENV ISNT WORKING v
    emailjs
      .send(
        "service_8nm4fjs",
        "template_ua2cv0e",
        templateParams,
        "axTnvligI9DLgch9A"
    //todo: FIGURE OUT WHY .ENV ISNT WORKING v
          //todo: FIGURE OUT WHY .ENV ISNT WORKING v

      
        )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <div>
    <div className="mx-auto max-w-[608px] bg-coral px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[2em] pb-8">
    <div className="text-center">
    <h3 className="font-bold text-2xl md:text-3xl">Get a free quote</h3>
    <div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
                <div className=" text-sm sm:text-sm">Looking forward to hearing from you!</div>
              </div>
              <div className="mx-auto w-full max-w-[400px]">
                <div className="mx-auto max-w-[400px] text-left mb-4">
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="mb-1 font-medium" htmlFor="name">Name:</label>
        <input className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium" htmlFor="email">Email:</label>
        <input className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-medium" htmlFor="message">Message:</label>
        <textarea className="bg-teal-200 border border-black"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <input type="submit" value="Get free quote" className="m-0 inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white"/>
    </form>
    </div>
              </div>
    </div>
    </div>
    </div>
  );
};

export default Test;