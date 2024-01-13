'use client';
import AltHero from '@/components/AltHero';
import ComparisonTable from '@/components/ComparisonTable';
import ComponentWrapper from '@/components/ComponentWrapper';
import Spacer from '@/components/Spacer';
import { ImCheckmark } from "react-icons/im";
import data from "../../data/prices.json";
import PricingWithIcon from '@/components/PricingWithIcon';
import { CiServer } from 'react-icons/ci';
import { VscServer } from 'react-icons/vsc';
import { GrServerCluster } from 'react-icons/gr';
import BeforeFooter from '@/components/BeforeFooter';

const q = data.emailHosting;

console.log(q);

const EmailHosting = () => {

  const pricingCards = [
    {
      icon: <CiServer />,
      title: q.lite.name,
      desc: "Basic resources for starter, with only 1 site capacity",
      price: q.lite.price[0]["8gb"],
      link: "#fullFeatures",
    },
    {
      icon: <VscServer />,
      title: q.premium.name,
      desc: "More space and flexibility for multiple sites.",
      price: q.premium.price[0]["8gb"],
      link: "#fullFeatures",
    },
    {
      icon: <GrServerCluster />,
      title: q.extra.name,
      desc: "More space and flexibility for multiple sites.",
      price: q.extra.price[0]["8gb"],
      link: "#fullFeatures",
    },
  ];

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
      <PricingWithIcon
          isWithToggle
          pricingCards={pricingCards}
          heading="Choose Your Email Hosting Plan"
          sub="Empower your inbox, select the perfect Email Hosting plan for seamless communication!."
          buttonText="Order Now"
        />
        <Spacer />
      <ComparisonTable
          comparisonPlans={comparisonPlans}
          lite={q.lite}
          premium={q.premium}
          extra={q.extra}
          isEmailHosting
        />
        <BeforeFooter />
    </ComponentWrapper>
  );
};

export default EmailHosting;
