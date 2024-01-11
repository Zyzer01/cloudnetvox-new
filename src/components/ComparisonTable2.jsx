'use client';
import { useContext } from 'react';
import ButtonV2 from './ui/ButtonV2';
import Link from 'next/link';
import { DomainContext } from '@/context/DomainContext';
import '../styles/table.css';
import { ImCheckmark } from "react-icons/im";

const FeatureRow = ({ feature, lite, premium, extra }) => {
  return (
    <tr className="">
      <td className='border-r '>{feature}</td>
      <td className='border-r text-center'>{lite}</td>
      <td className="default border-r text-center">{premium}</td>
      <td>{extra}</td>
    </tr>
  );
};

const plans = [
  {
    feature: 'Visits per month',
    lite: 'Up to 10000',
    premium: 'Up to 50000',
    extra: 'Unlimited',
  },
  {
    feature: 'Free Domain Reg',
    lite: <ImCheckmark />,
    premium: <ImCheckmark />,
    extra: <ImCheckmark />,
  },
  {
    feature: 'Visits per month',
    lite: 'Up to 10000',
    premium: 'Up to 50000',
    extra: 'Unlimited',
  },
  {
    feature: 'Visits per month',
    lite: 'Up to 10000',
    premium: 'Up to 50000',
    extra: 'Unlimited',
  },
  {
    feature: 'Visits per month',
    lite: 'Up to 10000',
    premium: 'Up to 50000',
    extra: 'Unlimited',
  },
  {
    feature: 'Visits per month',
    lite: 'Up to 10000',
    premium: 'Up to 50000',
    extra: 'Unlimited',
  },
];

const ComparisonTable2 = () => {
  const contextValues = useContext(DomainContext);

  const { webHostingPrices } = contextValues;

  const [lite, premium, extra] = webHostingPrices;

  return (
    <div className="flex justify-center p-16 md:p-28 bg-sky" id='#Comprison_pricingplan'>
      <table className="table-fixed w-full border-collapse border-0 bg-white rounded-3xl pb-32">
        <thead>
          <tr>
            <th className="border-0 invisible">
              Extensions (TLD)
            </th>
            <th className="border border-t-0">
              {lite.name}
            </th>
            <th className="border border-t-0">
              {premium.name}
            </th>
            <th className="border border-t-0">
              {extra.name}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-center'>
            <td className="border-0 invisible">Extensions (TLD)</td>
            <td className='border'>
              <div className="p-8">
                <p className="mb-2">Starting at:</p>
                <div>
                  <h2 className="mb-3">
                    ₦{lite.price}
                    <span className="">/mo</span>
                  </h2>
                </div>
                <div className="reseller-table-plan-box-button">
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
            <td className='border'>
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
              lite={item.lite}
              premium={item.premium}
              extra={item.extra}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable2;
