"use client";
import "./projects.scss";
import { useState } from "react";

import { Project } from "@/app/lib/types";

interface Projects {
  projects: Project[];
}

export default function Projects({ projects }: Projects) {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const showImage = (url: string, index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeImage = () => {
    setShowModal(false);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prevIndex) =>
      prevIndex !== null
        ? prevIndex > 0
          ? prevIndex - 1
          : projects.length - 1
        : 0
    );
  };

  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prevIndex) =>
      prevIndex !== null
        ? prevIndex < projects.length - 1
          ? prevIndex + 1
          : 0
        : 0
    );
  };

  return (
    <section id="projects">
      <div className="projectsWrapper">
        <div className="projectContainer">
          {projects.map((project, index) => (
            <div className="tort" key={index}>
              <img
                src={project.sourceUrl}
                alt={project.altText}
                onClick={() => showImage(project.sourceUrl, index)}
              />
            </div>
          ))}
        </div>
      </div>

      {showModal && currentIndex !== null && (
        <div className="modal" onClick={closeImage}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={projects[currentIndex].sourceUrl}
              alt={projects[currentIndex].altText}
            />

            <button className="prev" onClick={prevImage}>
              ❮
            </button>
            <button className="next" onClick={nextImage}>
              ❯
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
