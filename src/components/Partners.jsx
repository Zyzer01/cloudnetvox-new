import React from "react";
import Header from "./Header";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const Partners = () => {
  const partnerLogos = [
    "/images/logos/fmcjalingo.jpg",
    "/images/logos/opm.png",
    "/images/logos/federal ministry of education.png",
    "/images/logos/ncc.png",
    "/images/logos/ngcares.png",
  ];

  return (
    <div className="p-8 sm:p-16 md:px-28">
      <Header
        heading="Trusted By 10,000+ Clients & Partners"
        sub="We are just better together... Build, launch, and grow your website or app in our environment. Our team has your back."
      />
      <div className="py-8 flex flex-wrap justify-between items-center">
        {partnerLogos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              transition: { ease: "easeIn", duration: 0.3 },
            }}
          >
            <Image
              className="w-16 md:w-24"
              src={logo}
              width={280}
              height={200}
              alt={`logo ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
