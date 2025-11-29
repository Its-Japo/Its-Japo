import { techStack } from "../data/portfolioData";
import { AnimatedSection } from "./AnimatedSection";

// Using skillicons.dev for tech icons
const getSkillIconUrl = (icons: string[]) => {
  return `https://skillicons.dev/icons?i=${icons.join(",")}`;
};

export function TechStack() {
  const categories = Object.entries(techStack);

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          {categories.map(([key, category], index) => (
            <AnimatedSection
              key={key}
              variant="fadeUp"
              delay={index * 150}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative px-4 py-3 bg-gray-800 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-all hover:scale-105"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              {/* Skillicons image row */}
              <div className="mt-6">
                <img
                  src={getSkillIconUrl(category.skills.map((skill) => skill.icon))}
                  alt={`${category.title} icons`}
                  className="mx-auto"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
