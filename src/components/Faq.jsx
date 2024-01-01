'use client';
import { useState } from 'react';
import Header from './Header';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

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
      {isOpen && (
        <div className="p-4 pt-0">
          <AnimatePresence mode="wait">
            <motion.p
              className="text-gray-700"
              initial="collapsed"
              animate={isOpen ? 'open' : 'collapsed'}
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3 }}
              exit={{ collapsed: { opacity: 0, height: 0 } }}>
              {content}
            </motion.p>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

const Faq = ({ questionContent }) => {
  return (
    <div class="p-16 md:p-28 mx-auto">
      <Header heading="Frequently Asked Questions" sub="See if your questions is answered" />
      <div class="max-w-xl sm:mx-auto lg:max-w-3xl">
        <div class="space-y-4">
          {questionContent.map((item, index) => (
            <Item key={index} title={item.title} content={item.content}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
