// "use client";

// import Image from "next/image";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const pathName = usePathname();

//   return (
//     <nav className="flex justify-between w-full items-center font-extralight px-12 py-12">
//       <Image src={"/Logo.png"} width={180} height={100} alt="Logo Company" />
//       <div className="flex gap-8">
//         <NavItem path="/" currentPath={pathName}>
//           Home
//         </NavItem>
//         <NavItem path="/about-us" currentPath={pathName}>
//           About Us
//         </NavItem>
//         <NavItem path="/our-work" currentPath={pathName}>
//           Our Work & Impact
//         </NavItem>
//         <NavItem path="/contact" currentPath={pathName}>
//           Contact Us
//         </NavItem>
//         <NavItem path="/career" currentPath={pathName}>
//           Career
//         </NavItem>
//       </div>
//     </nav>
//   );
// };

// interface navItemProps {
//   path: string;
//   currentPath: string;
//   children: JSX.Element | string;
// }

// const NavItem: React.FC<navItemProps> = ({ path, currentPath, children }) => {
//   return <p className={path === currentPath ? "underline" : ""}>{children}</p>;
// };

// export default Navbar;

"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex justify-between w-full items-center font-extralight px-12 py-12">
      <Link href={"/"}>
        <Image src={"/Logo.png"} width={180} height={100} alt="Logo Company" />
      </Link>

      {/* Hamburger menu icon */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            {showMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navbar items */}
      <div className={`lg:flex gap-8 ${showMenu ? "block" : "hidden"}`}>
        <Link href="/">
          <NavItem path="/" currentPath={pathName}>
            Home
          </NavItem>
        </Link>
        <Link href="/about-us">
          <NavItem path="/about-us" currentPath={pathName}>
            About Us
          </NavItem>
        </Link>
        <Link href="/our-work" className="cursor-pointer">
          <NavItem path="/our-work" currentPath={pathName}>
            Our Work & Impact
          </NavItem>
        </Link>
        <Link href="/contact-us">
          <NavItem path="/contact-us" currentPath={pathName}>
            Contact Us
          </NavItem>
        </Link>
        <Link href="/career">
          <NavItem path="/career" currentPath={pathName}>
            Career
          </NavItem>
        </Link>
      </div>
    </nav>
  );
};

interface navItemProps {
  path: string;
  currentPath: string;
  children: JSX.Element | string;
}

const NavItem: React.FC<navItemProps> = ({ path, currentPath, children }) => {
  return <p className={path === currentPath ? "underline" : ""}>{children}</p>;
};

export default Navbar;
