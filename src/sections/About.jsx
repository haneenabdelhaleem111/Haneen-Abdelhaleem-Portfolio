import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="text-[#AD5D4E] text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[#AD5D4E] ">
              Develpoing the future,{" "}
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-[#eef0f2] animate-fade-in animation-delay-200 ">
              <p>
                Hi,I’m{" "}
                <span className="text-[#ad5d4e] font-semibold">
                  {" "}
                  Haneen Abdelhaleem
                </span>
                , a Web Developer with a passion for creating modern and
                meaningful digital experiences. I graduated from the Faculty of
                Engineering, Communication and Computer Engineering with
                Excellent honors, and I’ve always been fascinated by how design
                and technology come together to build products people enjoy
                using.
              </p>
              <p>
                I specialize in frontend development, turning ideas and designs
                into responsive, user-friendly websites. I work with HTML, CSS,
                JavaScript, React.js, Tailwind CSS, Bootstrap, and WordPress,
                and I focus on writing clean, organized code while creating
                smooth, intuitive user experiences.
              </p>
              <p>
                I’m a fast learner with strong problem-solving and communication
                skills, and I enjoy taking on challenges that help me grow as a
                developer. I’m always exploring new technologies and best
                practices to create better, more efficient, and impactful web
                solutions.{" "}
              </p>
            </div>

            {/* <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-[#eef0f2]">
                “My mission is to create web experiences that are intuitive,
                user-friendly, and impactful. I aim to bring ideas to life
                through clean code and continuous learning, delivering solutions
                that make a difference for users and businesses alike.”
              </p>
            </div> */}
          </div>
          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#ad5d4e]/10 flex items-center justify-center mb-4 hover:bg-[#ad5d4e]/30 ">
                  <highlight.icon className="w-6 h-6 text-[#ad5d4e]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-[#92969a]">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
