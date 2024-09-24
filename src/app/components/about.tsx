
"use client";

import { motion } from "framer-motion";

function About() {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <div
      id="about"
      className="h-screen flex flex-col justify-center items-center space-y-10 text-center md:text-left max-w-7xl mx-auto p-5"
    >
      
      <motion.h3
        className="tracking-[20px] text-3xl text-purple-700 uppercase mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        About Me
      </motion.h3>

      
      
      <motion.div
        className="space-y-5 max-w-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
       
        <motion.p
          className="text-gray-400 text-lg md:text-xl leading-8 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        >
          Hi! I am <span className="text-blue-500 font-semibold">Zainab Khimji</span>, a passionate{" "}
          <span className="text-green-400">web developer</span> and{" "}
          <span className="text-pink-400">graphic designer</span>. My journey in the tech world is driven by a
          love for creating beautiful, functional websites that make an impact.
        </motion.p>

        
        <motion.p
          className="text-gray-400 text-lg md:text-xl leading-8 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        >
          I specialize in <span className="text-yellow-500">Frontend Development</span> using{" "}
          <span className="text-cyan-400">Next.js</span>, <span className="text-purple-400">TypeScript</span>, and{" "}
          <span className="text-red-400">Tailwind CSS</span>. I enjoy building efficient, responsive websites with
          beautiful UI and seamless user experience.
        </motion.p>

        
        <motion.p
          className="text-gray-400 text-lg md:text-xl leading-8 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
        >
          I love helping others optimize their websites and am dedicated to solving problems while continuously
          learning and growing as a developer.
        </motion.p>

       
        <motion.p
          className="text-gray-400 text-lg md:text-xl leading-8 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
        >
          My future goals include collaborating on exciting real-world projects and continuing to push the
          boundaries of web design and development.
        </motion.p>

        
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
        >
          <button onClick={scrollToContact}
    
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-transform duration-300 hover:scale-105"
          >
            Lets Connect
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;

