import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const plans = [
  {
    name: 'Lite',
    price: '₦999',
    url: 'https://cloudnetvox.com/clients/cart.php?a=add&pid=30',
    features: [
      'Up to 10000 visits per month',
      'Free Domain Reg',
      '1 website',
      '5 GB Disk Space',
      'Daily Backups',
      '10 Email Accounts',
      'Easy Website Builder',
      '10 GB Monthly Bandwidth',
      'Transferable Sites',
      'Uptime: 99.9%',
      'Imported SSL',
      '1 FTP Account',
      '24/7 Phone Support',
      'Unlimited Subdomains',
      'Dev, Stage, Prod: Not Available',
      'Max Database: 3',
      'PHP Update Ready',
      '3 Subdomains',
      'Global CDN',
      '3 Parked Domains',
      'SSL certificates',
      'Multisite ready: Not Available',
      'GeoTarget: Add On',
      'Content Performance: Not Available',
      'Readiness Assessment: Available',
    ],
  },
  {
    name: 'Premium',
    price: '₦1000',
    url: 'https://cloudnetvox.com/clients/cart.php?a=add&pid=30',
    features: [
      'Up to 10000 visits per month',
      'Free Domain Reg',
      '1 website',
      '5 GB Disk Space',
      'Daily Backups',
      '10 Email Accounts',
      'Easy Website Builder',
      '10 GB Monthly Bandwidth',
      'Transferable Sites',
      'Uptime: 99.9%',
      'Imported SSL',
      '1 FTP Account',
      '24/7 Phone Support',
      'Unlimited Subdomains',
      'Dev, Stage, Prod: Not Available',
      'Max Database: 3',
      'PHP Update Ready',
      '3 Subdomains',
      'Global CDN',
      '3 Parked Domains',
      'SSL certificates',
      'Multisite ready: Not Available',
      'GeoTarget: Add On',
      'Content Performance: Not Available',
      'Readiness Assessment: Available',
    ],
  },
  {
    name: 'Extra',
    price: '₦2000',
    url: 'https://cloudnetvox.com/clients/cart.php?a=add&pid=30',
    features: [
      'Up to 10000 visits per month',
      'Free Domain Reg',
      '1 website',
      '5 GB Disk Space',
      'Daily Backups',
      '10 Email Accounts',
      'Easy Website Builder',
      '10 GB Monthly Bandwidth',
      'Transferable Sites',
      'Uptime: 99.9%',
      'Imported SSL',
      '1 FTP Account',
      '24/7 Phone Support',
      'Unlimited Subdomains',
      'Dev, Stage, Prod: Not Available',
      'Max Database: 3',
      'PHP Update Ready',
      '3 Subdomains',
      'Global CDN',
      '3 Parked Domains',
      'SSL certificates',
      'Multisite ready: Not Available',
      'GeoTarget: Add On',
      'Content Performance: Not Available',
      'Readiness Assessment: Available',
    ],
  },
];

const ComparisonTable = () => {
  return (
    <table className="w-full table-fixed border-collapse">
      <thead>
        <tr>
          <th className="border border-white hidden">Extensions (TLD)</th>
          {plans.map((plan) => (
            <th key={plan.name} className="border border-white">
              {plan.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {plans[0].features.map((feature, index) => (
          <tr key={index} className="text-center border border-white flex">
            <td>{feature}</td>
            {plans.map((plan) => (
              <td key={plan.name} className="border border-white">
                {plan.features[index] === '.' ? '.' : <FaCheck />}
                <p>{plan.price}</p>
              </td>
            ))}
          </tr>
        ))}
        <tr className="text-center border border-white">
          <td>Extensions (TLD)</td>
          {plans.map((plan) => (
            <td key={plan.name} className="border border-white invisible">
              {plan.features[0]}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ComparisonTable;
