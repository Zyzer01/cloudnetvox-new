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
  liteSizes,
  premiumSizes,
  extraSizes,
}) => {
  const [selectedSizeLite, setSelectedSizeLite] = useState("8gb");
  const [selectedSizePremium, setSelectedSizePremium] = useState("8gb");
  const [selectedSizeExtra, setSelectedSizeExtra] = useState("8gb");

  const handleSizeClickLite = (size) => {
    setSelectedSizeLite(size);
  };
  const handleSizeClickPremium = (size) => {
    setSelectedSizePremium(size);
  };
  const handleSizeClickExtra = (size) => {
    setSelectedSizeExtra(size);
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
                          onClick={() => handleSizeClickLite(size)}
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
              <td className="default border">
                <div className="p-8">
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
                          onClick={() => handleSizeClickPremium(size)}
                          className={`font-bold cursor-pointer ${
                            selectedSizePremium === size &&
                            "text-domain underline"
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
                  <div>
                    <Link href="/new">
                      <ButtonV2 text="Order" />
                    </Link>
                  </div>
                  {isEmailHosting && (
                    <div className="flex justify-between pt-6">
                      {Object.keys(extraSizes.price).map((size) => (
                        <p
                          key={size}
                          onClick={() => handleSizeClickExtra(size)}
                          className={`font-bold cursor-pointer ${
                            selectedSizeExtra === size &&
                            "text-domain underline"
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
          liteSizes={liteSizes}
          premiumSizes={premiumSizes}
          extraSizes={extraSizes}
          selectedSizeLite={selectedSizeLite}
          selectedSizePremium={selectedSizePremium}
          selectedSizeExtra={selectedSizeExtra}
          isEmailHosting={isEmailHosting}
          priceSwitchVariants={priceSwitchVariants}
          clickFunction={{
            lite: handleSizeClickLite,
            premium: handleSizeClickPremium,
            extra: handleSizeClickExtra,
          }}
        />
      </div>
    </>
  );
};

export default ComparisonTable;
