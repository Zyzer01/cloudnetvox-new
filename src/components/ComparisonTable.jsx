"use client";
import ButtonV2 from "./ui/ButtonV2";
import Link from "next/link";
import "../styles/table.css";
import MobileComparisonTable from "./MobileComparisonTable";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FeatureRow = ({ feature, lite, premium, extra }) => {
  return (
    <tr className="">
      <td className="border-r">{feature}</td>
      <td className="border-r text-center">
        <div className="flex justify-center items-center">{lite}</div>
      </td>
      <td className="border-r text-center">
        <div className="flex justify-center items-center">{premium}</div>
      </td>
      <td className="border-r text-center">
        <div className="flex justify-center items-center">{extra}</div>
      </td>
    </tr>
  );
};

const PriceFormatted = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currency: "NGN",
  }).format(price);

  return <>{formattedPrice}</>;
};

const priceSwitchVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
  },
};

const ComparisonTable = ({
  comparisonPlans,
  lite,
  premium,
  extra,
  isEmailHosting,
}) => {
  const [selectedSize, setSelectedSize] = useState("8gb");

  const liteSizes = {
    price: {
      "8gb": lite.price[0]["8gb"],
      "25gb": lite.price[0]["25gb"],
    },
  };
  const premiumSizes = {
    price: {
      "8gb": premium.price[0]["8gb"],
      "25gb": premium.price[0]["25gb"],
      "50gb": premium.price[0]["50gb"],
    },
  };
  const extraSizes = {
    price: {
      "8gb": extra.price[0]["8gb"],
      "25gb": extra.price[0]["25gb"],
      "50gb": extra.price[0]["50gb"],
      "100gb": extra.price[0]["100gb"],
    },
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <div className="md:flex justify-center px-8 lg:px-28 py-28 bg-sky hidden">
        <table className="table-fixed w-full border-collapse border-0 bg-white rounded-3xl pb-32">
          <thead>
            <tr>
              <th className="border-0 invisible">Extensions (TLD)</th>
              <th className="border border-t-0">{lite.name}</th>
              <th className="border border-t-0">{premium.name}</th>
              <th className="border border-t-0">{extra.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border-0 invisible">Extensions (TLD)</td>
              <td className="border">
                <div className="p-8">
                  <p className="mb-2">Starting at:</p>
                  <div>
                    {isEmailHosting ? (
                      <AnimatePresence mode="wait">
                        <motion.h2
                          key={liteSizes.price[selectedSize]}
                          className="mb-4 text-domain text-2xl font-bold"
                          variants={priceSwitchVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          ₦{liteSizes.price[selectedSize]}
                          <span>/mo</span>
                        </motion.h2>
                      </AnimatePresence>
                    ) : (
                      <h2 className="mb-4 text-domain text-2xl font-bold">
                        ₦{lite.price}
                        <span>/mo</span>
                      </h2>
                    )}
                  </div>
                  <div>
                    <Link href="/new">
                      <ButtonV2 text="Order" />
                    </Link>
                  </div>
                  {isEmailHosting && (
                    <div className="flex justify-between pt-6">
                      {Object.keys(liteSizes.price).map((size) => (
                        <p
                          key={size}
                          onClick={() => handleSizeClick(size)}
                          className={`font-bold cursor-pointer ${
                            selectedSize === size && "text-domain underline"
                          }`}
                        >
                          {size}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </td>
              <td className="default border">
                <div className="p-8">
                  <p className="mb-2">Starting at:</p>
                  <div>
                    {isEmailHosting ? (
                      <AnimatePresence mode="wait">
                        <motion.h2
                          key={premiumSizes.price[selectedSize]}
                          className="mb-4 text-domain text-2xl font-bold"
                          variants={priceSwitchVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          ₦
                          <PriceFormatted
                            price={premiumSizes.price[selectedSize]}
                          />
                          <span>/mo</span>
                        </motion.h2>
                      </AnimatePresence>
                    ) : (
                      <h2 className="mb-4 text-domain text-2xl font-bold">
                        ₦{premium.price}
                        <span>/mo</span>
                      </h2>
                    )}
                  </div>
                  <div>
                    <Link href="/new">
                      <ButtonV2 text="Order" />
                    </Link>
                  </div>
                  {isEmailHosting && (
                    <div className="flex justify-between pt-6">
                      {Object.keys(premiumSizes.price).map((size) => (
                        <p
                          key={size}
                          onClick={() => handleSizeClick(size)}
                          className={`font-bold cursor-pointer ${
                            selectedSize === size && "text-domain underline"
                          }`}
                        >
                          {size}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </td>
              <td className="border">
                <div className="p-8">
                  <p className="mb-2">Starting at:</p>
                  <div>
                    {isEmailHosting ? (
                      <AnimatePresence mode="wait">
                        <motion.h2
                          key={premiumSizes.price[selectedSize]}
                          className="mb-4 text-domain text-2xl font-bold"
                          variants={priceSwitchVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          ₦
                          <PriceFormatted
                            price={premiumSizes.price[selectedSize]}
                          />
                          <span>/mo</span>
                        </motion.h2>
                      </AnimatePresence>
                    ) : (
                      <h2 className="mb-4 text-domain text-2xl font-bold">
                        ₦{extra.price}
                        <span>/mo</span>
                      </h2>
                    )}
                  </div>
                  <div>
                    <Link href="/new">
                      <ButtonV2 text="Order" />
                    </Link>
                  </div>
                  {isEmailHosting && (
                    <div className="flex justify-between pt-6">
                      {Object.keys(premiumSizes.price).map((size) => (
                        <p
                          key={size}
                          onClick={() => handleSizeClick(size)}
                          className={`font-bold cursor-pointer ${
                            selectedSize === size && "text-domain underline"
                          }`}
                        >
                          {size}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </td>
            </tr>
            {comparisonPlans.map((item, index) => (
              <FeatureRow
                key={index}
                feature={item.feature}
                lite={item.lite}
                premium={item.premium}
                extra={item.extra}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="block md:hidden">
        <MobileComparisonTable
          comparisonPlans={comparisonPlans}
          lite={lite}
          premium={premium}
          extra={extra}
          isEmailHosting={isEmailHosting}
        />
      </div>
    </>
  );
};

export default ComparisonTable;
