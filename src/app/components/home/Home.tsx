"use client";
import "./home.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images = [
    {
      url: "/",
      heading: "Twój Tort, Twoje Marzenie",
    },
    {
      url: "/",
      heading: " Ciasta, Które Przywołują Wspomnienia",
    },
    {
      url: "/",
      heading: "Najwyższa Jakość, Na Każdą Okazję",
    },
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home">
      <div className="titleContainer">
        <div className="titleWrapper">
          <div className="sliderWrapper">
            <div className="slider">
              {images.map((url, index) => (
                <div
                  key={index}
                  className={`slide ${currentIndex === index ? "active" : ""}`}>
                  <Image
                    src={images[index].url}
                    alt={`Przykładowy tort wykonany dla klienta ${index + 1}`}
                    width={100}
                    height={100}
                  />
                  <h3 className="slideHeading">{images[index].heading}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
