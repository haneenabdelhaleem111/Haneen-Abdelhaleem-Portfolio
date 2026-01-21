const experiences = [
  {
    period: "July, 2025 - October, 2025",
    role: "Full Stack Developer Intern",
    company: "Azm Squad Company",
    description:
      "Completed a Full Stack Developer internship at Azm Squad, focusing on learning and applying full stack web development concepts through hands-on training and technical assessments.",
    list: [
      "Learned and practiced building full stack web applications using .NET and React.js.",
      "Worked with RESTful APIs and practiced integrating them with front-end interfaces.",
      "Designed and interacted with databases to manage application data.",
      "Passed three technical assessments during the internship.",
      "Applied best practices in writing clean and maintainable code.",
    ],
    technologies: ["React.js", ".Net", "SQL", "Tailwind CSS", "Git"],
    logo: "/logos/azm-squad-logo.png",
  },
  {
    period: "January, 2023 - March, 2023",
    role: "Frontend Developer Intern",
    company: "Al-Mawakaa Company",
    description:
      "Completed a Frontend Developer internship at Al-Mawakaa Company, focusing on building responsive landing pages and improving UI components with modern web technologies.",
    list: [
      "Developed and maintained responsive landing pages using HTML, CSS, JavaScript, and Bootstrap.",
      "Enhanced UI components for better user experience.",
      "Collaborated with team members to implement design requirements.",
      "Optimized pages for cross-browser compatibility and mobile responsiveness.",
      "Learned basic React.js integration for interactive components.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
    logo: "/logos/elmawkaa-logo.png",
    size: "w-auto h-16",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background circle */}
      <div className="absolute top-3/2 left-1/2 w-96 h-96 bg-[#ad5d4e]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 mx-auto">
          <span className="text-[#ad5d4e] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in animation-delay-100 text-[#AD5D4E]">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              makes an impact.
            </span>
          </h2>
          <p className="text-[#92969a] animate-fade-in animation-delay-200">
            A journey of growth, learning, and impactful contributions in the
            tech industry.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 flex flex-col gap-8 w-full lg:w-[80%] mx-auto ">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass border-none p-6 rounded-xl shadow-lg flex flex-col lg:flex-row items-start gap-6 text-left hover:glow-border hover:scale-[1.01] transition-all "
            >
              {/* Logo */}
              <img
                src={exp.logo}
                alt={exp.company}
                className={`w-auto h-24 object-contain flex-shrink-0 ${
                  exp.size || ""
                }`}
              />

              {/* Title / Role / Period */}
              <div className="flex flex-col space-y-1 flex-shrink-0">
                <h2 className="text-2xl font-semibold">{exp.company}</h2>
                <h3 className="text-xl font-semibold text-[#ad5d4e]">
                  {exp.role}
                </h3>
                <p className="text-sm text-[#92969a]">{exp.period}</p>
              </div>

              {/* Description + List + Tech */}
              <div className="flex-1 flex flex-col gap-2">
                <p className="leading-relaxed text-[#92969a]">
                  {exp.description}
                </p>

                {exp.list && (
                  <ul className="list-disc list-inside marker:text-[#ad5d4e] ml-5 text-sm text-[#92969a] flex flex-col gap-1 mt-1">
                    {exp.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#ad5d4e]/30 text-[#eef0f2] px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
