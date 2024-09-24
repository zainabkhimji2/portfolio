
"use client";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm } from "@formspree/react";
import { useState } from "react";

function Contact() {
  const [state, handleSubmit] = useForm("mpwagoqv");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
    if (state.succeeded) {
      setIsSubmitted(true);
    }
  };

  return (
    <div id="contact" className="h-screen flex flex-col justify-evenly items-center text-center md:text-left max-w-7xl mx-auto p-5 space-y-8">
      <h3 className="tracking-[20px] uppercase text-purple-700 text-3xl mb-10 animate-fade-in">
        Contact
      </h3>
      
      
      <div className="flex flex-col space-y-5 items-center justify-center animate-slide-in">
        <div className="flex items-center space-x-5">
          <EnvelopeIcon className="h-8 w-8 text-blue-500 animate-pulse" />
          <p className="text-lg md:text-xl text-white">10b5286zainabkhimji@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5">
          <MapPinIcon className="h-8 w-8 text-blue-500 animate-pulse" />
          <p className="text-lg md:text-xl text-white">Karachi Sindh Pakistan</p>
        </div>
      </div>

   
      {isSubmitted ? (
        <p className="text-xl text-green-400">Thanks for contacting me! Ill reply soon.</p>
      ) : (
        <form 
          onSubmit={handleFormSubmit} 
          className="flex flex-col space-y-4 w-full max-w-lg mx-auto animate-fade-in"
          action="https://formspree.io/f/mpwagoqv" 
          method="POST"
        >
         
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Your Name"
              type="text"
              className="outline-none bg-gray-800/50 rounded-lg px-6 py-3 text-white placeholder-gray-400 transition-transform duration-300 hover:scale-105"
              required
            />
          </div>

      
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Your Email"
              type="email"
              className="outline-none bg-gray-800/50 rounded-lg px-6 py-3 text-white placeholder-gray-400 transition-transform duration-300 hover:scale-105"
              required
            />
          </div>

        
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-white">Subject</label>
            <input
              id="subject"
              name="subject"
              placeholder="Subject"
              type="text"
              className="outline-none bg-gray-800/50 rounded-lg px-6 py-3 text-white placeholder-gray-400 transition-transform duration-300 hover:scale-105"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-white">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="outline-none bg-gray-800/50 rounded-lg px-6 py-3 text-white placeholder-gray-400 h-32 transition-transform duration-300 hover:scale-105"
              required
            ></textarea>
          </div>

         
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-600 disabled:opacity-50"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;

