'use client';
import { useContext } from 'react';
import ButtonV2 from './ui/ButtonV2';
import Link from 'next/link';
import { DomainContext } from '@/context/DomainContext';
import '../styles/table.css';

const FeatureRow = ({ feature, lite, premium, extra }) => {
  return (
    <tr className="p-24 mb-6">
      <td>{feature}</td>
      <td>{lite}</td>
      <td className="default">{premium}</td>
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
  {
    feature: 'Visits per month',
    lite: 'Up to 10000',
    premium: 'Up to 50000',
    extra: 'Unlimited',
  },
];

const ComparisonTable2 = () => {
  const contextValues = useContext(DomainContext);

  const { domainPrices, hostingPrices } = contextValues;

  const [lite, premium, extra] = hostingPrices;

  return (
    <div className="flex justify-center p-16 md:p-28">
      <table className="table-fixed w-full border-collapse border">
        <thead className="border-collapse border-spacing-0 border">
          <tr>
            <th scope="col" className="border-t-0 border-r-0 invisible">
              Extensions (TLD)
            </th>
            <th scope="col" className="border-t-0">
              {lite.name}
            </th>
            <th scope="col" className="border-t-0">
              {premium.name}
            </th>
            <th scope="col" className="border-t-0">
              {extra.name}
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="text-center">
            <td className="border-t-0 border-b-0 border-r-0 pt-0 invisible">Extensions (TLD)</td>
            <td className="rounded-0">
              <div className="p-16">
                <p className="reseller-table-plan-box-paragraph mb-2">Starting at:</p>
                <div>
                  <h2 className="mb-3">
                    ₦{lite.price}
                    <span className="reseller-table-plan-box-pricing-month">/mo</span>
                  </h2>
                </div>
                <div className="reseller-table-plan-box-button">
                  <Link href="/new">
                    <ButtonV2 text="Order now" />
                  </Link>
                </div>
              </div>
            </td>
            <td className="default">
              <div className="p-16">
                <p className="reseller-table-plan-box-paragraph mb-2">Starting at:</p>
                <div>
                  <h2 className="mb-3">
                    ₦{premium.price}
                    <span className="reseller-table-plan-box-pricing-month">/mo</span>
                  </h2>
                </div>
                <div className="reseller-table-plan-box-button variation-2">
                  <Link href="/new">
                    <ButtonV2 text="Order now" />
                  </Link>
                </div>
              </div>
            </td>
            <td className="rounded-0">
              <div className="p-16">
                <p className="reseller-table-plan-box-paragraph mb-2">Starting at:</p>
                <div>
                  <h2 className="mb-3">
                    ₦{extra.price}
                    <span className="reseller-table-plan-box-pricing-month">/mo</span>
                  </h2>
                </div>
                <div className="reseller-table-plan-box-button variation-3">
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
