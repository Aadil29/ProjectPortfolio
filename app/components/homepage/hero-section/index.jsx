// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-8 lg:py-16 min-h-screen">
      <Image
        src="./hero.svg"
        alt="Hero background"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center space-y-8">
            {/* Primary Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                <span className="block">Hi,</span>
                <span className="block">
                  I'm{" "}
                  <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                    {personalData.name}
                  </span>
                </span>
              </h1>

              <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 leading-relaxed">
                <span></span>
                <span className="text-[#16f2b3] bg-gradient-to-r from-[#16f2b3] to-emerald-400 bg-clip-text text-transparent font-semibold">
                  {personalData.designation}
                </span>
              </div>
            </div>

            {/* Concise About - Key Points */}
            <div className="space-y-4 max-w-2xl">
              {/* Brief Description */}
              <p className="text-gray-200 text-base md:text-lg leading-relaxed font-light">
                Focused on Cyber Security and Artificial Intelligence/Machine
                Learning
              </p>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-6"
              role="navigation"
              aria-label="Social media links"
            >
              <Link
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all text-blue-500 hover:text-blue-400 hover:scale-125 duration-300 p-2 rounded-full hover:bg-blue-500/10"
                aria-label="Visit GitHub profile"
              >
                <BsGithub
                  size={32}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all text-blue-500 hover:text-blue-400 hover:scale-125 duration-300 p-2 rounded-full hover:bg-blue-500/10"
                aria-label="Visit LinkedIn profile"
              >
                <BsLinkedin
                  size={32}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-block bg-gradient-to-r from-violet-600 to-blue-500 p-[2px] rounded-full hover:from-blue-500 hover:to-violet-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <button className="group px-6 md:px-10 py-4 md:py-5 bg-[#0d1224] rounded-full text-center text-sm md:text-base font-semibold uppercase tracking-wider text-white transition-all duration-300 ease-out flex items-center gap-2 hover:gap-4 hover:bg-gradient-to-r hover:from-[#0d1224]/90 hover:to-[#0d1224]/90">
                  <span>Contact me</span>
                  <RiContactsFill
                    size={18}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-[#16f2b3] rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500"></div>
              <div className="relative">
                <Image
                  src={personalData.profile}
                  width={400}
                  height={400}
                  alt={`${personalData.name} - ${personalData.designation}`}
                  className="rounded-full border-4 border-gradient-to-r from-blue-500 to-[#16f2b3] transition-all duration-500 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-[#16f2b3]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}

export default HeroSection;
