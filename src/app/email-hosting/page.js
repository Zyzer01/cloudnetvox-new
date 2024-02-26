"use client";
import AltHero from "@/components/AltHero";
import ComparisonTable from "@/components/ComparisonTable";
import Spacer from "@/components/Spacer";
import PricingWithIcon from "@/components/PricingWithIcon";
import BeforeFooter from "@/components/BeforeFooter";
import RegularCta from "@/components/RegularCta";
import ctaImageSrc0 from "public/images/email hosting.jpg";
import ctaImageSrc1 from "public/images/email capture.jpg";
import {
  emailComparisonPlans,
  emailExtraSizes,
  emailLiteSizes,
  emailPremiumSizes,
  emailPricingCards,
} from "@/utility/items";
import data from "../../data/prices.json";

const email = data.emailHosting;

const EmailHosting = () => {
  return (
    <main>
      <AltHero
        pageTitle="Email Hosting"
        pageSub="Secure and professional email"
        breadcrumb="Email Hosting"
      />
      <Spacer />
      <PricingWithIcon
        isWithToggle
        pricingCards={emailPricingCards}
        heading="Choose Your Email Hosting Plan"
        sub="Empower your inbox, select the perfect Email Hosting plan for seamless communication!."
        buttonText="Order Now"
      />
      <Spacer />
      <ComparisonTable
        comparisonPlans={emailComparisonPlans}
        lite={email.lite}
        premium={email.premium}
        extra={email.extra}
        liteSizes={emailLiteSizes}
        premiumSizes={emailPremiumSizes}
        extraSizes={emailExtraSizes}
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
    </main>
  );
};

export default EmailHosting;
