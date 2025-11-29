import { Code2, Cloud, Brain, Cpu } from "lucide-react";
import { aboutMe, personalInfo } from "../data/portfolioData";
import { AnimatedSection, StaggeredContainer } from "./AnimatedSection";

const iconMap: Record<string, React.ReactNode> = {
  "Full Stack Development": <Code2 className="w-6 h-6" />,
  "Cloud Architecture": <Cloud className="w-6 h-6" />,
  "AI & Machine Learning": <Brain className="w-6 h-6" />,
  "System Design": <Cpu className="w-6 h-6" />,
};

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <AnimatedSection variant="fadeRight" delay={200}>
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {aboutMe.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-cyan-400">Location:</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-cyan-400">Timezone:</span>
                <span>{personalInfo.timezone}</span>
              </div>
            </div>

            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gray-800 text-cyan-400 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Download Resume
              </a>
            )}
          </AnimatedSection>

          {/* Highlights */}
          <StaggeredContainer
            className="grid grid-cols-2 gap-4"
            staggerDelay={100}
            variant="scaleUp"
          >
            {aboutMe.highlights.map((highlight) => (
              <div
                key={highlight}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-colors group"
              >
                <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  {iconMap[highlight] || <Code2 className="w-6 h-6" />}
                </div>
                <h3 className="text-white font-medium">{highlight}</h3>
              </div>
            ))}
          </StaggeredContainer>
        </div>
      </div>
    </section>
  );
}
