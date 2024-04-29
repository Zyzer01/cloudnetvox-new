"use client";
import AltHero from "@/components/AltHero";
import DomainSearchBox from "@/components/DomainSearchBox";
import PricingWithIcon from "@/components/PricingWithIcon";
import Spacer from "@/components/Spacer";
import Image from "next/image";
import Faq from "@/components/Faq";
import RegularCta from "@/components/RegularCta";
import ctaImageSrc0 from "public/images/web search concept illustration.jpg";
import DomainList from "@/components/DomainList";
import Features from "@/components/Features";
import {
  domainsFaq,
  domainsFeatureContent,
  domainsPricingCards,
} from "@/utility/items";


export default function Domains() {
  return (
    <div>
      <main>
        <AltHero
          pageTitle="Choose Your Perfect Domain Name"
          pageSub="We'll make sure you find the right domain and that it's got a secure home online."
          breadcrumb="Domains"
        />
        <Spacer />
        <DomainSearchBox />
        <Spacer />
        <PricingWithIcon
          heading="Explore Unique Domain Names"
          sub="Curated domains to elevate your online presence."
          pricingCards={domainsPricingCards}
          buttonText="Check Availability"
        />
        <Spacer />
        <Features
          heading="What to expect"
          sub="Discover the Rich Experience that Awaits You in Our Domain World"
          featureContent={domainsFeatureContent}
        />
        <DomainList />
        <div>
          <div className="bg-sky py-16">
            <RegularCta
              heading="Full Domain Management"
              description="Simplify your online presence with our comprehensive domain management services. From registration to renewal,
            we handle every aspect, ensuring your domains are secure, accessible, and seamlessly integrated with your web hosting.
            Focus on your business while we take care of your domain needs."
              buttonText="Get Started"
              ctaImageSrc={ctaImageSrc0}
              link="/new"
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
        <Faq questionContent={domainsFaq} />
      </main>
    </div>
  );
}
