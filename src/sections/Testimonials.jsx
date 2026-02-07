import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Team Member",
    role: "Neurofy Project",
    text: "Working with Haneen was smooth and productive. She communicates clearly, solves problems and takes initiative, and always delivers high-quality work.",
  },
  {
    name: "Yousif Sherif",
    role: "Owner of Elemshaty Pharmacy ",
    text: "Haneen delivered an excellent website for the pharmacy, communication was smooth, and the project was completed on time. Highly recommended.",
  },
  {
    name: "Omar Mowfak ",
    role: "Attendee at Presentation and Communication Workshop",
    text: "It was a good session and it really helped me to know how to express my thoughts confidentially, thanks haneen for such a great time.",
  },

  {
    name: "Creativa Program Coordinator",
    role: "Industry 4.0 Hackathon",
    text: "Haneen proved to be organized, proactive, and highly collaborative. Her contribution to both technical and presentation aspects was valuable.",
  },
  {
    name: "Yahya Alsayed",
    role: "Attendee at Presentation and Communication Workshop",
    text: "I had the chance to think about the information and analyze it not just a passive learning. I am so glad I got to know you . ",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32"
    >
      {/* Header */}
      <div className="container mx-auto text-center mb-12 md:mb-16">
        <span className="text-[#ad5d4e] text-xs sm:text-sm font-medium tracking-wider uppercase">
          Testimonials
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 md:mt-6 mb-5 md:mb-6 text-[#AD5D4E] leading-tight">
          What People Say{" "}
          <span className="font-serif italic font-normal text-white">
            About My Work
          </span>
        </h2>

        <p className="text-[#92969a] text-sm sm:text-base max-w-2xl mx-auto">
          Feedback from clients, mentors, teammates and attendees to my workshop
          during my academic and professional journey.
        </p>
      </div>

      {/* Slider */}
      <div className="container mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          className="pb-14"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="glass h-full p-5 sm:p-6 md:p-7 rounded-2xl shadow-lg flex flex-col justify-between text-left">
                <p className="text-[#92969a] text-sm sm:text-base leading-relaxed mb-6">
                  “{item.text}”
                </p>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#ad5d4e]">
                    {item.role}
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
