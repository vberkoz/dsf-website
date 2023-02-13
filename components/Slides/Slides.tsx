import { useState } from "react";
import { Slide } from "./Slide";

type Props = {
  data: {
    image: string;
    title: string;
    description: string;
    button: string;
    href: string;
  }[];
};

export const Slides = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = data;

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
