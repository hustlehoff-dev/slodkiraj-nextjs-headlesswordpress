"use client";
import { useEffect, useState } from "react";
import { Project } from "@/app/lib/types";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
interface Props {
  projects: Project[];
}

export default function ProjectsGallery({ projects }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-modal-trigger]");
      if (target) {
        const index = Number(target.getAttribute("data-project-index"));
        if (!isNaN(index)) setCurrentIndex(index);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (currentIndex === null) return null;

  const project = projects[currentIndex];

  return (
    <div className="modal" onClick={() => setCurrentIndex(null)}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <Image
          src={project.sourceUrl}
          alt={project.altText}
          width={800}
          height={800}
        />
        <button className="close" onClick={() => setCurrentIndex(null)}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
