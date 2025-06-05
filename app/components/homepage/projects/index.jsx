import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  // Categorize projects by type
  const projectCategories = {
    "AI & Machine Learning": [1, 2, 3], // Audio Deepfake, MNIST, Smoking Detection
    "Full-Stack Development": [5, 12, 6, 4], // Netflix Clone (DevSecOps), EV Charging, Air Ticketing, Lancaster's Restaurant Booking System (ID 12)
    "Cybersecurity & Forensics": [14, 8, 9, 10, 11, 13], // OWASP Juice Shop Security Evaluation, Cyber Risk Analysis, Network Security, Digital Forensics, Incident Response, Security Audit
    "Game Development": [7], // Java 2D Platform Game
  };

  // Get projects by category
  const getProjectsByCategory = (projectIds) => {
    return projectIds
      .map((id) => projectsData.find((project) => project.id === id))
      .filter(Boolean);
  };

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10 z-10 bg-gradient-to-b from-[#0d1224] via-[#0d1224]/90 to-transparent pb-4">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24 space-y-16 lg:space-y-24">
        {Object.entries(projectCategories).map(
          ([categoryName, projectIds], categoryIndex) => {
            const categoryProjects = getProjectsByCategory(projectIds);

            if (categoryProjects.length === 0) return null;

            return (
              <div key={categoryIndex} className="relative">
                {/* Category Header */}
                <div className="mb-12 lg:mb-16">
                  <div className="flex items-center gap-4 mb-6">
                    {/* Category Icon based on type */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center">
                      {categoryName === "AI & Machine Learning" && (
                        <svg
                          className="w-6 h-6 text-white"
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
                      )}
                      {categoryName === "Full-Stack Development" && (
                        <svg
                          className="w-6 h-6 text-white"
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
                      )}
                      {categoryName === "Cybersecurity & Forensics" && (
                        <svg
                          className="w-6 h-6 text-white"
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
                      )}
                      {categoryName === "Game Development" && (
                        <svg
                          className="w-6 h-6 text-white"
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
                      )}
                    </div>

                    {/* Category Title */}
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                        {categoryName}
                      </h2>
                      <p className="text-gray-400 text-sm mt-1">
                        {categoryProjects.length} project
                        {categoryProjects.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  {/* Category Description */}
                  <div className="text-gray-300 text-sm lg:text-base max-w-3xl">
                    {categoryName === "AI & Machine Learning" && (
                      <p>
                        Intelligent systems leveraging deep learning, neural
                        networks, and data science techniques to solve complex
                        problems in audio processing, computer vision, and
                        predictive analytics.
                      </p>
                    )}
                    {categoryName === "Full-Stack Development" && (
                      <p>
                        End-to-end applications showcasing modern development
                        practices, cloud architecture, DevOps integration, and
                        comprehensive user experiences across web and mobile
                        platforms.
                      </p>
                    )}
                    {categoryName === "Cybersecurity & Forensics" && (
                      <p>
                        Security-focused projects involving threat analysis,
                        digital forensics, incident response, and vulnerability
                        assessment using industry-standard tools and
                        methodologies.
                      </p>
                    )}
                    {categoryName === "Game Development" && (
                      <p>
                        Interactive entertainment applications demonstrating
                        game mechanics, object-oriented design, and user
                        experience optimization in gaming environments.
                      </p>
                    )}
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="space-y-8 lg:space-y-12">
                  {categoryProjects.map((project, index) => (
                    <div
                      key={project.id}
                      id={`project-${project.id}`}
                      className="w-full mx-auto max-w-4xl group"
                    >
                      <div className="transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2">
                        <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_0_rgba(139,92,246,0.3)] transition-all duration-500">
                          <ProjectCard project={project} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section Divider (except for last section) */}
                {categoryIndex < Object.keys(projectCategories).length - 1 && (
                  <div className="flex items-center justify-center mt-16 lg:mt-24">
                    <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
