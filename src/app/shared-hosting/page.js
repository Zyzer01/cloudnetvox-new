"use client";
import AltHero from "@/components/AltHero";
import ComparisonTable from "@/components/ComparisonTable";
import PackedCta from "@/components/PackedCta";
import Spacer from "@/components/Spacer";
import Image from "next/image";
import Faq from "@/components/Faq";
import PricingWithIcon from "@/components/PricingWithIcon";
import ctaImageSrc0 from "public/images/shared hosting.png";
import RegularCta from "@/components/RegularCta";
import {
  guaranteeBox,
  sharedComparisonPlans,
  sharedPricingCards,
  sharedQuestionContent,
} from "@/utility/items";
import data from "../../data/prices.json";

const shared = data.sharedHosting;

export default function SharedHosting() {
  const ctaContent = {
    title: "Our Guarantees",
    sub: "High performance dedicated servers with cloud flexibility and scalability.",
    desc: "We guarantee you 99.9% server uptime, steady backups, support if you have any issues 24/7, if you feel you aren&apos;t satisfied, we pledge a 30 Day money back guarantee.",
  };

  return (
    <main>
      <AltHero
        pageTitle="Shared Hosting"
        pageSub="Powerful Cloud servers built from scratch with SSD storage"
        breadcrumb="Shared Hosting"
      />
      <Spacer />
      <PricingWithIcon
        isWithToggle
        pricingCards={sharedPricingCards}
        heading="Choose Your Shared Hosting Plan"
        sub="Start your online journey with our shared hosting — reliable, affordable, and perfect for getting your website up and running."
        buttonText="Order Now"
      />
      <Spacer />
      <ComparisonTable
        comparisonPlans={sharedComparisonPlans}
        lite={shared.lite}
        premium={shared.premium}
        extra={shared.extra}
      />
      <Spacer />
      <RegularCta
        heading="Simplified Hosting Management"
        description="Simplify your website management with our cPanel hosting plans! Unlock the power of the Softaculous Apps Installer – your go-to solution for one-click installations of popular web applications like phpBB, Joomla, WordPress, and more. Effortless and efficient web hosting at your fingertips!"
        buttonText="Get Started"
        ctaImageSrc={ctaImageSrc0}
        link="/new"
      />
      <Spacer />
      <div>
        <div className="bg-sky py-16">
          <PackedCta
            title={ctaContent.title}
            sub={ctaContent.sub}
            desc={ctaContent.desc}
            guaranteeBox={guaranteeBox}
          />
        </div>
        <div className="welcome-pattern -mt-8 md:-mt-16 w-full">
          <Image
            className="w-full"
            width={2000}
            height={2000}
            src={"/images/welcome-pattern.png"}
            alt="zig zag clouds illustration"
          />
        </div>
      </div>

      <Faq questionContent={sharedQuestionContent} />
    </main>
  );
}
