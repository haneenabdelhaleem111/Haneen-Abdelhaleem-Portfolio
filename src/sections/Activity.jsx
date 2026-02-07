import { Award, Presentation } from "lucide-react";

const activities = [
  {
    title: "Soft Skills Instructor",
    logo: "/activities/UCCD.webp",
    jobTitle: "",
    period: "2022 - Present",
    benefits: [
      "Delivered 25+ sessions and workshops for more than 250 students",
      "Taught soft skills and presentation techniques",
      "Improved public speaking, communication, and leadership skills",
    ],
    teams: [
      "UCCD",
      "IEEE ManSB",
      "IEEE Computer Society",
      "CAT Reloaded",
      "ICPC",
    ],
  },
  {
    title: "IEEE Mansoura Student Branch",
    logo: "/activities/IEEE.webp",
    jobTitle:
      "Ex-Vice chairperson - Former Media Sponsors team leader - Former Logistics volunteer",
    period: "2020 - 2024",
    benefits: [
      "Developed teamwork, project management and problem-solving skills",
      "Participated in various events and workshops",
      "Gained leadership and communication experience",
    ],
    teams: ["Tech Elixir", "Victoris 1", "Career Insider", "Victoris 2"],
  },
  {
    title: "IEEE Day Ambassador held at New Giza University",
    logo: "/activities/badge.webp",
    jobTitle: "IEEE Day Ambassador | Logistics & Cross-Functional Teams",
    period: "2023",
    benefits: [
      "Strengthened leadership, communication, and public engagement skills",
      "Collaborated with cross-functional teams to deliver successful IEEE Day activities",
      "Built a strong professional network within a global technical community",
      "Enhanced teamwork, problem-solving, and organizational skills",
    ],
    teams: [
      "Logistics Team",
      "Media & Promotion Team",
      "Event Management Team",
    ],
  },
  {
    title: "CAT Reloaded",
    logo: "/activities/CAT reloaded.webp",
    jobTitle: " Former Vice PR head - Former Logistics volunteer ",
    period: "2020 - 2024",
    benefits: [
      "Participated in organizing events and workshops",
      "Delivered several presentation and communication skills sessions for team members ",
      "Delivered mail writing sessions and linkedIn sessions",
      "Assisted in team management",
    ],
    teams: ["Hello World", "Scope", "CAT Booths"],
  },
];

export const Activity = () => {
  return (
    <section id="activity" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#ad5d4e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#ad5d4e]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#ad5d4e] text-sm font-medium tracking-wider uppercase">
            Volunteering & Activities
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#AD5D4E]">
            Beyond{" "}
            <span className="font-serif italic font-normal text-white">
              the academic journey
            </span>
          </h2>

          <p className="text-[#92969a]">
            Experiences that shaped my leadership, communication, and teamwork
            skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-12">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-8 border border-[#ad5d4e]/20 hover:border-[#ad5d4e]/40 hover:glow-border transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-[#ad5d4e]/10 flex items-center justify-center">
                    <img
                      src={activity.logo}
                      alt={activity.title}
                      className="w-14 h-14 object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {activity.title}
                      </h3>
                      <p className="text-[#92969a] font-semibold my-3">
                        {activity.jobTitle}
                      </p>
                    </div>
                    <span className="text-sm text-[#92969a]">
                      {activity.period}
                    </span>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 mb-4">
                    {activity.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-[#ad5d4e] mt-1" />
                        <p className="text-[#92969a]">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  {/* Teams */}
                  {activity.teams.length > 0 && (
                    <>
                      <div className="border-t border-[#ad5d4e]/20 my-4" />

                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="text-sm text-[#92969a]">
                          Participated in:
                        </span>

                        {activity.teams.map((team, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full bg-[#ad5d4e]/10 text-[#ad5d4e]"
                          >
                            {team}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
