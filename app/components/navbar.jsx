// @flow strict
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projectsData } from "@/utils/data/projects-data";

function Navbar() {
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fix Issue 2: Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  // Fix Issue 1: Updated scrollToProject function with better targeting
  const scrollToProject = (index) => {
    // Try multiple possible ID patterns for your project containers
    const possibleIds = [
      `sticky-card-${index + 1}`,
      `project-${index}`,
      `project-${index + 1}`,
      `card-${index}`,
      `card-${index + 1}`,
    ];

    let element = null;

    // Try to find the element with different ID patterns
    for (const id of possibleIds) {
      element = document.getElementById(id);
      if (element) break;
    }

    // If no element found with ID, try to find by data attribute or class
    if (!element) {
      element =
        document.querySelector(`[data-project-index="${index}"]`) ||
        document.querySelector(`[data-project-index="${index + 1}"]`) ||
        document.querySelectorAll(".project-card")[index] ||
        document.querySelectorAll('[class*="project"]')[index];
    }

    if (element) {
      // Add offset to account for fixed navbar
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    } else {
      // Fallback: scroll to projects section
      const projectsSection =
        document.getElementById("projects") ||
        document.querySelector('[id*="project"]') ||
        document.querySelector(".projects-section");

      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // IMPROVED: Define project categories based on your actual project structure
  const projectCategories = {
    "AI & Machine Learning": [1, 2, 3], // Audio Deepfake, MNIST, Smoking Detection
    "Full-Stack Development": [5, 12, 6, 4], // Netflix Clone (DevSecOps), EV Charging, Air Ticketing, Lancaster's Restaurant
    "Cybersecurity & Forensics": [14, 8, 9, 10, 11, 13, 15], // OWASP Juice Shop, Cyber Risk Analysis, Network Security, Digital Forensics, Incident Response, Security Audit
    "Game Development": [7], // Java 2D Platform Game
  };

  // IMPROVED: Function to get project category based on actual categorization
  const getProjectCategory = (projectId) => {
    for (const [categoryName, projectIds] of Object.entries(
      projectCategories
    )) {
      if (projectIds.includes(projectId)) {
        // Return shortened category names for better UI display
        switch (categoryName) {
          case "AI & Machine Learning":
            return "AI/ML";
          case "Full-Stack Development":
            return "Full-Stack";
          case "Cybersecurity & Forensics":
            return "Cybersecurity";
          case "Game Development":
            return "Game Dev";
          default:
            return categoryName;
        }
      }
    }
    return "Other"; // Fallback for uncategorized projects
  };

  // IMPROVED: Function to get category color with consistent styling
  const getCategoryColor = (category) => {
    switch (category) {
      case "AI/ML":
        return "text-blue-400";
      case "Full-Stack":
        return "text-green-400";
      case "Cybersecurity":
        return "text-red-400";
      case "Game Dev":
        return "text-purple-400";
      default:
        return "text-gray-400";
    }
  };

  // IMPROVED: Function to get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI/ML":
        return (
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        );
      case "Full-Stack":
        return (
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        );
      case "Cybersecurity":
        return (
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        );
      case "Game Dev":
        return (
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0v2a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2z"
            />
          </svg>
        );
    }
  };

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-5 px-4 md:px-0">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-2xl md:text-3xl font-bold"
          >
            Aadil Ghani
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-1 items-center">
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </Link>
          </li>

          {/* Enhanced Projects Navigation with Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsProjectsHovered(true)}
            onMouseLeave={() => setIsProjectsHovered(false)}
          >
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 flex items-center gap-1">
                PROJECTS
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${isProjectsHovered ? "rotate-180" : ""}`}
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
              </div>
            </Link>

            {/* Projects Dropdown */}
            <div
              className={`absolute top-full right-0 mt-2 w-80 max-w-[90vw] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] rounded-xl shadow-2xl transition-all duration-300 ${
                isProjectsHovered
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#16f2b3] rounded-full"></div>
                  <h3 className="text-[#16f2b3] text-sm font-semibold uppercase tracking-wide">
                    My Projects
                  </h3>
                </div>

                <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                  {projectsData.map((project, index) => {
                    const category = getProjectCategory(project.id);
                    const categoryColor = getCategoryColor(category);
                    const categoryIcon = getCategoryIcon(category);

                    return (
                      <button
                        key={index}
                        onClick={() => scrollToProject(index)}
                        className="w-full text-left p-3 rounded-lg bg-[#1a1443]/30 hover:bg-[#1a1443]/60 border border-transparent hover:border-violet-600/30 transition-all duration-200 group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white text-sm font-medium group-hover:text-[#16f2b3] transition-colors duration-200 truncate">
                              {project.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <div
                                className={`flex items-center gap-1 ${categoryColor}`}
                              >
                                {categoryIcon}
                                <span className="text-xs font-medium">
                                  {category}
                                </span>
                              </div>
                              {project.role && (
                                <>
                                  <span className="text-gray-500 text-xs">
                                    •
                                  </span>
                                  <span className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-200 truncate">
                                    {project.role}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover:text-[#16f2b3] transition-colors duration-200 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t border-gray-700/50">
                  <Link
                    href="/#projects"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-violet-600/20 to-pink-500/20 border border-violet-600/30 rounded-lg text-[#16f2b3] hover:border-violet-600/50 transition-all duration-200 text-sm font-medium"
                  >
                    View All Projects
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-gradient-to-br from-[#0d1224] to-[#0a0d37] z-[9999] transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex flex-col items-center justify-center min-h-full space-y-8 py-16 px-6">
            {/* Close Button */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-6 right-6 text-white hover:text-pink-600 transition-colors duration-300 z-[10000]"
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Menu Items */}
            <Link
              href="/#about"
              onClick={closeMobileMenu}
              className="text-2xl text-white hover:text-pink-600 transition-colors duration-300"
            >
              ABOUT
            </Link>
            <Link
              href="/#experience"
              onClick={closeMobileMenu}
              className="text-2xl text-white hover:text-pink-600 transition-colors duration-300"
            >
              EXPERIENCE
            </Link>
            <Link
              href="/#skills"
              onClick={closeMobileMenu}
              className="text-2xl text-white hover:text-pink-600 transition-colors duration-300"
            >
              SKILLS
            </Link>
            <Link
              href="/#projects"
              onClick={closeMobileMenu}
              className="text-2xl text-white hover:text-pink-600 transition-colors duration-300 mb-4"
            >
              PROJECTS
            </Link>

            {/* Mobile Projects List */}
            <div className="w-full max-w-sm">
              <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                {projectsData.slice(0, 20).map((project, index) => {
                  const category = getProjectCategory(project.id);
                  const categoryColor = getCategoryColor(category);
                  const categoryIcon = getCategoryIcon(category);

                  return (
                    <button
                      key={index}
                      onClick={() => scrollToProject(index)}
                      className="w-full text-center p-3 rounded-lg bg-[#1a1443]/30 hover:bg-[#1a1443]/60 border border-transparent hover:border-violet-600/30 transition-all duration-200"
                    >
                      <h4 className="text-white text-sm font-medium hover:text-[#16f2b3] transition-colors duration-200">
                        {project.name}
                      </h4>
                      <div className="flex items-center justify-center gap-2 mt-1">
                        <div
                          className={`flex items-center gap-1 ${categoryColor}`}
                        >
                          {categoryIcon}
                          <span className="text-xs font-medium">
                            {category}
                          </span>
                        </div>
                        {project.role && (
                          <>
                            <span className="text-gray-500 text-xs">•</span>
                            <span className="text-gray-400 text-xs truncate">
                              {project.role}
                            </span>
                          </>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(26, 20, 67, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
