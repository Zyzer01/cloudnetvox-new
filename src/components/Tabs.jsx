import { useState } from "react";
import { motion } from "framer-motion";
import { TbBrandUbuntu } from "react-icons/tb";
import { RiCentosLine } from "react-icons/ri";
import { DiDebian } from "react-icons/di";
import { AiOutlineWindows } from "react-icons/ai";
import Image from "next/image";
import Header from "./Header";
import ubuntu from "public/images/ubuntu.png"
import debian from "public/images/debian-logo-1024x576.png"
import centos from "public/images/centos.jpeg"
import windows from "public/images/microsoft windows.png"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Ubuntu");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const options = [
    {
      title: "Ubuntu",
      desc: "Ubuntu Server stands out as a widely used and adaptable operating system specifically crafted for server environments. Rooted in the Linux kernel, it boasts consistent long-term support (LTS) releases. Renowned for its reliability, security, and a broad range of available software, Ubuntu Server proves to be an excellent option for hosting web services, databases, and various applications.",
      icon: <TbBrandUbuntu />,
      imageSrc: ubuntu,
    },
    {
      title: "Debian",
      desc: "Debian is recognized as a swift and resilient operating system, built upon the Linux kernel. It is meticulously assembled using open-source software and flourishes thanks to the collective contributions of the Debian Project community. Embraced by many system administrators and industry professionals, Debian has emerged as the preferred distribution.",
      icon: <DiDebian />,
      imageSrc: debian,

    },
    {
      title: "Centos",
      desc: "CentOS, a free Linux distribution, remains fully functionally compatible with RHEL but lacks commercial support. CentOS generally offers comprehensive long-term support, along with dedicated efforts towards security and stability-focused development, ensuring ongoing maintenance updates for every major version.",
      icon: <RiCentosLine />,
      imageSrc: centos,

    },
    {
      title: "Windows",
      desc: "Microsoft has designed an operating system known as Windows. Since 2003, Microsoft has unveiled a range of server operating systems labeled as Microsoft Windows Server. Numerous .NET development studios prefer Windows Server as their operating system, contributing to its widespread popularity.",
      icon: <AiOutlineWindows />,
      imageSrc: windows,
    },
  ];

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
