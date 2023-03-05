import Image, { StaticImageData } from "next/image";

type Props = {
  data: {
    body: string;
    location: string;
    position: string;
    image: StaticImageData;
  }[];
};

export default function Testimonials({ data }: Props) {
  return (
    <div 
      className="
        py-8 lg:pl-14 xl:pr-[108px]
        bg-gray-100 dark:bg-gray-900
        text-gray-900 dark:text-gray-100
      "
    >
      <div className="grid grid-cols-1 gap-y-16 gap-x-4 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="font-bold sm:col-span-2 lg:col-span-1">
          Testimonials
        </div>
        {testimonial(data[0])}
        {testimonial(data[1])}
        <div className="hidden xl:block"></div>
        <div className="hidden lg:block"></div>
        {testimonial(data[2])}
        {testimonial(data[3])}
      </div>
    </div>
  );
}

const testimonial = (item: {
  body: string;
  location: string;
  position: string;
  image: StaticImageData;
}) => (
  <div className="flex flex-col text-gray-600 dark:text-gray-400">
    <p className="mb-4 italic">{`"${item.body}"`}</p>
    <div className="grow"></div>
    <div className="flex">
      <Image
        src={item.image}
        alt={item.location}
        width={50}
        height={50}
        className="mr-4 rounded-full"
      />
      <div>
        <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{item.location}</div>
        <div className="text-gray-600 dark:text-gray-400">{item.position}</div>
      </div>
    </div>
  </div>
);
