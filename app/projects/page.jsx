import React from "react";
import ProjectCard from "../(components)/ProjectCard";
import { GET } from "@/app/api/Projects/route";

const getProjects = async () => {
  try {
    const res = await GET();

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading projects: ", error);
    return { projects: [] };
  }
};

const Project = async () => {
  const data = await getProjects();

  const projects = data.projects || [];

  if (!data?.projects) {
    return <p>No skills.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 md:p-0">
      <div className="grid grid-cols-1 gap-6 justify-center">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Project;
