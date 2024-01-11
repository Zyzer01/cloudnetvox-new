import { useState } from "react";
import { motion } from "framer-motion";
import { TbBrandUbuntu } from "react-icons/tb";
import { RiCentosLine } from "react-icons/ri";
import { DiDebian } from "react-icons/di";
import { AiOutlineWindows } from "react-icons/ai";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Ubuntu");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const options = [
    {
      title: "Ubuntu",
      icon: <TbBrandUbuntu />,
    },
    {
      title: "Debian",
      icon: <DiDebian />,
    },
    {
      title: "Centos",
      icon: <RiCentosLine />,
    },
    {
      title: "Windows",
      icon: <AiOutlineWindows />,
    },
  ];

  return (
    <div className="flex flex-col space-y-6 justify-center item items-center">
      <div className="">
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10">
            {options.map((tab) => (
              <motion.div
                key={tab.title}
                className={`border rounded-2xl text-center px-6 py-6 w-50 border flex flex-col items-center justify-center space-y-5 text-sm font-medium cursor-pointer ${
                  activeTab === tab.title
                    ? "text-domain border-domain"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleTabClick(tab.title)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-4xl text-domain">{tab.icon}</p>
                <h6 className="text-lg">{tab.title}</h6>
              </motion.div>
            ))}
          </nav>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "Ubuntu" && (
          <div>
            Ubuntu Content Content Content Content Content Content Content{" "}
          </div>
        )}
        {activeTab === "Debian" && (
          <div>
            Debian Content Content Content Content Content Content Content{" "}
          </div>
        )}
        {activeTab === "Centos" && (
          <div>
            Archive Content Content Content Content Content Content Content{" "}
          </div>
        )}
        {activeTab === "Windows" && (
          <div>
            Notifications Content Content Content Content Content Content
            Content{" "}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Tabs;
