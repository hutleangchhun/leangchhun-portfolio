import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaBootstrap
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

const cardData = [
  { icon: <FaHtml5 />, title: "HTML" },
  { icon: <FaCss3Alt />, title: "CSS" },
  { icon: <IoLogoJavascript />, title: "JavaScript" },
  { icon: <FaReact />, title: "React" },
  { icon: <FaVuejs />, title: "Vue.js" },
  { icon: <RiTailwindCssFill />, title: "Tailwindcss"},
  { icon: <FaBootstrap />, title: "Bootstrap"}
];

const SkillCard = () => {
  const Card = ({ icon, title }) => (
    <div className="flex flex-row items-center justify-between p-6 shadow-md border-2 border-teal-400 border-opacity-20">
      <div className="text-4xl text-teal-400 mb-2">{icon}</div>
      <p className="text-base text-white font-medium">{title}</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
