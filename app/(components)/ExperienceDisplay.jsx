import React from "react";
import Image from "next/image";
import cartLogo from "@/public/cartdotcom_logo.jpeg";
import codeHouseLogo from "@/public/codeHouse_logo.jpeg";
import vcu from "@/public/virginia_commonwealth_university_logo.jpeg";

const ExperienceDisplay = ({ experience }) => {
  return (
    <div className="bg-white shadow-md text-black rounded-lg p-8 flex-grow">
      <div className="flex flex-col items-center md:flex md:flex-row md:items-start">
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
        <div className="flex flex-col md:ml-16">
          <h2 className="font-medium">{experience.organization}</h2>
          <div className="flex justify-between">
            <h2 className="text-sm md:text-lg md:font-semibold">
              {experience.title}
            </h2>
            <span className="text-sm md:text-base text-gray-500">
              {experience.dates}
            </span>
          </div>
          <div className="text-sm md:text-base flex justify-between text-gray-500">
            <span>{experience.position}</span>
            <span>{experience.location}</span>
          </div>
          <ul className="list-inside list-disc pt-5 mt-2 text-gray-500 text-sm md:text-base space-y-1">
            {experience.description.map((desc) => (
              <li className="leading-5">{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDisplay;
