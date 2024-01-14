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
import RegularCta from '@/components/RegularCta';
import ctaImageSrc0 from "public/images/email hosting.jpg";
import ctaImageSrc1 from "public/images/email capture.jpg";
import ctaImageSrc2 from "public/images/email capture.jpg";


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
  const liteSizes = {
    price: {
      "8gb": q.lite.price[0]["8gb"],
      "25gb": q.lite.price[0]["25gb"],
    },
  };
  const premiumSizes = {
    price: {
      "8gb": q.premium.price[0]["8gb"],
      "25gb": q.premium.price[0]["25gb"],
      "50gb": q.premium.price[0]["50gb"],
    },
  };
  const extraSizes = {
    price: {
      "8gb": q.extra.price[0]["8gb"],
      "25gb": q.extra.price[0]["25gb"],
      "50gb": q.extra.price[0]["50gb"],
      "100gb": q.extra.price[0]["100gb"],
    },
  };

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
          liteSizes={liteSizes}
          premiumSizes={premiumSizes}
          extraSizes={extraSizes}
          isEmailHosting
        />
        <Spacer />
        <RegularCta
          heading="Personal and Shared Calendars"
          description="Generate additional calendars beyond the default ones and decide whether to share them with your colleagues, tailoring the organizational management to fit your company's needs."
          buttonText="Get Started"
          ctaImageSrc={ctaImageSrc0}
          link="/new"
          isReversed
        />
        <RegularCta
          heading="Sync across all your devices"
          description="It ensures smooth synchronization of emails, contacts, and calendars across all your devices, guaranteeing constant access to the most up-to-date information, regardless of your location."
          buttonText="Get Started"
          ctaImageSrc={ctaImageSrc1}
          link="/new"
        />

        <BeforeFooter />
    </ComponentWrapper>
  );
};

export default EmailHosting;
