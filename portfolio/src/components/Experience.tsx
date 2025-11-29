import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "../data/portfolioData";
import { AnimatedSection } from "./AnimatedSection";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              variant={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
              delay={index * 200}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-12 md:ml-0"
                  : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 ${
                  index % 2 === 0
                    ? "left-0 md:left-auto md:-right-2 transform md:translate-x-1/2"
                    : "left-0 md:-left-2 transform md:-translate-x-1/2"
                }`}
              />

              {/* Content */}
              <div className="ml-8 md:ml-0 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.position}
                    </h3>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                {exp.achievements.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
