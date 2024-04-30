"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex">
      <Link
        className={`mx-4 hover:text-red-600 ${
          pathname === "/experience" ? "font-bold" : ""
        }  `}
        href={"/experience"}
      >
        Experience
      </Link>
      <Link
        className={`mx-4 hover:text-red-600 ${
          pathname === "/projects" ? "font-bold" : ""
        }  `}
        href={"/projects"}
      >
        Projects
      </Link>
      <Link
        className={`mx-4 hover:text-red-600 ${
          pathname === "/skills" ? "font-bold" : ""
        }  `}
        href={"/skills"}
      >
        Skills
      </Link>
      <Link
        className={`mx-4 hover:text-red-600 ${
          pathname === "/contact" ? "font-bold" : ""
        }  `}
        href={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
};

export default Nav;
