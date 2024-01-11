"use client";
import { useContext, useState } from "react";
import ButtonV2 from "./ui/ButtonV2";
import Link from "next/link";
import { DomainContext } from "@/context/DomainContext";
import "../styles/table.css";
import { ImCheckmark } from "react-icons/im";

const FeatureRow = ({ feature, lite, premium, extra }) => {
  return (
    <tr className="">
      <td className="border-r ">{feature}</td>
      <td className="border-r text-center hidden md:inline-block"> {lite}</td>
      <td className="default border-r text-center">{premium}</td>
      <td>{extra}</td>
    </tr>
  );
};

const plans = [
  {
    feature: "Visits per month",
    lite: "Up to 10000",
    premium: "Up to 50000",
    extra: "Unlimited",
  },
  {
    feature: "Free Domain Reg",
    lite: <ImCheckmark />,
    premium: <ImCheckmark />,
    extra: <ImCheckmark />,
  },
  {
    feature: "Visits per month",
    lite: "Up to 10000",
    premium: "Up to 50000",
    extra: "Unlimited",
  },
  {
    feature: "Visits per month",
    lite: "Up to 10000",
    premium: "Up to 50000",
    extra: "Unlimited",
  },
  {
    feature: "Visits per month",
    lite: "Up to 10000",
    premium: "Up to 50000",
    extra: "Unlimited",
  },
  {
    feature: "Visits per month",
    lite: "Up to 10000",
    premium: "Up to 50000",
    extra: "Unlimited",
  },
];

const ComparisonTable2 = () => {
  const contextValues = useContext(DomainContext);

  const { webHostingPrices } = contextValues;

  const [lite, premium, extra] = webHostingPrices;

  const [selectedPlan, setSelectedPlan] = useState("premium");

  const handlePlanSwitch = (plan) => {
    setSelectedPlan(plan);
  };

  const getPlanData = () => {
    switch (selectedPlan) {
      case "lite":
        return lite;
      case "premium":
        return premium;
      case "extra":
        return extra;
      default:
        return lite; // Default to lite if an invalid plan is selected
    }
  };

  const { name, price } = getPlanData();

  return (
    <>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => handlePlanSwitch("lite")}
          className={selectedPlan === "lite" ? "active-btn" : ""}
        >
          Lite
        </button>
        <button
          onClick={() => handlePlanSwitch("premium")}
          className={selectedPlan === "premium" ? "active-btn" : ""}
        >
          Premium
        </button>
        <button
          onClick={() => handlePlanSwitch("extra")}
          className={selectedPlan === "extra" ? "active-btn" : ""}
        >
          Extra
        </button>
      </div>
      <div className="flex justify-center p-16 md:p-28 bg-sky">
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
                    <h2 className="mb-3">
                      ₦{lite.price}
                      <span className="">/mo</span>
                    </h2>
                  </div>
                  <div className="">
                    <Link href="/new">
                      <ButtonV2 text="Order now" />
                    </Link>
                  </div>
                </div>
              </td>
              <td className="default border">
                <div className="p-8">
                  <p className="mb-2">Starting at:</p>
                  <div>
                    <h2 className="mb-3">
                      ₦{premium.price}
                      <span className="">/mo</span>
                    </h2>
                  </div>
                  <div className="">
                    <Link href="/new">
                      <ButtonV2 text="Order now" />
                    </Link>
                  </div>
                </div>
              </td>
              <td className="border">
                <div className="p-8">
                  <p className="mb-2">Starting at:</p>
                  <div>
                    <h2 className="mb-3">
                      ₦{extra.price}
                      <span className="">/mo</span>
                    </h2>
                  </div>
                  <div className="">
                    <Link href="/new">
                      <ButtonV2 text="Order now" />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
            {plans.map((item, index) => (
              <FeatureRow
                key={index}
                feature={item.feature}
                lite={selectedPlan === "lite" ? item.lite : null}
                premium={selectedPlan === "premium" ? item.premium : null}
                extra={selectedPlan === "extra" ? item.extra : null}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComparisonTable2;
