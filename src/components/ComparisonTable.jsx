"use client";
import ButtonV2 from "./ui/ButtonV2";
import Link from "next/link";
import "../styles/table.css";
import MobileComparisonTable from "./MobileComparisonTable";

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

const ComparisonTable = ({ comparisonPlans, lite, premium, extra, isEmailHosting }) => {
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
                      <h2 className="mb-4 text-domain text-2xl font-bold">
                        <span className="">/mo</span>
                      </h2>
                    ) : (
                      <h2 className="mb-4 text-domain text-2xl font-bold">
                        ₦{lite.price}
                        <span className="">/mo</span>
                      </h2>
                    )}
                  </div>
                  <div className="">
                    <Link href="/new">
                      <ButtonV2 text="Order" />
                    </Link>
                  </div>
                </div>
              </td>
              <td className="default border">
                <div className="p-8">
                  <p className="mb-2">Starting at:</p>
                  <div>
                  {isEmailHosting ? (
                      <h2 className="mb-4 text-domain text-2xl font-bold">
                        <span className="">/mo</span>
                      </h2>
                    ) : (
                      <h2 className="mb-4 text-domain text-2xl font-bold">
                        ₦{premium.price}
                        <span className="">/mo</span>
                      </h2>
                    )}
                  </div>
                  <div className="">
                    <Link href="/new">
                      <ButtonV2 text="Order" />
                    </Link>
                  </div>
                </div>
              </td>
              <td className="border">
                <div className="p-8">
                  <p className="mb-2">Starting at:</p>
                  <div>
                  {isEmailHosting ? (
                      <h2 className="mb-4 text-domain text-2xl font-bold">
                        <span className="">/mo</span>
                      </h2>
                    ) : (
                      <h2 className="mb-4 text-domain text-2xl font-bold">
                        ₦{extra.price}
                        <span className="">/mo</span>
                      </h2>
                    )}
                  </div>
                  <div className="">
                    <Link href="/new">
                      <ButtonV2 text="Order" />
                    </Link>
                  </div>
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
          // isEmailHosting={isEmailHosting}
        />
      </div>
    </>
  );
};

export default ComparisonTable;
