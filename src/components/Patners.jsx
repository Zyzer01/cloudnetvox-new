import React from 'react';
import Header from './Header';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Patners = () => {
  const patnerLogos = [
    '/images/logos/fmcjalingo.jpg',
    '/images/logos/opm.png',
    '/images/logos/alpha tech.png',
    '/images/logos/cafe 40.png',
    '/images/logos/federal ministry of education.png',
    '/images/logos/ncc.png',
    '/images/logos/ngcares.png',
  ];

  return (
    <div className="p-8 sm:p-16 md:px-28">
      <Header
        heading="Trusted By 10,000+ Clients & Partners"
        sub="We are just better together... Build, launch, and grow your website or app in our environment. Our team has your back."
      />
      <div className="py-16">
        <Marquee>
          {patnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, transition: { ease: 'easeIn', duration: 0.3 } }}>
              <Image
                className="w-24 mr-16"
                src={logo}
                width={280}
                height={200}
                alt={`logo ${index + 1}`}
              />
            </motion.div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Patners;
