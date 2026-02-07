import { Github, ExternalLink, Eye, Linkedin } from "lucide-react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="glass rounded-3xl p-6 border border-[#ad5d4e]/20 hover:border-[#ad5d4e]/40 transition-all hover:-translate-y-1">
      {/* Image with Hover Overlay */}
      <div className="relative group mb-4 rounded-xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full bg-[#ad5d4e] flex items-center justify-center hover:scale-110 transition-transform">
            <Eye className="w-6 h-6 text-white" />
          </div>
        </a>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

      {/* Description */}
      <p className="text-[#92969a] text-sm mb-4">{project.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-[#ad5d4e]/10 text-[#ad5d4e]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm hover:text-[#ad5d4e] transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}

        {project.linkedin && (
          <a
            href={project.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm hover:text-[#ad5d4e] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm hover:text-[#ad5d4e] transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};
