"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { RiMenu4Fill } from "react-icons/ri";

const MobileMenuModal = ({ isOpen, onClose }) => {
    const navigation = [
        { title: "Shared Hosting", path: "javascript:void(0)" },
        { title: "Careers", path: "javascript:void(0)" },
        { title: "Frotmy", path: "javascript:void(0)", subMenu: ["Submenu 1", "Submenu 2"] },
        { title: "Partners", path: "javascript:void(0)" },
      ];

  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: "-100%" });
    }
  }, [isOpen, controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-white z-50"
      initial={{ x: "-100%" }}
      animate={controls}
    >
      <div className="p-4">
        <button onClick={onClose}>Close</button>
        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          {navigation.map((item, idx) => {
            return (
              <li key={idx} className="text-gray-600 hover:text-domain">
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const navigation = [
    { title: "Shared Hosting", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Frotmy", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="javascript:void(0)">
            <Image
              src="/images/logos/cloudnetvox logo.png"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 text-xl outline-none p-2 rounded-md border-gray-400 border"
              onClick={handleToggleMenu}
            >
              <RiMenu4Fill />
            </button>
            <MobileMenuModal isOpen={isMenuOpen} onClose={handleCloseMenu} />
          </div>
        </div>
        <div className="flex-1 justify-self-center pb-3 mt-8 hidden md:block md:pb-0 md:mt-0">
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          {navigation.map((item, idx) => {
            return (
              <li key={idx} className="text-gray-600 hover:text-domain relative">
                <a href={item.path}>{item.title}</a>
                {item.subMenu && (
                  <ul className="absolute top-full left-0 bg-white border shadow-md mt-2 p-2 space-y-2">
                    {item.subMenu.map((subItem, subIdx) => (
                      <li key={subIdx} className="text-gray-600 hover:text-domain">
                        <a href="javascript:void(0)">{subItem}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a
            href="javascript:void(0)"
            className="py-3 px-4 text-white bg-domain hover:bg-indigo-700 rounded-md shadow"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
