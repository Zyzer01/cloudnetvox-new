"use client";
import ButtonV2 from "./ui/ButtonV2";
import Link from "next/link";
import "../styles/table.css";
import { useState } from "react";
import { ImCheckmark } from "react-icons/im";

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

const MobileComparisonTable = ({ lite, premium, extra, comparisonPlans, isEmailHosting }) => {
  const [activeTab, setActiveTab] = useState("Premium");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const options = ["Lite", "Premium", "Extra"];

  const buttonStyle = {
    padding: "8px 12px",
    backgroundColor: "white",
    border: "1px solid #103dbe",
    color: "#103dbe",
    hover: "drop-shadow-md",
    transition: "ease-in-out duration-300",
    fontMedium: "font-medium",
    borderRadius: "50px",
  };

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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
                      {/* {isEmailHosting ? (
                        <h2 className="mb-4 text-domain text-2xl font-bold">
                          <span className="">/mo</span>
                        </h2>
                      ) : ( */}
                        <h2 className="mb-4 text-domain text-2xl font-bold">
                          ₦{lite.price}
                          <span className="">/mo</span>
                        </h2>
                      {/* )} */}
                    </div>
                    <div className="">
                      <Link href="/new">
                        <ButtonV2 text="Order" />
                      </Link>
                    </div>
                  </div>
                </td>
              )}
              {activeTab === "Premium" && (
                <td className="default border">
                  <div className="py-4">
                    <p className="mb-2">Starting at:</p>
                    <div>
                      {/* {isEmailHosting ? (
                        <h2 className="mb-4 text-domain text-2xl font-bold">
                          <span className="">/mo</span>
                        </h2>
                      ) : ( */}
                        <h2 className="mb-4 text-domain text-2xl font-bold">
                          ₦{premium.price}
                          <span className="">/mo</span>
                        </h2>
                      {/* )} */}
                    </div>
                    <div className="">
                      <Link href="/new">
                        <ButtonV2 text="Order" />
                      </Link>
                    </div>
                  </div>
                </td>
              )}
              {activeTab === "Extra" && (
                <td className="border">
                  <div className="py-4">
                    <p className="mb-2">Starting at:</p>
                    <div>
                      {/* {isEmailHosting ? (
                        <h2 className="mb-4 text-domain text-2xl font-bold">
                          <span className="">/mo</span>
                        </h2>
                      ) : ( */}
                        <h2 className="mb-4 text-domain text-2xl font-bold">
                          ₦{extra.price}
                          <span className="">/mo</span>
                        </h2>
                      {/* )} */}
                    </div>
                    <div className="">
                      <Link href="/new">
                        <ButtonV2 text="Order" />
                      </Link>
                    </div>
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
