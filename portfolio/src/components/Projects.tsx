import { useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, techStack, type Project } from "../data/portfolioData";
import { AnimatedSection, StaggeredContainer } from "./AnimatedSection";

// Build a map of technology names to their skillicons.dev icon keys
const techIconMap: Record<string, string> = {};
Object.values(techStack).forEach((category) => {
  category.skills.forEach((skill) => {
    techIconMap[skill.name.toLowerCase()] = skill.icon;
  });
});

const getSkillIconUrl = (icon: string) => {
  return `https://skillicons.dev/icons?i=${icon}`;
};

// Returns the full icon URL for a technology
const getTechIconUrl = (tech: string): string | null => {
  const lowerTech = tech.toLowerCase();

  // Use skillicons.dev for technologies in techStack
  const skillIcon = techIconMap[lowerTech];
  if (skillIcon) {
    return getSkillIconUrl(skillIcon);
  }

  return null;
};

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [imageError, setImageError] = useState(false);
  const showPlaceholder = !project.image || imageError;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/30 transition-all hover:transform hover:scale-[1.02]"
    >
      {/* Project Image */}
      <div className="aspect-video bg-gray-900 relative overflow-hidden">
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : null}
        {/* Placeholder overlay - only show when no image or image failed to load */}
        {showPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-900/30 to-purple-900/30">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-gray-800/80 flex items-center justify-center">
                <span className="text-3xl font-bold text-cyan-400">
                  {project.title[0]}
                </span>
              </div>
              <span className="text-gray-400 text-sm">Click to view details</span>
            </div>
          </div>
        )}
        {project.featured && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-cyan-500/90 text-white text-xs font-medium rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => {
            const iconUrl = getTechIconUrl(tech);
            return (
              <span
                key={tech}
                className="flex items-center gap-1.5 px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
              >
                {iconUrl && (
                  <img
                    src={iconUrl}
                    alt={tech}
                    className="w-4 h-4"
                  />
                )}
                {tech}
              </span>
            );
          })}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-gray-500 text-xs">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const allImages = [project.image, ...(project.images || [])].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  const currentImageFailed = imageErrors.has(currentImageIndex);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-gray-800/80 rounded-full z-10"
        >
          <X size={24} />
        </button>

        {/* Image Gallery */}
        <div className="relative aspect-video bg-gray-800">
          {allImages.length > 0 && !currentImageFailed ? (
            <>
              <img
                src={allImages[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                onError={() => handleImageError(currentImageIndex)}
              />
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-800"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-800"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {allImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full ${
                          idx === currentImageIndex
                            ? "bg-cyan-400"
                            : "bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-900/30 to-purple-900/30">
              <div className="w-24 h-24 rounded-2xl bg-gray-800/80 flex items-center justify-center">
                <span className="text-5xl font-bold text-cyan-400">
                  {project.title[0]}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h2>
              {project.featured && (
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                  Featured Project
                </span>
              )}
            </div>
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded-lg transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 text-gray-400 hover:text-white rounded-lg transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            )}
          </div>

          <p className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
            {project.longDescription}
          </p>

          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => {
                const iconUrl = getTechIconUrl(tech);
                return (
                  <span
                    key={tech}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg"
                  >
                    {iconUrl && (
                      <img
                        src={iconUrl}
                        alt={tech}
                        className="w-5 h-5"
                      />
                    )}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of projects I've worked on. They speak for themselves... just saying.
          </p>

        </AnimatedSection>

        <StaggeredContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={100}
          variant="scaleUp"
        >
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </StaggeredContainer>

        {projects.length > featuredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              {showAll ? "Show Featured Only" : `View All Projects (${projects.length})`}
            </button>
          </div>
        )}

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
