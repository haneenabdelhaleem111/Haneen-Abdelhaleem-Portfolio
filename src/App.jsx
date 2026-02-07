import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";
import { Experience } from "@/sections/Experience";
import { Activity } from "@/sections/Activity";
import { Footer } from "@/layout/Footer";
import { Achievements } from "./sections/Achievements";
import { Testimonials } from "./sections/Testimonials";
import { Certifications } from "./sections/Certifications";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Activity />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
