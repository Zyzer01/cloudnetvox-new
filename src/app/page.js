"use client";
import Hero from "@/components/Hero";
import DomainSearchBox from "@/components/DomainSearchBox";
import Partners from "@/components/Partners";
import Spacer from "@/components/Spacer";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CtaWithList from "@/components/CtaWithList";
import RegularCta from "@/components/RegularCta";
import Reviews from "@/components/Reviews";
import AwardBadge from "@/components/AwardBadge";
import BeforeFooter from "@/components/BeforeFooter";
import { motion } from "framer-motion";
import ctaImageSrc0 from "public/images/man standing on server.png";
import ctaImageSrc1 from "public/images/animation people sitting on server.png";
import ctaImageSrc2 from "public/images/sitting on drive and server people with laptop.png";
import ctaImageSrc3 from "public/images/world wide web and cloud.png";
import ScrollingBanner from "@/components/ScrollingBanner";
import { card, featureContent } from "@/utility/items";

const Home = () => {
  const ctaListItems = [
    "FREE Domain Name for 1st Year",
    "FREE Email Address",
    "Plenty of Disk Space",
    "FREE Website Builder",
    "FREE Marketing Tools",
    "1-Click WordPress Install",
  ];

  return (
    <motion.main
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      {/* <ScrollingBanner /> */}
      <Hero />
      <DomainSearchBox enableAnimation />
      <Spacer />
      <Partners />
      <Spacer />
      <Features
        heading="Overall Features"
        sub="Our revolutionary Cloud solution is powerful, simple, and surprisingly affordable."
        featureContent={featureContent}
      />
      <Spacer />
      <Pricing
        showBadge
        card={card}
        heading="Choose Your Web Hosting Plan"
        sub="You want custom hosting plan. No hidden charge."
        option1="Monthly"
        option2="Yearly"
      />
      <Spacer />
      <CtaWithList
        ctaHeading="Up to 30% Discount with FREE Domain Name Registration Included!"
        ctaListItems={ctaListItems}
        buttonText="Get Started Now!"
        ctaImageSrc={ctaImageSrc0}
        altText="Man standing on server"
      />
      <RegularCta
        heading="99% Cloud Hosting High-speed Cutting-edge Platform"
        description="All businesses can utilize cloud hosting due to a variety of reasons. Firstly, the fresh start-up ones can benefit from it due to the minimal upfront costs. When you are launching a new business from scratch, your primary target includes getting the website up and running. Having a fast and cost-effective solution like CloudNetvox's cloud hosting can provide such new companies with a strong start."
        buttonText="Learn more"
        isReversed={true}
        ctaImageSrc={ctaImageSrc1}
        link="/new"
        showButton
      />
      <RegularCta
        heading="More Speed Less Downtime"
        description="Nowadays, most websites are vulnerable to unpredictable crashes and thus more prone to unprecedented downtimes too At CloudNetvox, We ensure Integrated Caching, Resource Management, Automated Failover, Data Mirroring, and Stabilty!"
        buttonText="Learn more"
        ctaImageSrc={ctaImageSrc2}
        link="/new"
        showButton
      />
      <div className="bg-primary text-white">
        <RegularCta
          heading="Best Cloud Hosting With Trusted Service"
          description="The freedom of accessibility can bring some threats along with the perks. The cybercriminals are now fully prepared to attack any vulnerable website and gain personal profits from it. Trust CloudNetvox to protect you from being vulnerable."
          buttonText="Learn more"
          isReversed={true}
          ctaImageSrc={ctaImageSrc3}
          darkBg={true}
          link="/new"
          showButton
        />
      </div>
      <Spacer />
      {/* <Reviews /> */}
      <Spacer />
      <AwardBadge />
      <BeforeFooter />
    </motion.main>
  );
};

export default Home;
