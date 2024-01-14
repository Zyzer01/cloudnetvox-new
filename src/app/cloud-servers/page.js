"use client";
import { useContext } from "react";
import AltHero from "@/components/AltHero";
import Pricing from "@/components/Pricing";
import Spacer from "@/components/Spacer";
import React from "react";
import { DomainContext } from "@/context/DomainContext";
import RegularCta from "@/components/RegularCta";
import Image from "next/image";
import BeforeFooter from "@/components/BeforeFooter";
import Brag from "@/components/Brag";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LuDatabaseBackup } from "react-icons/lu";
import { TbWorldUpload } from "react-icons/tb";
import ComponentWrapper from "@/components/ComponentWrapper";
import ctaImageSrc0 from "public/images/server management.jpg"; 
import ctaImageSrc1 from "public/images/cloud saas.jpg"; 
import ctaImageSrc2 from "public/images/flexible root.jpg";
import Faq from "@/components/Faq";

const CloudServers = () => {
  const contextValues = useContext(DomainContext);
  const { ssdCloudServers } = contextValues;
  const [lite, premium, extra, gold] = ssdCloudServers;

  console.log(lite);

  const card = [
    {
      title: lite.name,
      sub: "On sale 5%",
      localPrice: lite.localPrice,
      globalPrice: lite.globalPrice,
      duration: "/per month",
      features: [
        "Free Setup",
        "1GB Memory Space",
        "1 core CPU",
        "30GB SSD Disk Space",
        "1TB Bandwidth",
        "Test IP On-Demand",
      ],
      link: "/cloud-servers",
      buttonText: "Choose Plan",
    },
    {
      title: premium.name,
      sub: "On sale 10%",
      localPrice: premium.localPrice,
      globalPrice: premium.globalPrice,
      duration: "/per month",
      features: [
        "Free Setup",
        "4GB Memory Space",
        "2 cores CPU",
        "70GB SSD Disk Space",
        "2TB Bandwidth",
        "Test IP On-Demand",
      ],
      link: "/shared-hosting",
      buttonText: "Choose Plan",
    },
    {
      title: extra.name,
      sub: "On sale 15%",
      localPrice: extra.localPrice,
      globalPrice: extra.globalPrice,
      duration: "/per month",
      features: [
        "Free Setup",
        "8GB Memory Space",
        "4 cores CPU",
        "150GB SSD Disk Space",
        "3TB Bandwidth",
        "Test IP On-Demand",
      ],
      link: "https://cloudnetvox.com/clients/contact.php",
      buttonText: "Choose Plan",
    },
    {
      title: gold.name,
      sub: "On sale 20%",
      localPrice: gold.localPrice,
      globalPrice: gold.globalPrice,
      duration: "/per month",
      features: [
        "Free Setup",
        "16GB Memory Space",
        "6 cores CPU",
        "300GB SSD Disk Space",
        "5TB Bandwidth",
        "Test IP On-Demand",
      ],
      link: "https://cloudnetvox.com/clients/contact.php",
      buttonText: "Choose Plan",
    },
  ];

  const guaranteeBox = [
    {
      icon: <BiSupport />,
      boxTitle: "Award Winning 24/7 Live Support",
    },
    {
      icon: <TbWorldUpload />,
      boxTitle: "99.99% Network Uptime Guarantee!",
    },
    {
      icon: <LuDatabaseBackup />,
      boxTitle: "Daily backups with 1-click restore",
    },
    {
      icon: <FaMoneyBillTransfer />,
      boxTitle: "30 Day Money Back Guarantee",
    },
  ];

  const questionContent = [
    {
      title: "What are Cloud Servers?",
      content:
        "Cloud servers, also known as virtual servers in the cloud, provide users with the benefits of dedicated servers without the need for physical hardware. With cloud servers, individuals or businesses share the costs associated with server resources, hardware, and operational expenses. This approach eliminates the complexities and financial burdens of procuring, maintaining, and managing physical servers.",
    },
    {
      title: "Is my preferred Linux distribution supported?",
      content:
        "We strive to stay current with the latest trends and widely-used Linux distributions, all of which you can choose from during the checkout process. If you can't find what you need, please submit a ticket, and we'll make every effort to fulfill your request.",
    },
    {
      title: "Can I upgrade to a better plan later?",
      content:
        "Certainly! You have the flexibility to adjust your plan at any time. While it's possible to upgrade or downgrade your CPU and RAM as needed, please note that reducing the size of your storage volume for KVM storage is not feasible due to its setup complexities.",
    },
    {
      title: "Where is my data stored & hosted?",
      content:
        "Your data, along with backups, is securely stored at our data centers in Nigeria & Germany. We advise utilizing VPNs to encrypt the data flow between your client and server connections.",
    },
    {
      title: "Should I worry about my backups?",
      content:
        "Never! All our Cloud Hosting plans comes with a weekly backup service. However, you have the flexibility to personalize your backup schedule to include daily backups when going through our checkout process.",
    },
    {
      title: "How do I migrate to Cloudnetvox?",
      content:
        "If you already have a website and are considering changing your web host, then you will need some assistance with migration. CloudNetvox provides a migration service that can assist you in getting all your files transferred securely and correctly. All you have to do is send a mail to support@cloudnetvox.com",
    },
  ];

  return (
    <ComponentWrapper>
      <AltHero
        pageTitle="SSD Cloud Server"
        pageSub="Powerful Cloud servers built from scratch with SSD storage"
        breadcrumb="Cloud Servers"
      />
      <Spacer />
      <Pricing
        card={card}
        isFourCols
        showBadge
        option1="Global"
        option2="Nigeria"
        heading="Choose Your Cloud Hosting Plan"
        sub="Scale your online presence with flexible cloud hosting designed for performance and growth."
      />
      <Spacer />
      <div>
        <div className="bg-sky p-16 lg:p-28 ">
          <div className="bg-white rounded-3xl">
            <RegularCta
              heading="Multi-Server Management"
              description="Need more than one server? You can add more VPS, or even Shared and Dedicated hosting services to your account and effortlessly manage everything in one convenient location."
              ctaImageSrc={ctaImageSrc0}
              link="/new"
              hideImage
            />
            <RegularCta
              heading="Cloud Technology"
              description="
              Cloud Technology
              We work with industry leaders like Intel and AMD to continually evaluate our VPS platform to maintain optimal performance. Our packages are among the fastest VPS hosting available."
              ctaImageSrc={ctaImageSrc1}
              link="/new"
              isReversed
              hideImage
            />
            <RegularCta
              heading="Flexible Root Options"
              description="Full root access gives you more control over your environment, allowing for custom script or application installs on your Virtual Private Server, also enjoy Easy scalability."
              ctaImageSrc={ctaImageSrc2}
              link="/new"
              hideImage
            />
          </div>
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
      <Brag
        guaranteeBox={guaranteeBox}
        heading="Why Choose Us?"
        sub="Our customizable and scalable platform delivers everything your website needs."
      />
      <Faq questionContent={questionContent} />
      <BeforeFooter />
    </ComponentWrapper>
  );
};

export default CloudServers;
