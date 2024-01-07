import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const BackToTop = ({ scrollHeightToShow = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > scrollHeightToShow);
    };

    window.addEventListener("scroll", handleScroll); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeightToShow]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 z-50`}
    >
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="bg-domain text-white p-2 rounded-full focus:outline-none"
      >
        <FaArrowUp />
      </motion.button>
    </div>
  );
};

export default BackToTop;
