import React from "react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md text-black rounded-lg p-8 max-w-4xl h-auto">
      <div className="flex flex-col space-y-1">
        <h2 className="font-bold text-lg">{project.projectTitle}</h2>
        <div className="flex justify-between">
          <h3 className="font-bold text-md">{project.projectType}</h3>
          <span>{project.dates}</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-gray-500">
          <span>{project.role}</span>
          <span className="text-sm md:text-base">{project.technologies}</span>
        </div>
        <Link href={project.projectLink} className="text-gray-500 underline">
          Link
        </Link>
        <ul className="text-gray-500 list-disc list-inside text-sm leading-4 space-y-2">
          {project.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
