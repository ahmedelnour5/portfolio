import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="hidden md:flex">
      <Link className="mx-4 hover:text-red-600" href={"/experience"}>
        Experience
      </Link>
      <Link className="mx-4 hover:text-red-600" href={"/projects"}>
        Projects
      </Link>
      <Link className="mx-4 hover:text-red-600" href={"/skills"}>
        Skills
      </Link>
      <Link className="mx-4 hover:text-red-600" href={"/contact"}>
        Contact
      </Link>
    </div>
  );
};

export default Nav;
