import AboutUs from "./components/aboutus/AboutUs";

import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import "./page.scss";

export default function Page() {
  return (
    <main>
      <Home />
      <AboutUs />
      <Projects />
    </main>
  );
}
