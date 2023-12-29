import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ endValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      controls.start({
        count: endValue,
        transition: { duration: 2, ease: 'easeOut' },
      });
    }
  }, [inView, controls, endValue]);

  return (
    <motion.div ref={ref} initial={{ count: 0 }} animate={controls}>
      {isVisible && Math.floor(controls.get('count')).toLocaleString()}
    </motion.div>
  );
};

const App = () => {
  return (
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Counter endValue={1000} />
    </div>
  );
};

export default App;
