import React from "react";
import SkillsCard from "../(components)/SkillsCard";

const getSkills = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Skills");

    if (!res.ok) {
      throw new Error("Failed to fetch skills");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading experiences: ", error);
  }
};

const Skills = async () => {
  const data = await getSkills();

  if (!data?.skills) {
    return <p>No skills.</p>;
  }

  const skills = data.skills;

  return (
    <div className="">
      {skills.map((skill) => (
        <SkillsCard key={skill._id} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
