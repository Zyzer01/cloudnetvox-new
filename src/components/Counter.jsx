import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ endValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      controls.start({
        count: endValue,
        transition: { duration: 2, ease: 'linear' },
      });
    }
  }, [inView, controls, endValue]);

  return (
    <motion.div ref={ref}>
      {isVisible && (
        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}>
          {controls.get('count')}
        </motion.div>
      )}
      {/* You can also display the count outside of the motion.div */}
      {isVisible && <p>{controls.get('count')}</p>}
    </motion.div>
  );
};

export default Counter;
