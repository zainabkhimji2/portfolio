
"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useRef, useState } from "react";

interface SkillsData {
  _id: string;
  imageUrl: string;
  progress: number;
  type: string;
}

function Skills() {
  const [skills, setSkills] = useState<SkillsData[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const query = `*[_type == "skills"]{
      _id,
      "imageUrl": image.asset->url,
      progress,
      type
    }`;

    const getSkills = async () => {
      const res = await client.fetch(query);
      setSkills(res);
    };

    getSkills();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} id="skills" className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-black">
      <h3 className="tracking-[20px] mx-auto text-center mb-12 uppercase text-purple-700 text-4xl font-bold">
        SKILLS
      </h3>

      {/* Skills Grid */}
      <div
        className={`md:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {skills.map((skill: SkillsData) => {
          return (
            <div
              key={skill._id}
              className="bg-gradient-to-b from-gray-800 to-gray-600 p-6 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Skill Image */}
              <div className="flex items-center justify-center mb-6">
                <img
                  src={skill.imageUrl}
                  alt={`${skill.type} logo`}
                  className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover transition-transform duration-500 hover:scale-110 shadow-lg"
                />
              </div>

              {/* Skill Info */}
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-2">{skill.type}</h3>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4 relative">
                  <div
                    style={{ width: `${skill.progress}%` }}
                    className="bg-green-500 h-3 rounded-full transition-all duration-700 ease-in-out"
                  ></div>
                </div>
                <p className="text-gray-400 text-sm">{skill.progress}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

