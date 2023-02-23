import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import { useState } from "react";
import { MobileMenuItem } from "./MobileMenuItem";

import { Pages } from "@/data/data";

export const Menu = () => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  const pagesets = Pages.filter((page) => page.isPrimary);
  const menuItems = pagesets.map((item) => {
    const subpages = Pages.filter((page) => (page.pageset === item.pageset && !page.isPrimary));
    const subitems = subpages.map((page) => ({
      title: page.title,
      href: page.slug,
    }));
    
    if (subitems.length) {
      return {
        title: item.title,
        href: item.slug,
        subitems: subitems,
      }
    } else {
      return {
        title: item.title,
        href: item.slug,
      }
    }
  });

  return (
    <div style={{ zIndex: 2000 }} className="sticky top-0 flex justify-between bg-white text-black">
      <div onClick={toggleMenu} className={`${ opened ? "block" : "hidden" } absolute top-0 left-0 z-0 h-[100vh] w-[100vw] bg-black/50`}></div>

      <div className="flex">
        <div className="z-10 float-left lg:hidden">
          <div onClick={toggleMenu} className="z-10 cursor-pointer bg-white p-3">
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"></path>
            </svg>
          </div>

          <div className={`${ opened ? "block" : "hidden" } absolute h-auto w-full bg-white sm:w-80`}>
            <div className="relative h-full w-full overflow-auto overscroll-contain">
              <div className="relative flex h-[80vh] flex-col">
                {menuItems.map((item, key) => (
                  <div key={key}>
                    {item?.subitems ? (
                      <MobileMenuItem ddItem={item} onShow={toggleMenu} />
                    ) : (
                      <div className="flex flex-col">
                        <Link href={`/${item.href}`} className="grow p-3" onClick={toggleMenu}>{item.title}</Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 border-r border-gray-200"></div>

        <Link className="py-2 px-3 hover:bg-gray-200" href="/">
          <Image src={logo} alt="VO Group" width={30} height={30} />
        </Link>

        <div className="hidden lg:flex">
          <div className="my-3 border-r border-gray-200"></div>

          <div className="float-left flex">
            {menuItems.map((item, key) => (
              <div key={key} className="flex flex-col">
                {item?.subitems ? (
                  <div className="group">
                    <Link href={`/${item.href}`} className="flex cursor-pointer p-3 hover:bg-gray-200">
                      {item.title}
                      <svg className="m-1" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
                      </svg>
                    </Link>
                    <div className="absolute z-10 hidden flex-col bg-white shadow group-hover:flex">
                      {item.subitems.map((subItem, subItemKey) => (
                        <Link key={subItemKey} href={`/${subItem.href}`} className="p-3 hover:bg-gray-200">{subItem.title}</Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={`/${item.href}`} className="p-3 hover:bg-gray-200">{item.title}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex">
        <Link href="/submit-gig" className="bg-yellow-300 p-3 hover:bg-yellow-400">Submit GIG</Link>
      </div>
    </div>
  );
};
