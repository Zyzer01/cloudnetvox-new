"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import logo from "public/images/logos/cloudnetvox logo.png";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./ui/Button";
import netvox from "public/images/netvox-logo-transparent-1.png";
import { navigation } from "@/utility/items";

const MobileMenuModal = ({ isOpen, onClose, navigation }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animation = isOpen ? { x: 0 } : { x: "-100%" };

    controls.start((latest) => animation, {
      type: "tween",
      duration: 0.3,
      ease: "easeInOut",
    });
  }, [isOpen, controls]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-white overflow-y-hidden z-50"
      initial={{ x: "-100%" }}
      animate={controls}
    >
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <div className="flex justify-between items-center">
            <span className="grid h-15 w-30">
              <Image src={logo} width={172} height={40} alt="Float UI logo" />
            </span>
            <button onClick={onClose}>
              <AiOutlineClose />
            </button>
          </div>
          <ul className="mt-12 space-y-2">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-primary">
                    <Link href={item.path} onClick={onClose}>
                      {" "}
                      <span className="font-medium"> {item.title} </span>
                    </Link>

                    {item.subMenu && (
                      <span className="shrink-0 bg-gray-600 text-white rounded-full p-2 transition duration-300 group-open:-rotate-180">
                        <IoIosArrowDown />
                      </span>
                    )}
                  </summary>
                  {item.subMenu && (
                    <ul className="mt-2 space-y-1 px-4">
                      {item.subMenu.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            onClick={onClose}
                            href={subItem.path}
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              </li>
            ))}
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <Link
            target="_blank"
            href="https://netvox.ng"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <Image
              className="w-16"
              width={331}
              height={256}
              src={netvox}
              alt="netvox logo"
            />
            <div>
              <p className="text-xs">
                <strong className="block font-medium">
                  A Subsidiary of Netvox Networks
                </strong>
                <span> netvox.ng </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-primary w-full border-b md:border-0 md:static xl:px-20 z-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 lg:block">
          <Link href="/">
            <Image src={logo} width={172} height={40} alt="Cloudnetvox logo" />
          </Link>
          <div className="lg:hidden">
            <button
              className="text-white text-xl outline-none p-2 rounded-md border-gray-100 border"
              onClick={handleToggleMenu}
            >
              <RiMenu4Fill />
            </button>
            <MobileMenuModal
              isOpen={isMenuOpen}
              onClose={handleCloseMenu}
              navigation={navigation}
            />
          </div>
        </div>
        <div className="flex-1 justify-self-center pb-3 mt-8 hidden lg:block md:pb-0 md:mt-0">
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-white cursor-pointer relative group flex items-center"
                >
                  <Link href={item.path}>{item.title}</Link>
                  {item.subMenu && (
                    <>
                      <span className="shrink-0 transition duration-300 group-hover:-rotate-180">
                        <IoIosArrowDown />
                      </span>
                      <div className="ml-1 relative group">
                        <div className="absolute top-3 -left-1/2 transform -translate-x-1/2 hidden bg-white box-shadow-spread text-white p-6 w-72 rounded-md space-y-2 group-hover:block transition-all duration-300 ease-in-out">
                          <div className="flex flex-col space-y-4">
                            {item.subMenu.map((subItem, subIdx) => (
                              <div
                                key={subIdx}
                                className="flex space-x-4 items-center"
                              >
                                <p className="text-4xl text-domain">
                                  {subItem.icon}
                                </p>
                                <Link href={subItem.path}>
                                  <div className="text-gray-800">
                                    <h4 className="font-medium hover:text-domain">
                                      {subItem.title}
                                    </h4>
                                    <p className="text-sm">{subItem.desc}</p>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden lg:inline-block">
          <Link href="javascript:void(0)">
            <Button text="Login" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
