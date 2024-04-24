import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="w-full mx-auto sticky top-0 z-20 bg-gradient-to-br from-gray-700 via-gray-900 to-black shadow-sm">
      <div className="container mx-auto flex justify-between p-5 items-end flex-wrap">
        <Link href={"/"} className="hover:cursor-pointer hover:text-red-600">
          <span className="text-4xl font-semibold">medElnour</span>
        </Link>
        <MobileNav />
        <Nav />
      </div>
    </div>
  );
};
export default Header;
