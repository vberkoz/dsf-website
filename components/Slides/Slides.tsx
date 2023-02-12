import { useState } from "react";
import { Slide } from "./Slide";
import { SlideData } from "./SlideData";

export const Slides = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = SlideData;

  return (
    <ul>
      {slides.map((item, key) => {
        const isActive = activeIndex === key;
        const length = slides.length;
        return Slide({
          item,
          key,
          isActive,
          length,
          onShow(index: number) {
            setActiveIndex(index);
          },
        });
      })}
    </ul>
  );
};
