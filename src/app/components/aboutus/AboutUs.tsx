import "./aboutus.scss";
import { Section } from "@/app/lib/types";

interface AUProps {
  sections: Section[];
}

export default function AboutUs({ sections }: AUProps) {
  return (
    <section id="aboutUs">
      <div className="aboutWrapper">
        <div className="aboutContainer">
          {sections?.reverse().map((section) => (
            <section
              key={section.id}
              id={`${section.title}Container`}
              dangerouslySetInnerHTML={{ __html: section.content }}></section>
          ))}
        </div>
      </div>
    </section>
  );
}
