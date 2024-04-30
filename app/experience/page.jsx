import React from "react";
import ExperienceCard from "../(components)/ExperienceCard";

const getExperiences = async () => {
  try {
    const res = await fetch(process.env.URL + "/api/Experiences");

    if (!res.ok) {
      throw new Error("Failed to fetch Experiences");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading experiences: ", error);
  }
};

const Experience = async () => {
  const data = await getExperiences();

  if (!data?.experiences) {
    return <p>No Experiences.</p>;
  }

  const experiences = data.experiences;

  return (
    <div className="p-8 md:p-24">
      <div className=" grid grid-cols-1 grid-rows-3 gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
