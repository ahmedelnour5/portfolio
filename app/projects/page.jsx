import React from "react";
import ProjectCard from "../(components)/ProjectCard";

const getProjects = async () => {
  try {
    const res = await fetch(
      "https://portfolio-dl1534zxz-ahmedelnour5s-projects.vercel.app/api/Projects"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading experiences: ", error);
  }
};

const Project = async () => {
  const data = await getProjects();

  if (!data?.projects) {
    return <p>No Projects.</p>;
  }

  const projects = data.projects;

  return (
    <div className="min-h-screen flex items-center justify-center p-8 md:p-0">
      <div className="grid grid-cols-1 gap-6 justify-center">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
