import React from "react";
import ExperienceDisplay from "../(components)/ExperienceDisplay";

const getExperiences = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Experiences");

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
    <div className="container mx-auto min-h-screen mt-4 py-8">
      <div className="space-y-7 flex flex-col justify-center items-center">
        {experiences.map((experience) => (
          <ExperienceDisplay key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
