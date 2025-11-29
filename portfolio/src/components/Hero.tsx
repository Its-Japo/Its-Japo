import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Avatar or Initials */}
        <div className="mb-8">
          {personalInfo.avatar ? (
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full mx-auto border-4 border-cyan-400/30 shadow-lg shadow-cyan-400/20"
            />
          ) : (
            <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-cyan-400/20">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-400 mb-4">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          {personalInfo.tagline}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
          <MapPin size={18} className="text-cyan-400" />
          <span>{personalInfo.location}</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {personalInfo.social.github && (
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          )}
          {personalInfo.social.linkedin && (
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          )}
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
          >
            Get in Touch
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#projects");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
