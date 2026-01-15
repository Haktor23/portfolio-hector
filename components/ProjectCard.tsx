
import React, { useState } from 'react';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();

  const isYouTubeVideo = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.includes('youtube.com')
      ? url.split('v=')[1]?.split('&')[0]
      : url.split('youtu.be/')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToImage = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(idx);
  };

  return (
    <div className="group relative grid md:grid-cols-2 gap-8 items-center">
      {/* Text Content */}
      <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} space-y-6`}>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2 py-1 rounded border border-accent/20 text-accent bg-accent/5">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-3xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-secondary leading-relaxed text-lg">
          {project.description[language]}
        </p>
      </div>

      {/* Carousel */}
      <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} relative rounded-2xl overflow-hidden aspect-video border border-white/5 group-hover:border-accent/20 transition-all shadow-2xl`}>

        {/* Images or Videos */}
        {project.images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${idx === currentImageIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
          >
            {isYouTubeVideo(img) ? (
              <iframe
                src={getYouTubeEmbedUrl(img)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  src={img}
                  alt={`${project.title} preview ${idx + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </>
            )}
          </div>
        ))}

        {/* Navigation Controls (Only if > 1 image) */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-accent text-white hover:text-black flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-accent text-white hover:text-black flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[10px] group-hover:translate-x-0"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => goToImage(idx, e)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-accent' : 'w-2 bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Color Overlay Effect on Hover Container */}
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
