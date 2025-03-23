import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";
import Projects from "./components/projects/Projects";
import "./page.scss";
import { getSections, getSlider, getCakes } from "@/app/lib/queries";

export const revalidate = 300; // IRS every 1min

export default async function Page() {
  const sections = await getSections();
  const images = await getSlider();
  const cakes = await getCakes();
  return (
    <main>
      <Home sliderImages={images} />
      <AboutUs sections={sections} />
      <Projects projects={cakes} />
    </main>
  );
}
