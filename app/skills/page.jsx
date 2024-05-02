import React from "react";
import SkillsCard from "../(components)/SkillsCard";
import { GET } from "@/app/api/Skills/route";

const getSkills = async () => {
  try {
    const res = await GET();

    if (!res.ok) {
      throw new Error("Failed to fetch skills");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading skills: ", error);
  }
};

const Skills = async () => {
  const data = await getSkills();

  if (!data?.skills) {
    return <p>No skills.</p>;
  }

  const skills = data.skills || [];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 md:py-12">
      <div className="grid grid-cols-1 gap-6 scroll-smooth">
        {skills.length > 0 ? (
          skills.map((skill) => <SkillsCard key={skill._id} skill={skill} />)
        ) : (
          <p>Whoops</p>
        )}
      </div>
    </div>
  );
};

export default Skills;
