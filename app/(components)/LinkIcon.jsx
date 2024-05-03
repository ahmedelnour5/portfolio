import React from "react";
import Link from "next/link";
import { IconButton, Tooltip } from "@mui/material";

const LinkIcon = ({ to, tipTitle, children }) => {
  return (
    <Link href={to} className="hover:text-red-600">
      <Tooltip title={tipTitle} placement="bottom">
        <IconButton>{children}</IconButton>
      </Tooltip>
    </Link>
  );
};

export default LinkIcon;
