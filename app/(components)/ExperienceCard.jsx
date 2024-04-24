import React from "react";
import Image from "next/image";
import cartLogo from "@/public/cartdotcom_logo.jpeg";
import codeHouseLogo from "@/public/codeHouse_logo.jpeg";
import vcu from "@/public/virginia_commonwealth_university_logo.jpeg";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-white shadow-md text-black rounded-lg p-4 w-full md:max-w-4xl h-auto">
      <div className="flex flex-col items-center md:flex-row">
        {/*************** Organization Logo  ****************/}
        <Image
          src={
            experience.organization === "Code House Solutions"
              ? codeHouseLogo
              : experience.organization === "Cart.com"
              ? cartLogo
              : vcu
          }
          className="w-[150px] h-auto md:h-[100px] md:w-auto mb-4"
        />
        {/************ Experience details ****************************/}
        <div className="md:flex-grow px-3">
          <h2 className="font-bold">{experience.organization}</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="font-bold text-sm md:text-lg">{experience.title}</h2>
            <span className="text-sm md:text-base">{experience.dates}</span>
          </div>
          <div className="flex items-center justify-between text-gray-500 font-semibold mb-4">
            <span className="text-sm md:text-base">{experience.position}</span>
            <span className="text-sm md:text-base">{experience.location}</span>
          </div>
          <ul className=" text-gray-500 list-disc list-outside text-sm px-4 text-pretty">
            {experience.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
        {/************ Experience details ****************************/}
      </div>
    </div>
  );
};

export default ExperienceCard;
