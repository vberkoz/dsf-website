import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  title: string;
  href: string;
  subitems?: SubMenuItem[];
};

type SubMenuItem = {
  title: string;
  href: string;
};

type Props = {
  ddItem: MenuItem;
};

export const MobileMenuItem = ({ ddItem }: Props) => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Link href={ddItem.href} className="grow px-4 py-3">
          {ddItem.title}
        </Link>

        <div
          className={`${opened ? "bg-gray-100" : ""} cursor-pointer p-2`}
          onClick={toggleMenu}
        >
          <svg
            fill="currentColor"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="m-2"
          >
            <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
          </svg>
        </div>
      </div>

      <div
        className={`${
          opened ? "flex" : "hidden"
        } w-full flex-col bg-white pl-6`}
      >
        {ddItem?.subitems?.map((subItem, key) => (
          <Link key={key} href={subItem.href} className="bg-gray-100 px-4 py-3">
            {subItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
