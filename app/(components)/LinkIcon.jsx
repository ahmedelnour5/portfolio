import React from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

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
