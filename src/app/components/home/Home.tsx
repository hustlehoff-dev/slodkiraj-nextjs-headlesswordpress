"use client";
import "./home.scss";
import { useEffect, useState } from "react";
import { SliderImage } from "@/app/lib/types";
import Image from "next/image";

interface SliderImages {
  sliderImages: SliderImage[];
}

export default function Home({ sliderImages }: SliderImages) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < sliderImages.length ? prevIndex + 1 : 0
      );
    };
    if (sliderImages.length === 0) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [sliderImages]);

  return (
    <section id="home">
      <div className="titleContainer">
        <div className="titleWrapper">
          <div className="slider-logo-wrapper">
            <figure className="slider-logo">
              <Image
                src="https://slodkirajchojnice.pl/cms/wp-content/uploads/2025/02/slodkirajchojnice-logo-320p-light-1.png"
                alt="Słodki Raj Chojnice - Logo najlepszego producenta tortów na świecie!"
                fill
              />
            </figure>
          </div>
          <div className="sliderWrapper">
            <div className="slider">
              {sliderImages?.map((sliderImage, index) => (
                <div
                  key={index}
                  className={`slide ${currentIndex === index ? "active" : ""}`}>
                  <Image
                    src={sliderImage.sourceUrl}
                    alt={sliderImage.altText}
                    fill
                  />
                  {/*<h3 className="slideHeading">{sliderImage.altText}</h3>*/}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
