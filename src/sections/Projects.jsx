import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "/projects/Portfolio.webp",
    description:
      "Personal portfolio showcasing my projects, experience, and contact information.",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    category: "React",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.netlify.app/",
    linkedin:
      "https://www.linkedin.com/posts/haneen-abdulhaleem20306_frontenddeveloper-webdevelopment-react-activity-7420078841848647680-r60E?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdGDJ0B_4rcji6cVQtUoRDP0RBxG-GRtM0",
  },
  {
    id: 2,
    title: "Elemshaty Pharmacy Website",
    image: "/projects/Elemshaty.webp",
    description:
      "Freelance project for Elemshaty Pharmacy, a WordPress-based pharmacy website with product management and offers system.",
    technologies: ["WordPress", "WooCommerce", "Elementor"],
    category: "WordPress",
    github:
      "https://github.com/haneenabdelhaleem111/Elemshaty-Pharmacy-Documentation",
    live: "https://el-emshaty-pharmacy.com",
    linkedin:
      "https://www.linkedin.com/posts/haneen-abdulhaleem20306_freelance-wordpress-webdesign-activity-7384232759071899648-fnfV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdGDJ0B_4rcji6cVQtUoRDP0RBxG-GRtM0",
  },

  {
    id: 3,
    title: "Neurofy Website",
    image: "/projects/Neurofy.webp",
    description:
      "Neurofy, graduation project, a responsive website for an epilepsy monitoring application with modern UI and accessibility features.",
    technologies: ["React", "Tailwind CSS", "Netlify"],
    category: "React",
    github: "https://github.com/haneenabdelhaleem111/neurofy-website",
    live: "https://neurofy-website.netlify.app/",
    linkedin:
      "https://www.linkedin.com/posts/haneen-abdulhaleem20306_neurofy-graduationproject-reactjs-activity-7363275086847426560-AQBc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdGDJ0B_4rcji6cVQtUoRDP0RBxG-GRtM0",
  },
  {
    id: 4,
    title: "URL Shortening API Challenge",
    image: "/projects/URL-shortenner.webp",
    description:
      "A Frotend Mentor challenge that allows users to shorten long URLs using a RESTful API.",
    technologies: ["React.js", "Tailwind CSS", "APIs"],
    category: "Test Cases",
    github: "https://github.com/haneenabdelhaleem111/URL-Shortening",
    live: "https://shrortly.netlify.app/",
  },
  {
    id: 5,
    title: "El-Whatts Landing Page",
    image: "/projects/El-Whatts.webp",
    description:
      "Arabic responsive landing page for WhatsApp marketing service.",
    technologies: ["HTML5", "Bootstrap CSS", "JavaScript"],
    category: "Test Cases",
    github: "https://github.com/haneenabdelhaleem111/El-Whatts",
    live: "https://haneenabdelhaleem111.github.io/El-Whatts/",
  },
];

const filters = ["All", "React", "WordPress", "Test Cases"];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#ad5d4e] text-sm font-medium tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#AD5D4E]">
            Featured{" "}
            <span className="font-serif italic font-normal text-white">
              Projects
            </span>
          </h2>
          <p className="text-[#92969a]">
            A selection of projects I've worked on across frontend development
            and WordPress.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border transition-all text-sm font-medium
                ${
                  activeFilter === filter
                    ? "bg-[#ad5d4e] text-white border-[#ad5d4e]"
                    : "border-[#ad5d4e]/30 text-[#ad5d4e] hover:bg-[#ad5d4e]/10"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
