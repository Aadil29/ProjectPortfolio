// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
// Removed Marquee import as it's no longer needed

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Background blur effect, unchanged */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      {/* Top gradient line, unchanged */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section title, unchanged */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Changed section: Grid of skills */}
      <div className="w-full my-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {" "}
        {/* Added padding for better spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
          {" "}
          {/* Grid layout with responsive columns and gap */}
          {skillsData.map((skill, id) => {
            // Get the skill image and provide fallback
            const skillImageData = skillsImage(skill);
            const imageSrc = skillImageData?.src;

            return (
              <div
                className="w-full max-w-[150px] h-fit flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 p-4">
                  {" "}
                  {/* Added padding to the inner card */}
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 mt-4">
                    {" "}
                    {/* Adjusted margin-top for content */}
                    <div className="h-8 sm:h-10">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={skill}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      ) : (
                        // Fallback: Show a placeholder or skill initial
                        <div className="h-full w-10 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {skill.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-white text-sm sm:text-lg text-center">
                      {" "}
                      {/* Centered text */}
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
