"use client";
import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Header from "./Header";
import ButtonV2 from "./ui/ButtonV2";
import Link from "next/link";
import { IoCheckmarkDone } from "react-icons/io5";

const Pricing = ({
  showBadge,
  card,
  heading,
  sub,
  isFourCols,
  option1,
  option2,
}) => {
  const [isYearly, setIsYearly] = useState(false);
  const controls = useAnimation();

  const handleToggle = () => {
    setIsYearly((prev) => !prev);

    controls.start({
      x: isYearly ? 0 : "100%",
      transition: { duration: 0.3 },
    });
  };

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
    <div className="p-8 sm:p-16 md:px-28 xl:px-20">
      <Header heading={heading} sub={sub} />
      <div className="flex items-center justify-center mt-8 mb-12">
        <span className="mr-2 text-gray-900 font-bold">{option1}</span>
        <div
          className="relative inline-block w-12 h-6 bg-gray-300 rounded-full cursor-pointer"
          onClick={handleToggle}
        >
          <div
            className={`absolute w-6 h-6 rounded-full shadow transition-transform ${
              isYearly ? "transform translate-x-full bg-domain" : "bg-white"
            }`}
          />
        </div>
        <span className="ml-2 text-gray-900 font-bold">{option2}</span>
      </div>
      <div
        className={`grid grid-cols-1 lg:grid-cols-3 ${
          isFourCols && "md:grid-cols-2 lg:grid-cols-4"
        } gap-y-16 place-content-center place-items-center gap-x-8`}
      >
        {card.map((item, index) => (
          <motion.div
            variants={sleekShowVariants}
            initial="hidden"
            whileInView="onScreen"
            key={index}
            className={`relative shadow-3xl border rounded ${
              isFourCols ? "p-8" : "p-12"
            } w-full hover:bg-sky hover:transition ease-in-out duration-500 ${
              index === 1 && "bg-sky hover:bg-sky"
            }`}
          >
            {showBadge && index === 1 && (
              <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border border-primary shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                Most popular
              </span>
            )}
            <div className="text-center">
              <h3 className="font-medium text-2xl">{item.title}</h3>
              <p className="text-muted italic">{item.sub}</p>
            </div>
            <div className="text-center py-4">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={isYearly ? "yearly" : "monthly"}
                  className={`text-domain tracking-wide font-medium ${
                    isFourCols ? "text-3xl" : "text-5xl"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className={`italic relative text-2xl  ${
                      isFourCols ? "-top-2" : "-top-4"
                    }`}
                  >
                    ₦
                  </span>
                  {isFourCols
                    ? new Intl.NumberFormat("en-US", {
                        style: "decimal",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                        currency: "NGN",
                      }).format(isYearly ? item.localPrice : item.globalPrice)
                    : new Intl.NumberFormat("en-US", {
                        style: "decimal",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                        currency: "NGN",
                      }).format(isYearly ? item.price * 12 : item.price)}
                </motion.h3>
              </AnimatePresence>
              {isFourCols ? (
                <p className="text-muted mb-5">/month</p>
              ) : (
                <p className="text-muted mb-5">
                  {isYearly ? "/per year" : "/per month"}
                </p>
              )}
              <Link href={item.link}>
                <ButtonV2 text={item.buttonText} isFullWidth />
              </Link>
            </div>

            <div>
              {item.features.map((feature, index) => (
                <p key={index} className="flex items-center my-4">
                  {" "}
                  <span className="mr-2 text-domain">
                    <IoCheckmarkDone />
                  </span>{" "}
                  {feature}
                </p>
              ))}
            </div>
            {!isFourCols && (
              <p className="text-center text-muted hover:text-domain pt-4">
                <Link href={item.link}>Click here to see all features</Link>
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
