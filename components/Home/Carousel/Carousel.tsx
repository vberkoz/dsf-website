import nyc from "../../../public/home/nyc.webp";
import map from "../../../public/home/map.webp";
import road from "../../../public/home/road.webp";

import { Slide } from "./Slide";
import { useEffect, useRef } from "react";

export const Carousel = () => {
  const slideListRef = useRef(null);
  const indicatorListRef = useRef(null);
  let slideIndicator = 0;

  useEffect(() => {
    currentSlide(slideIndicator);
  }, []);

  const currentSlide = (index: number) => {
    slideIndicator = index;
    const slideList = slideListRef.current;
    const slides = slideList.querySelectorAll("li");

    const indicatorList = indicatorListRef.current;
    const indicators = indicatorList.querySelectorAll("span");

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      const indicator = indicators[i];
      if (i === index) {
        slide.style.display = "block";
        indicator.style.paddingTop = "10px";
      } else {
        slide.style.display = "none";
        indicator.style.paddingTop = "1px";
      }
    }
  };

  return (
    <div className="relative">
      <nav ref={indicatorListRef} className="absolute bottom-0 left-0 p-3">
        <span
          className="mr-1 bg-white px-3"
          onClick={() => currentSlide(0)}
        ></span>
        <span
          className="mr-1 bg-white px-3"
          onClick={() => currentSlide(1)}
        ></span>
        <span
          className="mr-1 bg-white px-3"
          onClick={() => currentSlide(2)}
        ></span>
      </nav>

      <ul ref={slideListRef}>
        <Slide
          image={nyc.src}
          title="The On-Demand Economy"
          description="VO Sales Group offers a full suite of Lead Generation Solutions, Sales Development, Digital Marketing and Channel Solutions."
          button="VO Solutions"
          href="#"
        />
        <Slide
          image={map.src}
          title="Sales Prospecting"
          description="VO Sales Group offers a unique sales approach to generate high quality opportunities for your organization."
          button="Learn More"
          href="#"
        />
        <Slide
          image={road.src}
          title="The Gig Economy"
          description="The On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives."
          button="Sales Prospecting"
          href="#"
        />
      </ul>
    </div>
  );
};
