import { useState } from "react";
import SkillCard from "../Card/SkillCardFrontEnd";
import SkillCardBackEnd from "../Card/SkillCardBackEnd";
import SkillCardDatabase from "../Card/SkillCardDatabase";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    const tabs = ["Frontend", "Backend", "Database"];

    const renderTabContent = () => {
        switch (activeTab) {
            case "Frontend":
                return <SkillCard />;
            case "Backend":
                return <SkillCardBackEnd />;
            case "Database":
                return <SkillCardDatabase />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto mt-10">
            <div className="flex justify-center items-center">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 text-base font-medium transition-opacity duration-500 ease-in-out ${activeTab === tab
                                ? "bg-gray-900 bg-opacity-10 text-white border-b-2 border-teal-400"
                                : "text-gray-400 hover:text-white"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div
                key={activeTab}
                className="bg-gray-900 bg-opacity-10 text-white p-6 rounded-b-md mt-5 transition-opacity duration-500 ease-in-out animate-fadeInUp"
            >
                {renderTabContent()}
            </div>
        </div>
    );
};

export default Tabs;
