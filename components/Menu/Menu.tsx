import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import { useState } from "react";
import { useRouter } from "next/router";
import MobileMenuItem from "./MobileMenuItem";
import useDarkMode from "@/hooks/useDarkMode";

import { Pages } from "@/data/data";

export default function Menu() {
  const [opened, setOpened] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

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
        border-b-2 border-gray-200 dark:border-gray-800
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
        <div className="z-10 float-left lg:hidden">
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

        <div className="my-3 border-r-2 lg:hidden border-gray-200 dark:border-gray-800"></div>

        <Link 
          href="/"
          className="
            py-2 px-3 
            hover:bg-gray-200 dark:hover:bg-gray-800 
            outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
          " 
        >
          <Image src={logo} alt="Distributed Sales Force" width={30} height={30} />
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
                        border border-green-600 dark:border-yellow-400
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
                    `}
                  >{item.title}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="flex">
        {colorTheme === "light" ? (
          <button 
            onClick={() => setTheme("light")} 
            className="
              cursor-pointer p-3 
              hover:bg-gray-200 dark:hover:bg-gray-800 
              outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
            "
          >
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
              <path d="M15 2H17V7H15z"></path><path d="M21.668 6.854H26.625999999999998V8.854H21.668z" transform="rotate(-45 24.147 7.853)"></path><path d="M25 15H30V17H25z"></path><path d="M23.147 21.668H25.147V26.625999999999998H23.147z" transform="rotate(-45 24.147 24.146)"></path><path d="M15 25H17V30H15z"></path><path d="M5.375 23.147H10.333V25.147H5.375z" transform="rotate(-45 7.853 24.146)"></path><path d="M2 15H7V17H2z"></path><path d="M6.854 5.375H8.854V10.333H6.854z" transform="rotate(-45 7.854 7.853)"></path><path d="M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"></path>
              <title>Light</title>
            </svg>
          </button>
        ) : (
          <button 
            onClick={() => setTheme("dark")} 
            className="
              cursor-pointer p-3 
              hover:bg-gray-200 dark:hover:bg-gray-800 
              outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400 
            "
          >
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
              <path d="M13.5025,5.4136A15.0755,15.0755,0,0,0,25.096,23.6082a11.1134,11.1134,0,0,1-7.9749,3.3893c-.1385,0-.2782.0051-.4178,0A11.0944,11.0944,0,0,1,13.5025,5.4136M14.98,3a1.0024,1.0024,0,0,0-.1746.0156A13.0959,13.0959,0,0,0,16.63,28.9973c.1641.006.3282,0,.4909,0a13.0724,13.0724,0,0,0,10.702-5.5556,1.0094,1.0094,0,0,0-.7833-1.5644A13.08,13.08,0,0,1,15.8892,4.38,1.0149,1.0149,0,0,0,14.98,3Z"></path>
              <title>Dark</title>
            </svg>
          </button>
        )}
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
