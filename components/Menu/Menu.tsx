import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import { useState } from "react";
import { MobileMenuItem } from "./MobileMenuItem";
import { MenuItems } from "./MenuItems";

export const Menu = () => {
  const [opened, setOpened] = useState(false);
  const menuItems = MenuItems;

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <div className="sticky z-10 top-0 bg-white text-black flex justify-between border-b border-gray-200">
      <div onClick={toggleMenu} className={`${ opened ? "block" : "hidden" } absolute w-[100vw] h-[100vh] bg-black/50 top-0 left-0 z-0`}></div>

      <div className="flex">
        <div className="float-left z-10 xl:hidden">
          <div onClick={toggleMenu} className="cursor-pointer bg-white p-3 z-10">
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"></path>
            </svg>
          </div>

          <div className={`${ opened ? "block" : "hidden" } absolute bg-white w-full h-auto sm:w-80`}>
            <div className="relative overflow-auto overscroll-contain w-full h-full">
              <div className="relative flex flex-col h-[80vh]">
                {menuItems.map((item, key) => (
                  <div key={key}>
                    {item?.subitems ? (
                      <MobileMenuItem ddItem={item} />
                    ) : (
                      <div className="flex flex-col">
                        <Link href={item.href} className="grow p-3">
                          {item.title}
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 border-r border-gray-200"></div>

        <div className="py-2 px-3">
          <Image src={logo} alt="VO Group" width={30} height={30} />
        </div>

        <div className="hidden xl:flex">
          <div className="my-3 border-r border-gray-200"></div>

          <div className="flex float-left">
            {menuItems.map((item, key) => (
              <div key={key} className="flex flex-col">
                {item?.subitems ? (
                  <div className="group">
                    <Link href={item.href} className="hover:bg-gray-200 cursor-pointer flex p-3">
                      {item.title}
                      <svg className="m-1" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
                      </svg>
                    </Link>
                    <div className="absolute z-10 shadow bg-white group-hover:flex flex-col hidden">
                      {item.subitems.map((subItem, subItemKey) => (
                        <Link key={subItemKey} href={subItem.href} className="p-3 hover:bg-gray-200" >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className="p-3 hover:bg-gray-200">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex">
        <Link href="#" className="p-3 bg-yellow-300 hover:bg-yellow-400">
          Submit GIG
        </Link>
      </div>
    </div>
  );
};
