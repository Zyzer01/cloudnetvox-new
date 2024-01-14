import React from 'react';
import Header from './Header';
import { motion } from 'framer-motion';

const Features = ({heading, sub, featureContent}) => {
  const sleekShowVariants = {
    hidden: {
      opacity: 0,
    },
    onScreen: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="bg-sky p-16 md:p-24">
      <Header
        heading={heading}
        sub={sub}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-y-16 gap-x-4">
        {featureContent.map((item, index) => (
          <motion.div
            className="flex"
            key={index}
            variants={sleekShowVariants}
            initial="hidden"
            whileInView="onScreen">
            <div className="mr-7">
              <p className="text-4xl text-domain">{item.icon}</p>
            </div>
            <div>
              <h3 className="text-2xl mb-2">{item.title}</h3>
              <p className="text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
