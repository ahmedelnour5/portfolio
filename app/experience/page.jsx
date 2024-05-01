import React from "react";
import ExperienceCard from "../(components)/ExperienceCard";
import { GET } from "@/app/api/Experiences/route";

const getExperiences = async () => {
  try {
    const res = await GET();

    if (!res.ok) {
      throw new Error("Failed to fetch Experiences");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading experiences: ", error);
  }
};

const Experience = async () => {
  const data = await getExperiences();

  if (!data?.experiences) {
    return <p>No Experiences.</p>;
  }

  const experiences = data.experiences || [];

  return (
    <div className="p-8 md:p-24">
      <div className=" grid grid-cols-1 grid-rows-3 gap-6">
        {experiences.length > 0 ? (
          experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))
        ) : (
          <p>Whoops!</p>
        )}
      </div>
    </div>
  );
};

export default Experience;
