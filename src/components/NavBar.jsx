"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import logo from "public/images/logos/cloudnetvox logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaCloudArrowUp } from "react-icons/fa6";
import Button from "./ui/Button";

const MobileMenuModal = ({ isOpen, onClose }) => {
  const navigation = [
    { title: "Shared Hosting", path: "/shared-hosting" },
    {
      title: "VPS Hosting",
      path: "javascript:void(0)",
      subMenu: [
        {
          title: "Submenu 1",
          desc: "NVMe Powered cPanel Web Hosting",
          path: "/sub",
        },
        {
          icon: <FaCloudArrowUp />,
          title: "Submenu 1",
          desc: "NVMe Powered cPanel Web Hosting",
          path: "/sub",
        },
      ],
    },
    { title: "Dedicated Servers", path: "/dedicated-servers" },

    {
      title: "Domains",
      path: "javascript:void(0)",
      subMenu: [
        {
          title: "Domains",
          desc: "NVMe Powered cPanel Web Hosting",
          path: "/domains",
        },
        {
          title: "Premium Domains",
          desc: "NVMe Powered cPanel Web Hosting",
          path: "/premium-domains",
        },
      ],
    },
  ];

  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: "-100%" });
    }
  }, [isOpen, controls]);

  const handleItemClick = (event) => {
    // Prevent closing when opening a submenu
    if (!event.target.open) {
      onClose();
    }
  };
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-white z-50"
      initial={{ x: "-100%" }}
      animate={controls}
    >
      <div class="flex h-screen flex-col justify-between border-e bg-white">
        <div class="px-4 py-6">
          <div className="flex justify-between items-center">
            <span class="grid h-15 w-30 rounded-lg bg-gray-100 text-xs text-gray-600">
              <Image src={logo} width={172} height={40} alt="Float UI logo" />
            </span>
            <button onClick={onClose}>
              <AiOutlineClose />
            </button>
          </div>
          <ul class="mt-12 space-y-2">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <details
                  class="group [&_summary::-webkit-details-marker]:hidden"  
                  onClick={handleItemClick}
                >
                  <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-primary">
                    <Link href={item.path}>
                      {" "}
                      <span class="font-medium"> {item.title} </span>
                    </Link>

                    {item.subMenu && (
                      <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                        <IoIosArrowDown />
                      </span>
                    )}
                  </summary>
                  {item.subMenu && (
                    <ul class="mt-2 space-y-1 px-4">
                      {item.subMenu.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={subItem.path}
                            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
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

        <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <p>image</p>

            <div>
              <p class="text-xs">
                <strong class="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
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

  const navigation = [
    { title: "Shared Hosting", path: "/shared-hosting" },
    {
      title: "VPS Hosting",
      path: "javascript:void(0)",
      subMenu: [
        {
          icon: <FaCloudArrowUp />,
          title: "Submenu 1",
          desc: "NVMe Powered cPanel Web Hosting",
          path: "/sub",
        },
        {
          icon: <FaCloudArrowUp />,
          title: "Submenu 1",
          desc: "NVMe Powered cPanel Web Hosting",
          path: "/sub",
        },
      ],
    },
    { title: "Dedicated Servers", path: "/dedicated-servers" },

    {
      title: "Domains",
      path: "/domains",
      subMenu: [
        {
          icon: <FaCloudArrowUp />,
          title: "Domains",
          desc: "NVMe Powered cPanel Web Hosting",
          path: "/sub",
        },
        {
          icon: <FaCloudArrowUp />,
          title: "Premium Domains",
          desc: "NVMe Powered cPanel Web Hosting",
          path: "/sub",
        },
      ],
    },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static md:px-24">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="javascript:void(0)">
            <Image src={logo} width={172} height={40} alt="Float UI logo" />
          </Link>
          <div className="md:hidden">
            <button
              className="text-white text-xl outline-none p-2 rounded-md border-gray-100 border"
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
                                <div className="text-gray-800">
                                  <h4 className="font-medium hover:text-domain">
                                    {subItem.title}
                                  </h4>
                                  <p className="text-sm">{subItem.desc}</p>
                                </div>
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

        <div className="hidden md:inline-block">
          <Link href="javascript:void(0)">
            <Button text="Login" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
