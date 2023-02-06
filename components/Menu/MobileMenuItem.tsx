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
        <Link href={ddItem.href} className="px-4 py-3 grow">
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
        } flex-col bg-white w-full pl-6`}
      >
        {ddItem?.subitems?.map((subItem, key) => (
          <Link key={key} href={subItem.href} className="px-4 py-3 bg-gray-100">
            {subItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
