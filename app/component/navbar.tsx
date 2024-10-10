// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import logo from "@/app/public/InShot_20241006_182503912.png";
// import Link from "next/link";
// import "animate.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement | null>(null);
//   const [activeLink, setActiveLink] = useState(null);

//   const toggleMenu = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const closeMenu = (Link: any) => {
//     setActiveLink(Link);
//     setIsOpen(false);
//   };

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         () => closeMenu();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav>
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
//         <a href="#" className="flex items-center space-x-1 rtl:space-x-reverse">
//           <Image src={logo} alt="logo" width={70} height={30} />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Abdul Moiz
//           </span>
//         </a>

//         <span className="sr-only">
//           {isOpen ? "Close main menu" : "Open main menu"}
//         </span>
//         {isOpen ? (
//           <button
//             onClick={toggleMenu}
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           >
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 4l12 12M4 16L16 4"
//               />
//             </svg>
//           </button>
//         ) : (
//           <button
//             onClick={toggleMenu}
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           >
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         )}

//         <div
//           ref={menuRef}
//           className={`items-center justify-between ${
//             isOpen ? "flex" : "hidden"
//           } w-full md:flex md:w-auto`}
//           id="navbar-cta"
//         >
//           <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
//             <li className="flex items-center">
//               {activeLink && (
//                 <img
//                   className="animate__animated animate__bounce animate__bounceInLeft"
//                   width="34"
//                   height="34"
//                   src="https://img.icons8.com/glyph-neue/64/c778dd/long-arrow-right.png"
//                   alt="long-arrow-right"
//                 />
//               )}
//               <Link
//                 href={"/"}
//                 onClick={() => closeMenu(Link)}
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               {activeLink && (
//                 <img
//                   className="animate__animated animate__bounce animate__bounceInLeft"
//                   width="34"
//                   height="34"
//                   src="https://img.icons8.com/glyph-neue/64/c778dd/long-arrow-right.png"
//                   alt="long-arrow-right"
//                 />
//               )}
//               <Link
//                 href={"project"}
//                 onClick={() => closeMenu(Link)}
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white"
//               >
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href={"about"}
//                 onClick={closeMenu}
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white"
//               >
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href={"contacts"}
//                 onClick={closeMenu}
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white"
//               >
//                 Contacts
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import Sidenav from "./sidenav";
import LeftNav from "./leftnav";

function Navbar() {
  return (
    <>
        <Sidenav />

        <LeftNav />
        
    </>
  );
}

export default Navbar;
