import Link from "next/link";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center  w-full space-y-9">
        <h1 className="text-5xl md:text-7xl font-bold">Ahmed Elnour</h1>
        <h2 className="text-xl md:text-2xl font-medium">
          Full-Stack Developer
        </h2>
        <div className="flex items-end">
          <LinkIcon
            to="https://github.com/ahmedelnour5"
            tipTitle="Github"
            Icon={GitHubIcon}
          >
            <GitHubIcon sx={{ color: "#ffffff", fontSize: 50 }} />
          </LinkIcon>

          <LinkIcon
            to="https://www.linkedin.com/in/ahmedelnoura/"
            tipTitle="LinkedIn"
          >
            <LinkedInIcon sx={{ color: "#ffffff", fontSize: 50 }} />
          </LinkIcon>
          <LinkIcon
            to="https://www.linkedin.com/in/ahmedelnoura/"
            tipTitle="Resume"
          >
            <ArticleIcon sx={{ color: "#ffffff", fontSize: 50 }} />
          </LinkIcon>
        </div>
      </div>
    </main>
  );
}

const LinkIcon = ({ to, tipTitle, children }) => {
  return (
    <Link href={to} className="hover:text-red-600">
      <Tooltip title={tipTitle} placement="bottom">
        <IconButton>{children}</IconButton>
      </Tooltip>
    </Link>
  );
};
