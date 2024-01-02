'use client';
import { motion, AnimatePresence } from 'framer-motion';

const PageWarapper = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <div
        key={typeof window !== 'undefined' ? window.location.pathname : ''}
        initial={{ opacity: 0, x: '100vw' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100vw' }}
        transition={{ duration: 0.3 }}>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageWarapper;
