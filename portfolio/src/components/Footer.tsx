import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              {personalInfo.name.split(" ")[0]}
              <span className="text-cyan-400">.</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {personalInfo.social.github && (
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {personalInfo.social.linkedin && (
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p className="flex items-center justify-center md:justify-end gap-1">
              Made with <Heart size={14} className="text-red-400" /> by{" "}
              {personalInfo.name}
            </p>
            <p className="mt-1">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
