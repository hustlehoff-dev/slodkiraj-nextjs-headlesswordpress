"use client";

import Link from "next/link";
import "./nav.scss";
import { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (isActive) {
      timer = setTimeout(() => {
        setIsActive(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isActive]);

  /*const navLogo = {
    slug: "/",
    alt: "Logo Słodki Raj Chojnice",
    img: "/images/slodkirajchojnice-logo-320p-light.png",
  };*/

  const instagramIcon = {
    name: "instagram",
    url: "https://www.instagram.com/slodki.raj.chojnice/",
    alt: "Obserwuj Słodki Raj – najlepsze wypieki w Chojnicach",
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="socials">
            <Link
              href={instagramIcon.url}
              target="_blank"
              aria-label={instagramIcon.alt}>
              <InstagramIcon />
            </Link>
          </div>
          <div className="logo"></div>
          <div
            className={isActive ? "active burgerMenu" : "burgerMenu"}
            onClick={toggleMenu}>
            <div className="menuLine"></div>
            <div className="menuLine"></div>
            <div className="menuLine"></div>
          </div>
        </nav>
      </header>
      <nav className={isActive ? "active mobileMenu" : "mobileMenu"}>
        <ul>
          <a href="#home">
            <li>Start</li>
          </a>
          <a href="#projects">
            <li>Wypieki</li>
          </a>
          <a href="#contact">
            <li>Kontakt</li>
          </a>
        </ul>
      </nav>
      {/*
          <nav
            className={isActive ? `${s.active} ${s.mobileMenu}` : s.mobileMenu}>
            <div className={s.mobileMenuContainer}>
              <div className={s.mobileSearch}>
                <form autoComplete="off" role="search">
                  <input
                    type="text"
                    placeholder=""
                    autoComplete="off"
                    id="search"
                  />
                  <label htmlFor="search">Search SlodkiRaj</label>
                </form>
              </div>
              <div className={s.mobileSocials}>
                <ul>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <InstagramIcon />
                  </li>
                </ul>
              </div>
              <div className={s.mobileLinks}>
                <ul>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                </ul>
              </div>
            </div>
          </nav>
        </nav>
      </div>*/}
    </>
  );
};

export default Navbar;
