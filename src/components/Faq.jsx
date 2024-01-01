'use client';
import { useState } from 'react';
import Header from './Header';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { v1 as uuidv1 } from 'uuid';

const Item = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium">{title}</h3>
        <p
          className={`w-3 text-gray-600 text-xl transform transition-transform duration-200  ${
            isOpen ? 'rotate-180 text-blue-800' : ''
          }`}>
          <MdKeyboardDoubleArrowDown />
        </p>
      </button>
      <AnimatePresence mode="visible">
        {isOpen && (
          <motion.div
            key={uuidv1()}
            layout
            initial={{ opacity: 0, transform: 'scaleY(0)' }}
            animate={{ opacity: 1, transform: 'scaleY(1)', height: 'auto' }}
            exit={{ opacity: 0, transform: 'scaleY(0)', height: 0 }}
            transition={{
              type: 'spring',
              ease: 'easeInOut',
              duration: 0.4,
              animate: {
                start: { opacity: 0, height: 0 },
                end: { opacity: 1, height: 'auto' },
              },
            }}
            className="p-4 pt-0 overflow-hidden">
            <p className="text-gray-700">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = ({ questionContent }) => {
  return (
    <div className="p-16 md:p-28 mx-auto">
      <Header heading="Frequently Asked Questions" sub="See if your questions is answered" />
      <div className="max-w-xl sm:mx-auto lg:max-w-3xl">
        <div className="space-y-4">
          {questionContent.map((item, index) => (
            <Item key={index} title={item.title} content={item.content}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
