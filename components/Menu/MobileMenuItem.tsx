import Link from "next/link";
import { useState } from "react";

type Props = {
  ddItem: {
    title: string;
    href: string;
    subitems?: {
      title: string;
      href: string;
    }[];
  };
  currentPageset: string;
  currentPage: string;
  onShow: Function;
};

export const MobileMenuItem = ({ ddItem, currentPageset, currentPage, onShow }: Props) => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Link href={`/${ddItem.href}`} className={`${ ddItem.href === currentPageset && "bg-gray-200 dark:bg-gray-700" } grow px-4 py-3`} onClick={() => onShow()}>{ddItem.title}</Link>

        <div className={`${opened ? "bg-gray-100 dark:bg-gray-900" : ""} cursor-pointer p-2`} onClick={toggleMenu}>
          <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16" className="m-2">
            <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
          </svg>
        </div>
      </div>

      <div className={`${ opened ? "flex" : "hidden" } w-full flex-col bg-gray-100 dark:bg-gray-900 pl-6`}>
        {ddItem?.subitems?.map((subItem, key) => (
          <Link key={key} href={subItem.href} className={`${ subItem.href === currentPage && "bg-gray-200 dark:bg-gray-700" } bg-gray-100 dark:bg-gray-900 px-4 py-3`} onClick={() => onShow()}>{subItem.title}</Link>
        ))}
      </div>
    </div>
  );
};
