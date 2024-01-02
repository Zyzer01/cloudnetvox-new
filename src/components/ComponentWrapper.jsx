'use client';

import { motion } from 'framer-motion';

const ComponentWrapper = ({ children }) => {
  return (
    <motion.main
      initial={{ x: '100vw' }}
      animate={{ x: 0, transition: { type: 'linear' } }}
      exit={{ x: '-100vw' }}>
      {children}
    </motion.main>
  );
};

export default ComponentWrapper;
