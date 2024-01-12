"use client";
import ButtonV2 from "./ui/ButtonV2";
import Link from "next/link";
import "../styles/table.css";

const FeatureRow = ({ feature, lite, premium, extra }) => {
  return ( 
    <tr className="">
      <td className="border-r">{feature}</td>
      <td className="border-r text-center">{lite}</td>
      <td className="border-r text-center">{premium}</td>
      <td>{extra}</td>
    </tr>
  );
};  

const ComparisonTable = ({comparisonPlans, lite, premium, extra}) => {

  return (
    <> 
      <div className="flex justify-center mb-8 md:hidden">
        <button className="active-btn">Lite</button>
        <button className="active-btn">Premium</button>
        <button className="active-btn">Extra</button>
      </div>
      <div className="flex justify-center p-8 md:p-28 bg-sky">
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
    </>
  );
};

export default ComparisonTable;
