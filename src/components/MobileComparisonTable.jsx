"use client";
import ButtonV2 from "./ui/ButtonV2";
import Link from "next/link";
import "../styles/table.css";
import { useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

const FeatureRow = ({ feature, lite, premium, extra, activeTab }) => {
  return (
    <tr className="pb-24">
      <td className="border-r">{feature}</td>
      {activeTab === "Lite" && (
        <td className="flex justify-center items-center">{lite}</td>
      )}
      {activeTab === "Premium" && (
        <td className="flex justify-center items-center">{premium}</td>
      )}
      {activeTab === "Extra" && (
        <td className="flex justify-center items-center">{extra}</td>
      )}
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

const MobileComparisonTable = ({
  lite,
  premium,
  extra,
  liteSizes,
  premiumSizes,
  extraSizes,
  selectedSizeLite,
  selectedSizePremium,
  selectedSizeExtra,
  comparisonPlans,
  isEmailHosting,
  priceSwitchVariants,
  clickFunction
}) => {
  const [activeTab, setActiveTab] = useState("Premium");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const options = ["Lite", "Premium", "Extra"];

  return (
    <>
      <div className="flex space-x-4 justify-center mb-8">
        {options.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-3 border border-domain text-domain hover:drop-shadow-md transition ease-in-out duration-300 font-medium rounded-full ${
              activeTab === tab
                ? "bg-domain text-white font-medium hover:bg-domain"
                : "md:hover:bg-domain md:hover:text-white"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex justify-center px-8 py-16 bg-sky">
        <table className="table-fixed w-full border-collapse border-0 bg-white rounded-3xl">
          <thead>
            <tr>
              <th className="border-0 invisible">Extensions (TLD)</th>
              {activeTab === "Lite" && (
                <th className="border border-t-0">{lite.name}</th>
              )}
              {activeTab === "Premium" && (
                <th className="border border-t-0">{premium.name}</th>
              )}
              {activeTab === "Extra" && (
                <th className="border border-t-0">{extra.name}</th>
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border-0 invisible">Extensions (TLD)</td>
              {activeTab === "Lite" && (
                <td className="border">
                  <div className="py-4">
                    <p className="mb-2">Starting at:</p>
                    <div>
                      {isEmailHosting ? (
                        <AnimatePresence mode="wait">
                          <motion.h2
                            key={liteSizes.price[selectedSizeLite]}
                            className="mb-4 text-domain text-2xl font-bold"
                            variants={priceSwitchVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            ₦
                            <PriceFormatted
                              price={liteSizes.price[selectedSizeLite]}
                            />
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
                    <div className="">
                      <Link href="/new">
                        <ButtonV2 text="Order" />
                      </Link>
                    </div>
                    {isEmailHosting && (
                    <div className="flex justify-between pt-6">
                      {Object.keys(liteSizes.price).map((size) => (
                        <p
                          key={size}
                          onClick={() => clickFunction.lite(size)}
                          className={`font-bold cursor-pointer ${
                            selectedSizeLite === size && "text-domain underline"
                          }`}
                        >
                          {size}
                        </p>
                      ))}
                    </div>
                  )}
                  </div>
                </td>
              )}
              {activeTab === "Premium" && (
                <td className="default border">
                  <div className="py-4">
                    <p className="mb-2">Starting at:</p>
                    <div>
                      {isEmailHosting ? (
                        <AnimatePresence mode="wait">
                          <motion.h2
                            key={premiumSizes.price[selectedSizePremium]}
                            className="mb-4 text-domain text-2xl font-bold"
                            variants={priceSwitchVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            ₦
                            <PriceFormatted
                              price={premiumSizes.price[selectedSizePremium]}
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
                    <div className="">
                      <Link href="/new">
                        <ButtonV2 text="Order" />
                      </Link>
                    </div>
                    {isEmailHosting && (
                    <div className="flex justify-between pt-6">
                      {Object.keys(premiumSizes.price).map((size) => (
                        <p
                          key={size}
                          onClick={() => clickFunction.premium(size)}
                          className={`font-bold cursor-pointer ${
                            selectedSizePremium === size && "text-domain underline"
                          }`}
                        >
                          {size}
                        </p>
                      ))}
                    </div>
                  )}
                  </div>
                </td>
              )}
              {activeTab === "Extra" && (
                <td className="border">
                  <div className="py-4">
                    <p className="mb-2">Starting at:</p>
                    <div>
                      {isEmailHosting ? (
                        <AnimatePresence mode="wait">
                          <motion.h2
                            key={extraSizes.price[selectedSizeExtra]}
                            className="mb-4 text-domain text-2xl font-bold"
                            variants={priceSwitchVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            ₦
                            <PriceFormatted
                              price={extraSizes.price[selectedSizeExtra]}
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
                    <div className="">
                      <Link href="/new">
                        <ButtonV2 text="Order" />
                      </Link>
                    </div>
                    {isEmailHosting && (
                    <div className="flex justify-between pt-6">
                      {Object.keys(extraSizes.price).map((size) => (
                        <p
                          key={size}
                          onClick={() => clickFunction.extra(size)}
                          className={`font-bold cursor-pointer ${
                            selectedSizeExtra === size && "text-domain underline"
                          }`}
                        >
                          {size}
                        </p>
                      ))}
                    </div>
                  )}
                  </div>
                </td>
              )}
            </tr>

            {comparisonPlans.map((item, index) => (
              <FeatureRow
                key={index}
                feature={item.feature}
                lite={item.lite}
                premium={item.premium}
                extra={item.extra}
                activeTab={activeTab}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MobileComparisonTable;
