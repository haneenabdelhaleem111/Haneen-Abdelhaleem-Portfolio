import AnimatedBorderButton from "../components/AnimatedBorderButton";
import Button from "../components/Button";
import {
  ArrowRight,
  Download,
  ChevronDown,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const skills = [
  "WordPress",
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML & CSS",
  "UI/UX Design",
  "Responsive Design",
  "SEO",
  "Performance Optimization",
  "Git & GitHub",
  "Vite",
];
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/*dots floating */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#AD5D4E",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                20 + Math.random() * 30
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/*Content*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text */}
          {/*space-y-8: make the vertical spacings 8*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#AD5D4E]">
                <span className="w-2 h-2 bg-[#AD5D4E] rounded-full animate-pulse" />{" "}
                Software Engineer - Frontend Developer
              </span>
            </div>
            {/* Headline*/}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leadin-tight animate-fade-in animation-delay-100">
                Creating{" "}
                <span className="text-[#AD5D4E] glow-text">digital</span> <br />
                experiences with <br />
                <span className="font-serif italic font-normal text-white">
                  impact.
                </span>{" "}
              </h1>
              <p className="text-lg text-[#92969a] max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Haneen, a Front-End Developer passionate about creating
                modern, user-friendly web experiences. I've built projects from
                full websites to WordPress platforms with dynamic features,
                always focusing on clean code and intuitive design.
              </p>
            </div>
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
          </div>
          {/*Right column - image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/*Profile Image*/}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ad5d4e]/30 via-transparent to-[#ad5d4e]/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded 3xl p-2 glow-border">
                <img
                  src="/profile.jpeg"
                  alt="Haneen Abdelhaleem "
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/*floating badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float ">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/*Stats badge*/}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 ">
                  <div className="text-2xl font-bold text-[#939F5C]">+300</div>
                  <div className="text-xs text-[#92969a]"> Coding Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Skills*/}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-[#92969a] mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee ">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4 ">
                  <span className="text-xl font-semibold text-[#92969a]/50 hover:text-[#92969a] transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[#92969a] hover:text-[#AD5D4E] transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
