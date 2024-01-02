import { useState } from 'react';
import ButtonV2 from './ui/ButtonV2';
import Link from 'next/link';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Header from './Header';

const PricingWithIcon = ({ pricingCards, isWithToggle, buttonText, heading, sub }) => {
  const [isYearly, setIsYearly] = useState(false);
  const controls = useAnimation();

  const cardHoverVariants = {
    initial: {
      y: 0,
      opacity: 0,
    },
    hover: {
      y: -5,
      boxShadow: '0 30px 30px rgba(24, 27, 34, 0.10)', // Add a drop shadow
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    onScreen: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  const handleToggle = () => {
    setIsYearly((prev) => !prev);

    controls.start({
      x: isYearly ? 0 : '100%',
      transition: { duration: 0.3 },
    });
  };

  return (
    <div className="p-16 md:px-28">
      <Header heading={heading} sub={sub} />
      {isWithToggle && (
        <div className="flex items-center justify-center mt-8 mb-12">
          <span className="mr-2 text-gray-900 font-bold">Monthly</span>
          <div
            className="relative inline-block w-12 h-6 bg-gray-300 rounded-full cursor-pointer"
            onClick={handleToggle}>
            <div
              className={`absolute w-6 h-6 rounded-full shadow transition-transform ${
                isYearly ? 'transform translate-x-full bg-domain' : 'bg-white'
              }`}
            />
          </div>
          <span className="ml-2 text-gray-900 font-bold">Yearly</span>
        </div>
      )}
      <div className="grid lg:grid-cols-3 gap-y-8 place-content-center place-items-center gap-x-8 ">
        {pricingCards.map((item, index) => (
          <motion.div
            initial="initial"
            whileHover="hover"
            variants={cardHoverVariants}
            whileInView="onScreen"
            key={index}
            className="relative shadow-3xl border rounded-xl p-12 w-full ease-in-out duration-500">
            <div className="flex flex-col space-y-5">
              <p className="text-6xl text-domain">{item.icon}</p>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
              <div>
                <p className="italic">Starting at:</p>
                <AnimatePresence mode="wait">
                  <motion.h6
                    key={isYearly ? 'yearly' : 'monthly'}
                    className="text-5xl font-bold py-2 text-domain tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    <span className="mr-1">₦</span>
                    {new Intl.NumberFormat('en-US', {
                      style: 'decimal',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                      currency: 'NGN',
                    }).format(isYearly ? item.price * 12 : item.price)}
                    {isWithToggle ? (
                      <span className="mr-1 text-xl font-medium">{isYearly ? '/yr' : '/mo'}</span>
                    ) : (
                      <span className="mr-1 text-xl font-medium">/yr</span>
                    )}
                  </motion.h6>
                </AnimatePresence>
              </div>
              <Link href={item.link}>
                <ButtonV2 text={buttonText} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingWithIcon;
