"use client";

import Link from "next/link";
import "./nav.scss";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const navLogo = {
    slug: "/",
    alt: "Logo Słodki Raj Chojnice",
    img: "/images/slodkirajchojnice-logo-320p-light.png",
    width: 400,
    height: 400,
  };
  const instagramIcon = {
    name: "instagram",
    url: "https://www.instagram.com/slodki.raj.chojnice/",
    alt: "Obserwuj Słodki Raj – najlepsze wypieki w Chojnicach",
  };
  return (
    <>
      <header>
        <nav>
          <div className="socials">
            <Link
              href={instagramIcon.url}
              target="_blank"
              aria-label={instagramIcon.alt}>
              <InstagramIcon />
            </Link>
          </div>
          <div className="logo">
            <Link href="/">
              <Image
                src={navLogo.slug}
                alt={navLogo.alt}
                width={navLogo.width}
                height={navLogo.height}
              />
            </Link>
          </div>
          <div
            className={isActive ? "active burgerMenu" : "burgerMenu"}
            onClick={toggleMenu}>
            <div className="menuLine"></div>
            <div className="menuLine"></div>
            <div className="menuLine"></div>
          </div>
        </nav>
      </header>
      {/*<div className={s.navWrapper}>
        <nav className={s.navbar}>
          <div className={s.logo}>
            <Link href="/">
              <Img
                src="https://slodkirajchojnice.pl/cms/wp-content/uploads/2025/02/slodkirajchojnice-logo-320p-light-1.png"
                alt="ComeInCrypto"
                className={s.logoImg}
              />
            </Link>
          </div>
          <h2 className={s.websiteName}>
            ComeIn<span>Crypto</span>
            <p>
              <sub>Follow Wise Money</sub>
            </p>
          </h2>
          <div
            className={
              isActive
                ? `${s.active} ${s.mobileMenuBurger}`
                : s.mobileMenuBurger
            }
            onClick={toggleMenu}>
            <div className={s.menuLine}></div>
            <div className={s.menuLine}></div>
            <div className={s.menuLine}></div>
          </div>
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
