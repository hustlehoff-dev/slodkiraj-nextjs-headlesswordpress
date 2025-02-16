import AboutUs from "./components/aboutus/AboutUs";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import "./page.scss";
import { fetchSections } from "@/app/lib/queries";
import { fetchSlider } from "@/app/lib/queries";
import { fetchProjects } from "@/app/lib/queries";

export default async function Page() {
  const sections = await fetchSections();
  const sliderImages = await fetchSlider();
  const projects = await fetchProjects();
  console.log("Projects:", projects);

  return (
    <main>
      <Home sliderImages={sliderImages} />
      <AboutUs sections={sections} />
      <Projects projects={projects} />
    </main>
  );
}
