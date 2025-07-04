"use client";

import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Play,
  Pause,
} from "lucide-react";
import MediaViewer from "./MediaViewer";
import { projectImages } from "./constants"; // Import projectImages

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [showAllTech, setShowAllTech] = React.useState(false);

  // Filter images for the current project
  const images = projectImages[project.id] || [];
  const hasImages = images.length > 0;

  return (
    <>
      <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37] w-full overflow-hidden">
        {/* Header with decorative elements */}
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-400 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        {/* Title Bar */}
        <div className="px-4 lg:px-8 py-3 lg:py-4 relative bg-[#0a0d37]/50">
          <h3 className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl font-semibold break-words">
            {project.name}
          </h3>
        </div>

        {/* Main Content */}
        <div className="border-t-[2px] border-indigo-900 p-6 lg:p-8 space-y-6">
          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Role & Key Info */}
            <div className="space-y-4">
              <div className="bg-[#1a1443]/50 rounded-lg p-4 border border-pink-500/20">
                <h4 className="text-pink-500 font-semibold text-sm uppercase tracking-wide mb-2">
                  My Role
                </h4>
                <p className="text-white text-lg font-medium">{project.role}</p>
              </div>

              {/* Tech Stack - Now shows all technologies */}
              <div className="bg-[#1a1443]/50 rounded-lg p-4 border border-[#16f2b3]/20">
                <h4 className="text-[#16f2b3] font-semibold text-sm uppercase tracking-wide mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools
                    .slice(0, showAllTech ? project.tools.length : 6)
                    .map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-violet-600/20 to-pink-500/20 border border-violet-600/30 rounded-full text-amber-300 text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                </div>
                {project.tools.length > 6 && (
                  <button
                    onClick={() => setShowAllTech(!showAllTech)}
                    className="mt-3 text-[#16f2b3] hover:text-pink-500 text-xs font-medium transition-colors duration-200 flex items-center gap-1"
                  >
                    {showAllTech
                      ? "Show Less"
                      : `Show All ${project.tools.length} Technologies`}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${
                        showAllTech ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Right Column - Project Media Gallery handled by MediaViewer */}
            <MediaViewer images={images} hasImages={hasImages} />
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-[#16f2b3] rounded-full"></div>
              Project Description
            </h4>

            <div className="relative">
              <p
                className={`text-gray-300 text-sm lg:text-base leading-relaxed transition-all duration-300 ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                {project.description}
              </p>

              {project.description.length > 200 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 text-[#16f2b3] hover:text-pink-500 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
