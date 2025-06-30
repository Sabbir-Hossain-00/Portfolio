import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Eventra",
      image: "/eventra.PNG",
      shortDesc:
        "An event management platform where users can organize, attend, and manage events seamlessly.",
      features: [
        "User-created events with categories",
        "Booking & payment via Stripe",
        "Admin controls for monitoring",
      ],
      technologies: ["React", "DaisyUI", "Node.js", "MongoDB"],
      github: "https://github.com/Sabbir-Hossain-00/Eventra",
      live: "https://eventra-00.web.app/",
      details: `Eventra allows users to browse, create, and manage events across different categories. Admins can verify events, manage users, and analyze attendance. It includes payment integration, authentication, and user dashboards. Built using modern React and Tailwind practices for clean UI/UX.`,
      future:
        "Add notification system, analytics dashboard, and mobile support.",
      errors:
        "Faced challenges integrating Stripe test mode and user role access control.",
      plan: "Future version will support event hosting via video and community chat.",
    },
    {
      id: 2,
      name: "HobMeet",
      image: "/hobmeet.PNG",
      shortDesc:
        "A social app where people can find and join hobby groups around shared interests.",
      features: [
        "Filter and sort groups",
        "Group joining & member management",
        "Admin approval for group creation",
      ],
      technologies: ["React", "Tailwind", "MongoDB", "Express"],
      github: "https://github.com/Sabbir-Hossain-00/HobMeet",
      live: "https://hobmeet-00.web.app/",
      details: `HobMeet connects users based on their hobbies. It features group creation, member roles, and admin controls. Users can apply to join groups, and group owners manage member requests.`,
      future:
        "Introduce group chat, events per group, and social sharing features.",
      errors: "MongoDB aggregation and sorting logic took time to refine.",
      plan: "Planning to turn this into a mobile-first PWA with notifications.",
    },
    {
      id: 3,
      name: "JobNest – Job Portal Platform",
      image: "/jobnest.PNG",
      shortDesc:
        "A modern job portal platform where users can search, apply for jobs",
      features: [
        "Role-based access for Job Seekers ",
        "Advanced job search and filter by category",
        "Secure job application system with dashboard ",
      ],
      technologies: [
        "React",
        "Tailwind",
        "Node.js",
        "MongoDB",
        "JWT",
        "Express",
      ],
      github: "https://github.com/Sabbir-Hossain-00/jobnest",
      live: "https://jobnest.surge.sh/",
      details: `JobNest is a full-stack MERN-based job portal platform. Users can register as job seekers or employers, post jobs, manage applications, and track status. Includes secure JWT auth, filtering, and dashboard.`,
      future:
        "Add resume upload, application tracking, and company profile system.",
      errors: "Faced issues with JWT refresh and deployment errors on Surge.",
      plan: "Planning SaaS features for HR teams and candidate rating system.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-semibold text-center mb-20">My Projects</h2>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-8 items-center`}
          >
            <div className="md:w-1/2 w-full">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>

            <div className="md:w-1/2 w-full space-y-4">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p>{project.shortDesc}</p>

              <div>
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-sm">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="badge badge-outline">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-3 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline hover:bg-green-500 hover:border-none btn-sm"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline hover:bg-green-500 hover:border-none btn-sm"
                >
                  <FaExternalLinkAlt className="mr-1" /> Live
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-sm bg-green-500 border-none text-black"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <dialog id="project_modal" className="modal modal-open">
          <div className="modal-box max-w-3xl p-6 overflow-y-auto max-h-[90vh] text-black">
            {/* Project Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded-lg w-full mb-6"
            />

            {/* Description */}
            <h3 className="text-2xl font-bold mb-2">{selectedProject.name}</h3>
            <p className="text-gray-700 mb-4">{selectedProject.details}</p>

            {/* Features */}
            <h4 className="font-semibold">🔑 Key Features</h4>
            <ul className="list-disc list-inside mb-4 text-sm">
              {selectedProject.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* Future Improvement */}
            <h4 className="font-semibold">🚀 Future Improvements</h4>
            <p className="mb-4 text-sm">{selectedProject.future}</p>

            {/* Errors Faced */}
            <h4 className="font-semibold">🐞 Challenges Faced</h4>
            <p className="mb-4 text-sm">{selectedProject.errors}</p>

            {/* Future Plan */}
            <h4 className="font-semibold">📈 Future Plans</h4>
            <p className="mb-6 text-sm">{selectedProject.plan}</p>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <FaGithub className="mr-1" /> GitHub
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <FaExternalLinkAlt className="mr-1" /> Live
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-sm bg-green-500 border-none"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};
