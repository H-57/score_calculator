"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3BottomLeftIcon, XMarkIcon,HomeIcon,UserIcon,BookmarkIcon,ArrowDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import {motion} from 'framer-motion';

const Navbar = () => {

  const [activeItem, setActiveItem] = useState<string>("Home");
  const [nav, setNav] = useState<String>("");
  const [scrollY, setscrollY] = useState<number>(10);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      if (window.scrollY > scrollY) {
        setNav("hidden");
        // console.log("hide");
      } else {
        setNav("flex");
        // console.log("show");
      }
    } else {
      setNav("");
    }

    setscrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const links = [
    { name: "Home", url: "/" ,icon:<HomeIcon className="w-6 h-6" />},
    // { name: "", url: "/projects",icon:<BookmarkIcon className="w-6 h-6" /> },
    { name: "AboutUs", url: "/about",icon:<UserIcon className="w-6 h-6" /> },
  ];
  const [toggel, setToggel] = useState<boolean>(false);

  return (
    <>
      <nav
        className={` filter top-0  fixed z-20 flex justify-between   text-white w-screen transition-all ease-in-out duration-1000 transform ${nav} ${
          scrollY > 20 ? "bg-[#050816]" : "bg-[#050816]"
        }`}
      >
        <div className="px-5 xl:px-12 py-6  w-full block float-right ">
          <Link className="text-3xl font-bold font-heading " href="/">
            <Image
              className="w-[4rem] h-auto absolute whitespace-nowrap"
              height={400}
              width={40}
              src="/logo.png"
              alt="score calculator"
            />
          </Link>
          {/* Nav Links */}
          <ul
            className={`hidden float-right md:flex px-4 mx-auto font-semibold font-heading space-x-12 `}
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link
                onClick={()=>{setActiveItem(link.name)}}
                  className={`hover:text-violet-800 capitalize ${activeItem===link.name?"text-violet-800":""}`}
                  href={link.url}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          
          
            
          </ul>
          <div className=" block  float-right md:hidden">
            <Bars3BottomLeftIcon
              onClick={() => setToggel(!toggel)}
              className={`w-8 h-8 ${toggel ? "hidden" : "block"}`}
            />
           
          </div>
          <div  className={`  fixed z-10 top-0 left-0 bg-gradient-to-l from-black  to-gray-800 h-screen   cursor-pointer w-full   ${
              toggel ? "" : "hidden"
            }   `}>
          <XMarkIcon
              onClick={() => setToggel(!toggel)}
              className={`w-8 h-8 ${!toggel ? "hidden" : "block"} float-right m-10`}
            />
          <ul className="flex flex-col  justify-center h-[80vh] text-center" >
            {links.map((link,index) => (
              <motion.li
              initial={{opacity:0,x:200}}
  transition={{duration:0.5,delay:0.2*index}}
  whileInView={{opacity:1,x:0}}
                className={` flex gap-5  w-fit m-auto text-stone-50 ${(activeItem===link.name?"text-violet-700 ":"")}`}
                onClick={() => {setToggel(!toggel)
                  setActiveItem(link.name)
                }}
                key={link.name}
              >
                {link.icon}
                <Link
                  className={`hover:text-gray-200 hover:bg-slate-600 font-serif font-bold text-lg `}
                  href={link.url}
                >
                  {link.name}
                </Link>
              </motion.li>
           
           ))}
          </ul>
         
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;