import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "./Header";

const Tabs = ({options}) => {
  const [activeTab, setActiveTab] = useState("Ubuntu");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="flex flex-col space-y-6 justify-center item items-center">
      <Header
        heading="Choose Your Operating System"
        sub="OS templates are accessible for effortless one-click reinstallation whenever needed."
      />
      <nav className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10 pt-8">
        {options.map((tab) => (
          <motion.div
            key={tab.title}
            className={`border rounded-2xl text-center px-6 py-6 w-50 border flex flex-col items-center justify-center space-y-5 text-sm cursor-pointer ${
              activeTab === tab.title
                ? "text-domain border-domain font-medium"
                : "text-gray-500 hover:text-gray-700 grayscale"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center"
      >
        {options.map((item, index) => (
          <div key={index}>
            {activeTab === item.title && (
              <div className="px-16 md:px-32 grid md:grid-cols-2 place-content-center place-items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl my-3">{item.title}</h2>
                  <p className="text-black">{item.desc}</p>
                </div>
                <div>
                  <Image
                    src={item.imageSrc}
                    width={350}
                    height={300}
                    alt={item.title}
                    placeholder="blur"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tabs;
