import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import { useState } from "react";
import { useRouter } from "next/router";
import MobileMenuItem from "./MobileMenuItem";

import { Pages } from "@/data/data";

export default function Menu() {
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

  const router = useRouter();
  const currentPage = router.asPath.substring(1);
  const currentPageset = Pages.filter(page => page.slug === currentPage);

  return (
    <div 
      style={{ zIndex: 2001 }} 
      className="
        sticky top-0 flex justify-between 
        bg-gray-100 dark:bg-gray-900 
        text-gray-900 dark:text-gray-100
      "
    >
      <div 
        onClick={toggleMenu} 
        className={`
          ${ opened ? "block" : "hidden" } 
          absolute top-0 left-0 z-0 h-[100vh] w-[100vw] 
          bg-gray-900/50
        `}
      ></div>

      <div className="flex">
        <div className="z-10 float-left lg:hidden border-b-2 border-gray-200 dark:border-gray-800">
          <div 
            onClick={toggleMenu} 
            className="
              p-3 z-10 cursor-pointer 
              bg-gray-100 dark:bg-gray-900 
            "
          >
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"></path>
            </svg>
          </div>

          <div 
            className={`
              ${ opened ? "block" : "hidden" } 
              absolute h-auto w-full sm:w-80
              bg-gray-100 dark:bg-gray-900
            `}
          >
            <div className="relative h-full w-full overflow-auto overscroll-contain">
              <div className="relative flex h-[80vh] flex-col">
                {menuItems.map((item, key) => (
                  <div key={key}>
                    {item?.subitems ? (
                      <MobileMenuItem 
                        ddItem={item} 
                        currentPageset={currentPageset[0]?.pageset} 
                        currentPage={currentPage} 
                        onShow={toggleMenu} 
                      />
                    ) : (
                      <div className="flex flex-col">
                        <Link 
                          href={`/${item.href}`} 
                          className={`${ item.href === currentPageset[0]?.pageset && "bg-gray-200 dark:bg-gray-700" } grow p-3`} 
                          onClick={toggleMenu}
                        >{item.title}</Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 border-r-2 border-gray-200 dark:border-gray-800"></div>

        <Link 
          href="/"
          className="
            py-2 px-3 
            hover:bg-gray-200 dark:hover:bg-gray-800 
            outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
            border-b-2 border-gray-200 dark:border-gray-800
          " 
        >
          <Image src={logo} alt="VO Group" width={30} height={30} />
        </Link>

        <div className="hidden lg:flex">
          <div className="my-3 border-r border-gray-200 dark:border-gray-800"></div>

          <div className="float-left flex">
            {menuItems.map((item, key) => (
              <div key={key} className="flex flex-col">
                {item?.subitems ? (
                  <div className="group">
                    <Link 
                      href={`/${item.href}`} 
                      className={`
                        ${ item.href === currentPageset[0]?.pageset && "bg-gray-200 dark:bg-gray-700" } 
                        flex cursor-pointer p-3 
                        hover:bg-gray-200 dark:hover:bg-gray-800 
                        outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                        border-b-2 border-gray-200 dark:border-gray-800
                      `}
                    >
                      {item.title}
                      <svg className="m-1" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
                      </svg>
                    </Link>
                    
                    <div 
                      className="
                        absolute z-10 hidden flex-col shadow group-hover:flex
                        bg-gray-100 dark:bg-gray-900
                      "
                    >
                      {item.subitems.map((subItem, subItemKey) => (
                        <Link
                          key={subItemKey} 
                          href={`/${subItem.href}`} 
                          className={`
                            ${ subItem.href === currentPage && "bg-gray-200 dark:bg-gray-700" } 
                            flex cursor-pointer p-3 
                            hover:bg-gray-200 dark:hover:bg-gray-800 
                            outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400
                          `}
                        >{subItem.title}</Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={`/${item.href}`} 
                    className={`
                      ${ item.href === currentPageset[0]?.pageset && "bg-gray-200 dark:bg-gray-700" } 
                      flex cursor-pointer p-3 
                      hover:bg-gray-200 dark:hover:bg-gray-800 
                      outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
                      border-b-2 border-gray-200 dark:border-gray-800
                    `}
                  >{item.title}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grow border-b-2 border-gray-200 dark:border-gray-800"></div>

      <div className="flex">
        <Link 
          href="/submit-gig" 
          className="
            text-gray-100 dark:text-gray-900 
            bg-green-600 hover:bg-green-500 dark:bg-yellow-400 p-[9px] dark:hover:bg-yellow-500 
            outline-none focus:ring-[1px] ring-inset ring-gray-100 dark:ring-gray-900
            border-[3px] border-green-600 hover:border-green-500 dark:border-yellow-400 hover:dark:border-yellow-500
          "
        >Submit GIG</Link>
      </div>
    </div>
  );
};
