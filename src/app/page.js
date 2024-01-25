"use client";
import { useContext } from "react";
import Hero from "@/components/Hero";
import DomainSearchBox from "@/components/DomainSearchBox";
import Patners from "@/components/Patners";
import Spacer from "@/components/Spacer";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CtaWithList from "@/components/CtaWithList";
import RegularCta from "@/components/RegularCta";
import Reviews from "@/components/Reviews";
import AwardBadge from "@/components/AwardBadge";
import BeforeFooter from "@/components/BeforeFooter";
import { DomainContext } from "@/context/DomainContext";
import { motion } from "framer-motion";
import ctaImageSrc0 from "public/images/man standing on server.png";
import ctaImageSrc1 from "public/images/animation people sitting on server.png";
import ctaImageSrc2 from "public/images/sitting on drive and server people with laptop.png";
import ctaImageSrc3 from "public/images/world wide web and cloud.png";
import ScrollingBanner from "@/components/ScrollingBanner";
import BackToTop from "@/components/BackToTTop";
import { SlCloudUpload } from "react-icons/sl";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { MdOutlineSecurity, MdSupportAgent } from "react-icons/md";
import { RiRefundLine } from "react-icons/ri";
import { LuDatabaseBackup } from "react-icons/lu";

const Home = () => {
  const contextValues = useContext(DomainContext);

  const { cloudServers } = contextValues;

  const [ssd, shared, dedicated] = cloudServers;
  const card = [
    {
      title: ssd.name,
      sub: "On sale 5%",
      price: ssd.price,
      duration: "/per month",
      features: [
        "Enjoy flexibility",
        " Increased power for your websites",
        "Unlimited Bandwidth",
        " 2X Processing Power & Memory",
      ],
      link: "/cloud-servers",
      buttonText: "Buy now",
    },
    {
      title: shared.name,
      sub: "On sale 12%",
      price: shared.price,
      duration: "/per month",
      features: [
        " 1 Website",
        "10,000 visits",
        "5 GB disk space",
        "Free SSL & Sitelock",
      ],
      link: "/shared-hosting",
      buttonText: "Buy now",
    },
    {
      title: dedicated.name,
      sub: "On sale 15%",
      price: dedicated.price,
      duration: "/per month",
      features: [
        "Always-on, 24/7 Fully-Managed",
        "Bare metal servers",
        "Root access for complete control",
        "Flexible Server Configurations",
      ],
      link: "https://cloudnetvox.com/clients/contact.php",
      buttonText: "Buy now",
    },
  ];
  const featureContent = [
    {
      title: "99% Uptime",
      description:
        "99% Uptime Don&apos;t be distracted! You&apos;re free to focus on growing your business, let us handle your site",
      icon: <SlCloudUpload />,
    },
    {
      title: "Easy Control Panel",
      description:
        "Easy Control Panel From tracking bandwidth, i/o stats to creating SSL certificates, all the tools you need are in one convenient location.",
      icon: <HiOutlineAdjustmentsVertical />,
    },
    {
      title: "Daily Backups",
      description:
        "Daily Backups The daily data back-up service offered by us is aimed at providing you with automatic recovery of lost data.",
      icon: <LuDatabaseBackup />,
    },
    {
      title: "Money Back Guarantee",
      description:
        "Try us and love us, or get a refund within 30 days of signing up. Your satisfaction is our number 1 priority.",
      icon: <RiRefundLine />,
    },
    {
      title: "Security",
      description:
        "Enjoy 2.5X Speed, Advanced Security, hassle-free WordPress installation on all accounts + FREE Migrations.",
      icon: <MdOutlineSecurity />,
    },
    {
      title: "Guaranteed Support",
      description:
        "Support is our number one priority.  Pro-active experts at your service, who reach out when your attention is needed..",
      icon: <MdSupportAgent />,
    },
  ];

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
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      {/* <ScrollingBanner /> */}
      <Hero />
      <DomainSearchBox enableAnimation />
      <BackToTop />
      <Spacer />
      <Patners />
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
        hideImage
        link="/new"
        showButton
      />
      <RegularCta
        heading="More Speed Less Downtime"
        description="Nowadays, most websites are vulnerable to unpredictable crashes and thus more prone to unprecedented downtimes too At CloudNetvox, We ensure Integrated Caching, Resource Management, Automated Failover, Data Mirroring, and Stabilty!"
        buttonText="Learn more"
        ctaImageSrc={ctaImageSrc2}
        hideImage
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
      <Reviews />
      <Spacer />
      <AwardBadge />
      <BeforeFooter />
    </motion.main>
  );
};

export default Home;
