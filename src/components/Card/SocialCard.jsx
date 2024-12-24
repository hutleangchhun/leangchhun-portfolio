import { FaGithub, FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";

const cardData = [
  {
    icon: <FaGithub />,
    link: "https://github.com/hutleangchhun",
  },
  {
    icon: <FaTelegramPlane />,
    link: "https://t.me/hutleangchhun", 
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/leangchhun.mp4/profilecard/?igsh=MXY5Y2R6aHcxNXhyeg==",
  },
  {
    icon: <FaWhatsapp />,
    link: "", 
  },
];

const SocialCard = () => {
  const Card = ({ icon, link }) => {
    return (
      <div className="card p-2 hover:scale-125 duration-200 ease-in-out">
        <a
          className="text-xl sm:text-xl md:text-2xl cursor-pointer"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-5 rounded-md">
      <div className="flex justify-center gap-5">
        {cardData.map((card, index) => (
          <Card key={index} icon={card.icon} link={card.link} />
        ))}
      </div>
    </div>
  );
};

export default SocialCard;
