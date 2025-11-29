import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download, FileText } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "./AnimatedSection";
import { certificates } from "../data/portfolioData";

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedCert(index);
  const closeLightbox = () => setSelectedCert(null);

  const goToPrevious = () => {
    if (selectedCert !== null) {
      setSelectedCert(
        selectedCert === 0 ? certificates.length - 1 : selectedCert - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedCert !== null) {
      setSelectedCert(
        selectedCert === certificates.length - 1 ? 0 : selectedCert + 1
      );
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedCert === null) return;
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  if (certificates.length === 0) {
    return null;
  }

  return (
    <section id="certificates" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-cyan-400">Certificates</span> & Credentials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </AnimatedSection>

        <StaggeredContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={100}
          variant="scaleUp"
        >
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/30 transition-all hover:transform hover:scale-[1.02]"
            >
              {/* Certificate Preview */}
              <div className="aspect-[4/3] bg-gray-900 relative overflow-hidden">
                {cert.thumbnail ? (
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : cert.file ? (
                  <iframe
                    src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="w-full h-full pointer-events-none"
                    title={`${cert.title} preview`}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cyan-900/40 to-purple-900/40">
                    <FileText className="w-12 h-12 text-cyan-400/70 mb-2" />
                    <span className="text-gray-300 text-xs uppercase tracking-wider">
                      PDF Certificate
                    </span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-cyan-500 text-white text-sm font-medium rounded-lg">
                    View Certificate
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-cyan-400 text-sm mb-1">{cert.issuer}</p>
                {cert.date && (
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                )}
              </div>
            </div>
          ))}
        </StaggeredContainer>

        {/* PDF Viewer Modal */}
        {selectedCert !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-gray-800/80 rounded-full z-20"
            >
              <X size={24} />
            </button>

            {/* Download button */}
            <a
              href={certificates[selectedCert].file}
              download
              onClick={(e) => e.stopPropagation()}
              className="absolute top-4 right-16 p-2 text-gray-400 hover:text-white bg-gray-800/80 rounded-full z-20"
              title="Download PDF"
            >
              <Download size={24} />
            </a>

            {/* Navigation buttons */}
            {certificates.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800/80 rounded-full text-white hover:bg-gray-700 transition-colors z-20"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800/80 rounded-full text-white hover:bg-gray-700 transition-colors z-20"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* PDF Viewer */}
            <div
              className="w-full h-full max-w-5xl max-h-[90vh] mx-4 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gray-900 p-4 rounded-t-xl">
                <h3 className="text-xl font-bold text-white">
                  {certificates[selectedCert].title}
                </h3>
                <p className="text-cyan-400 text-sm">
                  {certificates[selectedCert].issuer}
                  {certificates[selectedCert].date &&
                    ` • ${certificates[selectedCert].date}`}
                </p>
              </div>

              {/* PDF Embed */}
              <div className="flex-1 bg-gray-800 rounded-b-xl overflow-hidden">
                <iframe
                  src={`${certificates[selectedCert].file}#toolbar=0&navpanes=0`}
                  className="w-full h-full min-h-[70vh]"
                  title={certificates[selectedCert].title}
                />
              </div>

              {/* Pagination indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCert(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === selectedCert ? "bg-cyan-400" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
