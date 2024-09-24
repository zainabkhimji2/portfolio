
"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

function Hero() {
  const animationData = require("../assets/projects.json");
  const [text] = useTypewriter({
    words: [
      "Hello, I am Zainab Khimji",
      " Full Stack Developer",
      " Frontend Developer",
      " Backend Developer",
      
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        lottie.destroy();
      };
    }
  }, []);
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-8 h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row md:space-x-8 md:items-center">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left mt-8 md:mt-20 animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-purple-500 animate-fade-in">
              {text}
              <Cursor />
            </h1>
            <p className="text-white text-lg md:text-2xl mt-3 mb-5 transition-transform duration-300 transform hover:scale-105">
              I AM A FRONTEND DEVELOPER WHO SHARES PROGRAMMING KNOWLEDGE
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button onClick={scrollToAbout} className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-110">
                LEARN MORE
              </button>
              <button onClick={scrollToContact} className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg shadow-lg hover:bg-gray-400 transition-transform duration-300 transform hover:scale-110">
                CONTACT ME
              </button>
            </div>
            <p className="text-blue-400 text-sm font-medium mt-3 animate-pulse">
              Coding | Learning | Lifestyle
            </p>
            <h2 className="text-slate-400 text-lg mt-3">
              2 years of experience | 5 projects completed
            </h2>
          </div>

          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <div className="lottie-container w-64 h-64 md:w-96 md:h-96" ref={container}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
