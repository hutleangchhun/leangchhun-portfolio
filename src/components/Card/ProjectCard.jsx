import React from "react";
import { FaRegFolderOpen } from "react-icons/fa6";
import { CgBrowser } from "react-icons/cg";

const ProjectCard = () => {
  const cardData = [
    {
      icon: <FaRegFolderOpen />,
      title: "Chhat Group",
      description:
        "A Company provide comprehensive services in trading, market research, and product sales, specializing in high-quality jewelry.",
      link: "https://chhatgroup.com/",
    },
    {
      icon: <FaRegFolderOpen />,
      title: "Urban Palace Serviced Apartment",
      description:
        "Urban Palace is a luxury apartment that offers fully furnished accommodation for residents.",
      link: "https://www.urbanpalaceapartments.com/",
    },
    {
      icon: <FaRegFolderOpen />,
      title: "Chhat Diamond",
      description: "Coming Soon!",
      link: "", 
      comingSoon: true,
    },
  ];

  // Card component
  const CardComponent = ({ icon, title, description, link, comingSoon }) => {
    return (
      <div className="card p-5 bg-gray-900 bg-opacity-10 shadow-md rounded-lg hover:scale-105 duration-300 ease-in-out">
        <div className="icon text-4xl mb-3 text-green-500">{icon}</div>
        <h3 className="text-base sm:text-base md:text-xl mb-3">
          {title}
        </h3>
        <p className="text-gray-300 mb-3 text-sm sm:text-sm md:text-base font-medium sm:font-medium lg:font-normal">
          {comingSoon ? "Coming Soon!" : description}
        </p>
        {comingSoon ? (
          <span className="text-gray-500 text-sm sm:text-base md:text-base font-medium sm:font-medium lg:font-normal">
            Stay tuned!
          </span>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer" className="">
            <CgBrowser className="h-6 w-6 text-green-500 hover:scale-110 duration-300 ease-in-out" />
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h3 className="text-lg sm:text-lg md:text-2xl my-5">
        Completed Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5">
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            link={card.link}
            comingSoon={card.comingSoon}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
