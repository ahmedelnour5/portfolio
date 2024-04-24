"use client";
import React, { useState } from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      {open ? (
        <div className="fixed top-0 left-0 flex flex-col bg-gradient-to-br from-gray-700 via-gray-900 to-black shadow-sm min-h-full w-full items-center">
          <IconButton
            onClick={() => setOpen(!open)}
            className="place-self-end"
            sx={{ color: "#ffffff" }}
          >
            <CloseIcon />
          </IconButton>
          <div className="flex flex-col text-white text-lg w-full items-center space-y-2 mt-5 pt-14">
            <Link href={"/"} onClick={() => setOpen(!open)}>
              Home
            </Link>
            <Link href={"/experience"} onClick={() => setOpen(!open)}>
              Experience
            </Link>
            <Link href={"/projects"} onClick={() => setOpen(!open)}>
              Projects
            </Link>
            <Link href={"/skills"} onClick={() => setOpen(!open)}>
              Skills
            </Link>
            <Link href={"/contact"} onClick={() => setOpen(!open)}>
              Contact
            </Link>
          </div>
        </div>
      ) : (
        <IconButton onClick={() => setOpen(!open)} sx={{ color: "#ffffff" }}>
          <MenuIcon />
        </IconButton>
      )}
    </div>
  );
};

export default MobileNav;
