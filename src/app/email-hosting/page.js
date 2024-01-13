'use client';
import AltHero from '@/components/AltHero';
import ComparisonTable from '@/components/ComparisonTable';
import ComponentWrapper from '@/components/ComponentWrapper';
import Spacer from '@/components/Spacer';
import { ImCheckmark } from "react-icons/im";
import data from "../../data/prices.json";

const q = data.emailHosting;


const EmailHosting = () => {

  const comparisonPlans = [
    {
      feature: "Visits per month",
      lite: "Up to 10000",
      premium: "Up to 50000",
      extra: "Unlimited",
    },
    {
      feature: "Free Domain Reg",
      lite: <ImCheckmark className="text-domain" />,
      premium: <ImCheckmark className="text-domain" />,
      extra: <ImCheckmark className="text-domain" />,
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

  return (
    <ComponentWrapper>
      <AltHero
        pageTitle="Email Hosting"
        pageSub="Secure and professional email"
        breadcrumb="Shared Hosting"
      />
      <Spacer />
      <ComparisonTable
          comparisonPlans={comparisonPlans}
          lite={q.lite}
          premium={q.premium}
          extra={q.extra}
          isEmailHosting
        />
    </ComponentWrapper>
  );
};

export default EmailHosting;
