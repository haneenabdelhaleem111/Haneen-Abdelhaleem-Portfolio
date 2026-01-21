import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
  Pin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Button from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "haneen.abdelhaleem11@gmail.com",
    href: "mailto:haneen.abdelhaleem11@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+201009756983",
    href: "https://wa.me/201009756983",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on linkedin",
    href: "https://www.linkedin.com/in/haneen-abdulhaleem20306/",
  },
];
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isloading, setIsloading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsloading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }
      console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsloading(false);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ad5d4e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#ad5d4e]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side — Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div>
              <span className="text-[#ad5d4e] text-sm font-medium tracking-wider uppercase animate-fade-in">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in  text-[#AD5D4E]">
                Let's build{" "}
                <span className="font-serif italic font-normal text-white">
                  something great.
                </span>
              </h2>
              <p className="text-[#92969a] animate-fade-in animation-delay-200">
                Have a project in mind? I'd love to hear about it. Send me a
                message and let's discuss how we can work together.
              </p>
            </div>
            <div>
              <div className="space-y-4 ">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group glass hover:glow-border hover:text-[#ad5d4e]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#ad5d4e]/10 flex items-center justify-center group-hover:bg-[#ad5d4e]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[#ad5d4e]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#92969a]">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <hr className="my-3 border-t border-[#ad5d4e]/30" />

              <p className="text-[#92969a]  my-2 me-4">
                Follow me on social media :{" "}
              </p>
              <div className="flex items-center gap-4  ">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/haneenabdelhaleem111",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/haneen-abdulhaleem20306/",
                  },
                  // { icon: Instagram, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-full glass hover:text-[#AD5D4E] transition-all duration-300"
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side — Contact Form */}
          <div className="glass p-8 rounded-3xl border border-[#ad5d4e]/30 animate-fade-in animation-delay-300 hover:glow-border hover:border-[#ad5d4e] transition-all">
            <div className=" ">
              <h1 className="font-semibold mb-3 text-3xl ">
                {" "}
                Send me a message
              </h1>
              <p className="mb-3 text-[#92969a]">
                Fill out the form below and I will get back to you soon!
              </p>
            </div>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 bg-[#1e2022] border border-[#3a3d40] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad5d4e] transition-all text-white placeholder-gray-40"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 bg-[#1e2022] border border-[#3a3d40] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad5d4e] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3 bg-[#1e2022] border border-[#3a3d40] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad5d4e] resize-none"
                />
              </div>

              <Button className="w-full" type="submit" disabled={isloading}>
                {isloading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
