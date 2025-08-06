import SocialCard from "./Card/SocialCard";

const FreelancerDescription = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate__animated animate__bounceIn">
          <h2 className="text-3xl sm:text-3xl  md:text-5xl font-bold mb-4 text-green-500 animate-bounce duration-300">
            Nice To See You!
          </h2>
          <p className="text-gray-300 text-base sm:text-base md:text-xl max-w-3xl mx-auto opacity-100">
            Are you looking for a website to improve your business? I help
            create responsive and user-friendly websites for your needs.
            Hello.
          </p>
          <SocialCard />
        </div>
      </div>
    </section>
  );
};

export default FreelancerDescription;
