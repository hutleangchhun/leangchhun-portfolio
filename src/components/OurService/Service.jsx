import React from "react";
import { FaWordpress, FaLaravel, FaReact } from "react-icons/fa";

const Service = () => {
  const cardData = [
    {
      icon: <FaWordpress />,
      title: "Wordpress",
      description:
        "Custom WordPress development for easy-to-manage websites and blogs.",
    },
    {
      icon: <FaReact />,
      title: "Static Website",
      description:
        "Fast and secure static websites with optimized performance and reliability.",
    },
    {
      icon: <FaLaravel />,
      title: "Dynamic Website",
      description:
        "Dynamic websites with interactive features and backend integration.",
    },
  ];
  const CardComponent = ({ title, icon, description }) => {
    return (
      <div className="card p-5 bg-gray-900 bg-opacity-10 shadow-md rounded-lg hover:scale-95 duration-300 ease-in-out">
        <div className="icon text-4xl mb-3 text-gray-400">{icon}</div>
        <h3 className="text-lg sm:text-lg md:text-xl mb-3 font-medium">
          {title}
        </h3>
        <p className="text-gray-300 mb-3 text-base">{description}</p>
      </div>
    );
  };
  return (
    <div className="p-5 max-w-7xl mx-auto flex flex-col justify-center items-center">
      <h3 className="text-2xl sm:text-2xl md:text-3xl font-medium my-10">
        Our Services
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 pb-10">
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Service;
