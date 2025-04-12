import "./projects.scss";
import { Project } from "@/app/lib/types";
import ProjectsGallery from "./ProjectsGallery.client";
import Image from "next/image";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects">
      <div className="projectsWrapper">
        {/* modal */}
        <ProjectsGallery projects={projects} />

        <div className="projectContainer">
          {projects.map((project, index) => (
            <div className="tort" key={project.id}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SSR-friendly Image z osobnym klikaczem
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="project-img-wrapper"
      data-project-index={index}
      data-modal-trigger>
      <Image
        src={project.sourceUrl}
        alt={project.altText}
        fill
        className="project-img"
      />
    </div>
  );
}
