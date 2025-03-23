"use client";
import Link from "next/link";
import "./nav.scss";
import InstagramIcon from "@mui/icons-material/Instagram";

const Navbar = () => {
  /*const navLogo = {
    slug: "/",
    alt: "Logo Słodki Raj Chojnice",
    img: "/images/slodkirajchojnice-logo-320p-light.png",
  };*/

  const instagramIcon = {
    name: "instagram",
    url: "https://www.instagram.com/slodki.raj.chojnice/",
    alt: "Obserwuj Słodki Raj – najlepsze wypieki w Chojnicach",
    title: "Instagram Profile Link",
  };
  return (
    <>
      <header className="navbar">
        <div className="header-container">
          <div className="socials">
            <Link
              href={instagramIcon.url}
              target="_blank"
              aria-label={instagramIcon.alt}
              title={instagramIcon.title}>
              <InstagramIcon />
            </Link>
          </div>
          <div className="logo"></div>

          <nav className="mobile-menu">
            <ul>
              <li>
                <a href="#home">Start</a>
              </li>

              <li>
                <a href="#projects">Wypieki</a>
              </li>

              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
