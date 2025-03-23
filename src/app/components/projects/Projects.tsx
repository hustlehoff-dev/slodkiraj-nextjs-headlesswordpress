import "./projects.scss";
import { Project } from "@/app/lib/types";
import Image from "next/image";

interface Projects {
  projects: Project[];
}

export default function Projects({ projects }: Projects) {
  return (
    <section id="projects">
      <div className="projectsWrapper">
        <div className="projectContainer">
          {projects.map((project, index) => (
            <div className="tort" key={index}>
              <Image src={project.sourceUrl} alt={project.altText} fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
