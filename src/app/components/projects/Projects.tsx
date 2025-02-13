"use client";
import "./projects.scss";
import { useState } from "react";
import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      name: "Project 1",
      url: "/",
    },
    {
      name: "Project 2",
      url: "/",
    },
    {
      name: "Project 3",
      url: "/",
    },
    {
      name: "Project 4",
      url: "/",
    },
    {
      name: "Project 5",
      url: "/",
    },
    {
      name: "Project 6",
      url: "/",
    },
  ];

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
            <div className="tort" key={project.name}>
              <Image
                src={project.url}
                alt={project.name}
                onClick={() => showImage(project.url, index)}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>

      {showModal && currentIndex !== null && (
        <div className="modal" onClick={closeImage}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <Image
              src={projects[currentIndex].url}
              alt={projects[currentIndex].name}
            />

            <button className="prev" onClick={prevImage}>
              ❮
            </button>
            <button className="next" onClick={nextImage}>
              ❯
            </button>

            <button onClick={closeImage} className="closeBtn">
              Zamknij
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
