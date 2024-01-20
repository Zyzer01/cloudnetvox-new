'use client'
import AltHero from "@/components/AltHero";
import PremiumDomainList from "@/components/PremiumDomainList";
import RegularCta from "@/components/RegularCta";
import ctaImageSrc0 from "public/images/girl sitting on domain animation.jpg";
import ctaImageSrc1 from "public/images/users working email hosting.jpg";



const PremiumDomains = () => {
  return (
    <main>
      <AltHero
        pageTitle="Premium Domain Name"
        pageSub="We'll make sure you find the right domain and that it's got a secure home online."
        breadcrumb="Premium Domains"
      />
      <RegularCta
        heading="Elevate Your Online Presence With CloudNetvox!"
        description="Stand out from the crowd with domain names that are memorable, relevant, and distinctly reflective of your brand. A premium domain instantly communicates professionalism and trustworthiness to potential customers, partners, and clients."
        ctaImageSrc={ctaImageSrc0}
      />
      <PremiumDomainList />
      <RegularCta
        heading="Selling a Domain?"
        description="We help clients maximize the value of unused generic domains. Connect with us to assess the worth of your domains, and we'll take care of the sales process."
        buttonText="Contact us"
        ctaImageSrc={ctaImageSrc1}
        link="mailto:info@cloudnetvox.com"
        showButton
      />
    </main>
  );
};

export default PremiumDomains;
