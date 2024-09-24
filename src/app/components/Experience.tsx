"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

interface ExperienceData {
  name: React.ReactNode | Iterable<React.ReactNode>;
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
}

function Experience() {
  const [experience, setExperience] = useState<ExperienceData[]>([]);

  useEffect(() => {
    const query = `*[_type == "experience"]{
      _id,
      name,
      'imageUrl': image.asset->url,
      title,
      description
    }`;

    const getExperience = async () => {
      const res = await client.fetch(query);
      setExperience(res);
    };
    getExperience();
  }, []);

  return (
    <>
      <div id="experience" className="pt-16 pb-20 bg-gradient-to-b from-gray-900 to-black min-h-screen">
        <h3 className="tracking-[20px] mx-auto text-center mb-12 uppercase text-purple-700 text-4xl font-bold">
          EXPERIENCE
        </h3>

        {/* Experience Cards Grid */}
        <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 mb-20">
          {experience.map((exp: ExperienceData) => {
            return (
              <div
                key={exp._id}
                className="bg-gradient-to-tl from-gray-800 to-gray-600 p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-t"
              >
                {/* Image */}
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={exp.imageUrl}
                    alt={`${exp.name} logo`}
                    className="rounded-full w-32 h-32 object-cover border-4 border-gray-500 hover:border-blue-500 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-2xl text-white font-bold tracking-wide">
                    {exp.name}
                  </h3>
                  <p className="text-xl text-gray-300 font-semibold">
                    {exp.title}
                  </p>
                  <p className="text-md text-gray-400">{exp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Experience;
