import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const SkillTip = ({ skill, children }) => {
  return (
    <Tooltip title={skill} placement="bottom">
      <IconButton sx={{ color: "#000000", fontSize: 50 }}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default SkillTip;
