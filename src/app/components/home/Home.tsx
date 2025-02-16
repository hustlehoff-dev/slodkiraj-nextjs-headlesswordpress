"use client";
import "./home.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SliderImage } from "@/app/lib/types";

interface SliderImages {
  sliderImages: SliderImage[];
}

export default function Home({ sliderImages }: SliderImages) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < sliderImages.length ? prevIndex + 1 : 0
    );
  };
  useEffect(() => {
    if (sliderImages.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [sliderImages]);

  return (
    <section id="home">
      <div className="titleContainer">
        <div className="titleWrapper">
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
                  <h3 className="slideHeading">{sliderImage.altText}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
