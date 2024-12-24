import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaLaravel,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const cardData = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
  },
  {
    icon: <IoLogoJavascript />,
    title: "Javascript",
  },
  {
    icon: <FaReact />,
    title: "React",
  },
  {
    icon: <FaVuejs />,
    title: "Vue.js",
  },
  {
    icon: <FaLaravel />,
    title: "Laravel",
  },
];
const SkillCard = () => {
  const Card = ({ icon, title }) => {
    return (
      <div className="card p-5 border-2 border-gray-900 border-opacity-20 flex flex-wrap flex-row items-center justify-between">
        <div className="text-2xl">{icon}</div>
        <div>
          <p className="text-base">
            {title}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="max-w-7xl mx-auto p-5 rounded-md mb-20">
      <h3 className="text-lg sm:text-lg md:text-2xl font-medium mb-5">
        Skills
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {cardData.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} />
        ))}
      </div>
    </div>
  );
};
export default SkillCard;
