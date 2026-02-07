import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Achievements.css";

const achievements = [
  {
    title: "Graduation Project – Neurofy",
    competitionName:
      "1st place at Hack24 Organized by AUC and e& among 141 teams from 8 countries",
    description:
      "A mobile application designed to support epilepsy patients through monitoring, alerts, and medical awareness, Website for awareness and an e-commerce website for sale of our headband, Want to know more visit the website's link in the projects section",
    role: "Front-End Developer / Mobile Developer",
    tools: "React Native, UI/UX",
    image: "/achievements/hack.jpeg",
    date: "November, 2024",
  },
  {
    title: "Graduation Project – Neurofy",
    competitionName:
      "1st place at Industry 4.0 Hackathon, Organized by Creativa Mansoura Hub",
    description:
      "A mobile application designed to support epilepsy patients through monitoring, alerts, and medical awareness, Website for awareness and an e-commerce website for sale of our headband, Want to know more visit the website's link in the projects section",
    role: "Front-End Developer / Mobile Developer",
    tools: "React Native, UI/UX",
    image: "/achievements/Creativa.jpg",
    date: "December, 2024",
  },
  {
    title: "Graduation Project – Neurofy",
    competitionName: "Pre-incubation By Sanam Ventures",
    description:
      "A mobile application designed to support epilepsy patients through monitoring, alerts, and medical awareness, Website for awareness and an e-commerce website for sale of our headband, Want to know more visit the website's link in the projects section",
    role: "Front-End Developer / Mobile Developer",
    tools: "React Native, UI/UX",
    image: "/achievements/sanam.jpeg",
    date: "December, 2024",
  },
  {
    title: "Graduation Project – Neurofy",
    competitionName:
      "5th place at Dell Competition, competed with 259 teams from 20 countries",
    description:
      "A mobile application designed to support epilepsy patients through monitoring, alerts, and medical awareness, Website for awareness and an e-commerce website for sale of our headband, Want to know more visit the website's link in the projects section",
    role: "Front-End Developer / Mobile Developer",
    tools: "React Native, UI/UX",
    image: "/achievements/dell.jpeg",
    date: "August, 2025",
  },
  {
    title: "Agri-Core",
    competitionName: "Hult Prize at Mansoura University",
    description:
      "A project made for the agriculture, as a sensor to be put in the field to detect which crop is better to be planted, from the field's minerals that are available",
    role: "Team Member – Business developer",
    tools: "Problem Solving, Teamwork, Presentation",
    image: "/achievements/hult.jpg",
    date: "March, 2022",
  },
];

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="achievements-section py-20 md:py-28 lg:py-32 relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28"
    >
      {/* Title */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <span className="text-[#ad5d4e] text-xs sm:text-sm font-medium tracking-wider uppercase">
          Achievements & Milestones
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 mb-5 text-[#AD5D4E] leading-tight">
          Achievements{" "}
          <span className="font-serif italic font-normal text-white">
            that shine.
          </span>
        </h2>

        <p className="text-[#92969a] text-sm sm:text-base max-w-2xl mx-auto">
          Highlighting projects, competitions, and milestones in my journey.
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >
          {achievements.map((ach, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg flex flex-col lg:flex-row items-center lg:items-start gap-8 p-5 sm:p-7 md:p-10">
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={ach.image}
                    alt={ach.title}
                    className={`rounded-xl w-full object-cover ${ach.title.includes("Dell") ? "h-auto max-h-[500px]" : "h-64 md:h-80 lg:h-96"}`}
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-snug">
                    {ach.competitionName}{" "}
                    <span className="block sm:inline font-medium text-[#ad5d4e] font-serif italic">
                      {ach.date}
                    </span>
                  </h3>

                  <p className="text-[#ad5d4e] font-semibold text-sm sm:text-base">
                    {ach.title}
                  </p>

                  <p className="text-[#92969a] text-sm sm:text-base leading-relaxed">
                    {ach.description}
                  </p>

                  <p className="text-[#92969a] text-sm sm:text-base">
                    <span className="font-medium text-[#ad5d4e]">Role:</span>{" "}
                    {ach.role}
                  </p>

                  <p className="text-[#92969a] text-sm sm:text-base">
                    <span className="font-medium text-[#ad5d4e]">Tools:</span>{" "}
                    {ach.tools}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
