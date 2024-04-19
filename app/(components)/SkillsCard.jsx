import React from "react";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiPython,
  SiAmazondynamodb,
  SiDotnet,
  SiTailwindcss,
  SiRedis,
  SiPostgresql,
  SiAngular,
  SiBootstrap,
  SiMicrosoftsqlserver,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiGit,
  SiCsharp,
  SiMysql,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import SkillTip from "./SkillTip";

const SkillsCard = ({ skill }) => {
  const iconMap = {
    Javascript: <SiJavascript className="font-black " />,
    Python: <SiPython />,
    Java: <DiJava />,
    "React.js": <SiReact />,
    ".NET": <SiDotnet />,
    "Angular.js": <SiAngular />,
    Bootstrap: <SiBootstrap />,
    Tailwind: <SiTailwindcss />,
    MongoDB: <SiMongodb />,
    DynamoDB: <SiAmazondynamodb />,
    Redis: <SiRedis />,
    mySQL: <SiMysql />,
    PostgreSQL: <SiPostgresql />,
    "Microsoft SQL Server": <SiMicrosoftsqlserver />,
    noSQL: <SiDocker />,
    Docker: <SiDocker />,
    Git: <SiGit />,
    CSS3: <SiCss3 />,
    HTML5: <SiHtml5 />,
    Express: <SiExpress />,
    "C#": <SiCsharp />,
  };
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 max-w-4xl text-black">
      <h2>{skill.technologyType}</h2>
      <div className="flex justify-between items-center">
        {skill.skills.map((s, index) => (
          <SkillTip key={index} skill={s}>
            {iconMap[s]}
          </SkillTip>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
