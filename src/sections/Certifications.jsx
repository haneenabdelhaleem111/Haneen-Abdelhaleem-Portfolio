import { useState } from "react";
import { CertificationCard } from "../components/CertificationCard";

const certifications = [
  {
    name: "Internship Fullstack Development",
    organization: "Azm Squad",
    date: "October 2025",
    info: "Completed and attended a 3-month internship as a Fullstack Developer, gaining practical experience in building full-stack applications using .NET and React.js.",
    category: "Internship",
    image: "/certificates/azm.webp",
  },
  {
    name: "UX Design Fundamentals",
    organization: "Mahara-Tech",
    date: "September 2024",
    info: "Learned design principles and usability testing.",
    category: "Course",
    image: "/certificates/Ux.webp",
  },
  {
    name: "ITIDA Gigs",
    organization: "ITIDA",
    date: "July 2025",
    info: "A 3-months freelance training program in ITIDA, had the required skills to be a freelancer",
    category: "Internship",
    image: "/certificates/itida.webp",
  },
  {
    name: "Agile Explorer IBM",
    organization: "IBM",
    date: "November 2024",
    info: "Got the experience of Agile Methodologies and Scrum Master.",
    category: "Course",
    image: "/certificates/ibm.webp",
  },
  {
    name: "Database Fundamentals",
    organization: "Mahara-Tech",
    date: "February 2024",
    info: "Learned database design and management.",
    category: "Course",
    image: "/certificates/database.webp",
  },
  {
    name: "Product Management",
    organization: "SprintUp",
    date: "June 2025",
    info: "Learned product management and agile methodologies.",
    category: "Course",
    image: "/certificates/sprints.webp",
  },
  {
    name: "Internship Frontend Development",
    organization: "El-Mawkaa",
    date: "March 2023",
    info: "Completed and attended a 3-month internship as a Frontend Developer, gaining practical experience in building responsive landing pages and improving UI components with modern web technologies.",
    category: "Internship",
    image: "/certificates/el-mawkaa.webp",
  },
  {
    name: "Frontend Development Challenger track",
    organization: "Egfwd",
    date: "March 2022",
    info: "Completed the challenger trackpowered by itida and udacity",
    category: "Course",
    image: "/certificates/egfwd.webp",
  },
  {
    name: "Certificate of Recognition in Dell Competition 5th place",
    organization: "Dell",
    date: "August 2025",
    info: "Certificate of recognition for 5th place in Dell Competition for the graduation project, Neurofy",
    category: "Competition",
    image: "/certificates/dell.webp",
  },
  {
    name: "Certificate of Appreciation in Ai & IoT Competition",
    organization: "Egypt IoT & AI Hackathon",
    date: "May 2025",
    info: "Certificate of appreciation for the graduation project, Neurofy",
    category: "Competition",
    image: "/certificates/ai&iot.webp",
  },
];

export const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const categories = ["All", "Courses", "Internships", "Competitions"];

  const filteredCertifications = certifications.filter((cert) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Courses") return cert.category === "Course";
    if (activeCategory === "Internships") return cert.category === "Internship";
    if (activeCategory === "Competitions")
      return cert.category === "Competition";
    return true;
  });

  const displayedCertifications = showMore
    ? filteredCertifications
    : filteredCertifications.slice(0, 3);

  return (
    <section
      id="certifications"
      className="py-20 md:py-28 px-4 sm:px-8 lg:px-20 xl:px-28"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[#ad5d4e] text-sm font-medium tracking-wider uppercase">
          Certifications
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#AD5D4E]">
          My Professional{" "}
          <span className="font-serif italic font-normal text-white">
            Certifications
          </span>
        </h2>

        <p className="text-[#92969a] text-sm sm:text-base">
          A collection of certificates that I have earned through my journey,
          including internships, competitions, and online courses.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setShowMore(false);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all border
              ${
                activeCategory === cat
                  ? "bg-[#ad5d4e] text-white border-[#ad5d4e]"
                  : "bg-transparent text-[#92969a] border-white/10 hover:border-[#ad5d4e]/40 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCertifications.map((cert, i) => (
          <CertificationCard key={i} cert={cert} />
        ))}
      </div>

      {/* See More Button */}
      {filteredCertifications.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3 rounded-full bg-[#ad5d4e] text-white font-medium hover:opacity-90 transition-all"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};
