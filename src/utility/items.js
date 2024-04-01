import { SlCloudUpload } from "react-icons/sl";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import {
  MdDomain,
  MdDomainAdd,
  MdOutlineSecurity,
  MdSupportAgent,
} from "react-icons/md";
import { RiCentosLine, RiRefundLine } from "react-icons/ri";
import { LuDatabaseBackup } from "react-icons/lu";
import data from "../data/prices.json";
import {
  SiAmazonsimpleemailservice,
  SiArchlinux,
  SiOpensuse,
} from "react-icons/si";
import { CiGlobe, CiServer } from "react-icons/ci";
import { VscServer, VscWorkspaceTrusted } from "react-icons/vsc";
import { GrCertificate, GrServerCluster } from "react-icons/gr";
import { ImCheckmark } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { TbBrandUbuntu, TbWorldUpload } from "react-icons/tb";
import { FaMoneyBillTransfer, FaRegHandshake } from "react-icons/fa6";
import { DiDebian } from "react-icons/di";
import ubuntu from "public/images/ubuntu.png";
import debian from "public/images/debian-logo-1024x576.png";
import centos from "public/images/centos.jpeg";
import windows from "public/images/microsoft windows.png";
import arch from "public/images/arch linux.png";
import opensuse from "public/images/opensuse.jpg";
import { AiOutlineWindows } from "react-icons/ai";

const base = data.hostingServicesBasePrice;
const email = data.emailHosting;
const featuredDomains = data.domainNames;
const shared = data.sharedHosting;

export const card = [
  {
    title: base.vps.name,
    sub: "Starting at:",
    price: base.vps.price,
    duration: "/per month",
    features: [
      "Enjoy flexibility",
      " Increased power for your websites",
      "Unlimited Bandwidths",
      " 2X Processing Power & Memory",
    ],
    link: "/cloud-servers",
    buttonText: "Buy now",
  },
  {
    title: base.shared.name,
    sub: "Starting at",
    price: base.shared.price,
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
    title: base.dedicated.name,
    sub: "Starting at",
    price: base.dedicated.price,
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

export const emailComparisonPlans = [
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
export const emailLiteSizes = {
  price: {
    "8gb": email.lite.price[0]["8gb"],
    "25gb": email.lite.price[0]["25gb"],
  },
};
export const emailPremiumSizes = {
  price: {
    "8gb": email.premium.price[0]["8gb"],
    "25gb": email.premium.price[0]["25gb"],
    "50gb": email.premium.price[0]["50gb"],
  },
};
export const emailExtraSizes = {
  price: {
    "8gb": email.extra.price[0]["8gb"],
    "25gb": email.extra.price[0]["25gb"],
    "50gb": email.extra.price[0]["50gb"],
    "100gb": email.extra.price[0]["100gb"],
  },
};

export const featureContent = [
  {
    title: "99% Uptime",
    description:
      "99% Uptime Don't be distracted! You're free to focus on growing your business, let us handle your site",
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
      "Support is our number one priority. Pro-active experts at your service, who reach out when your attention is needed..",
    icon: <MdSupportAgent />,
  },
];

export const domainsFeatureContent = [
  {
    title: "99% Uptime",
    description:
      "99% Uptime Don't be distracted! You're free to focus on growing your business, let us handle your site",
    icon: <SlCloudUpload />,
  },
  {
    title: "Enhanced Security",
    description:
      "We secure your domains with 2FA, IP Whitelisting, and SSO for proactive protection.",
    icon: <MdOutlineSecurity />,
  },
  {
    title: "Unparalleled accreditations",
    description:
      "As a leading registrar, we directly partner with global registries, saving you time and costs by bypassing middlemen.",
    icon: <GrCertificate />,
  },
  {
    title: "24/7/365 Support",
    description:
      "We prioritize rapid issue resolution and swift response to ensure your domain management never sleeps, just like the internet.",
    icon: <MdSupportAgent />,
  },
  {
    title: "Transparency",
    description:
      "Choose clear pricing: no hidden fees, no extra charges for DNS updates, and no long-term contracts. Keep it simple with us.",
    icon: <VscWorkspaceTrusted />,
  },
  {
    title: "Simplicity",
    description:
      "Simplify domain management by consolidating all your domains in one place, saving time across registrars.",
    icon: <FaRegHandshake />,
  },
];

export const domainsFaq = [
  {
    title: "What's a domain name?",
    content:
      "A domain name refers to your website address. This is what users type in a browser's search bar to directly access your website. A domain name is unique and cannot be shared between different sites. For example: cloudnetvoxcom",
  },
  {
    title: "How do I buy a domain name?",
    content:
      "To buy a domain name, enter the domain name you want to buy in the search box above, sign up and register the domain name.",
  },
  {
    title: "Got any tips on finding a good domain name?",
    content:
      "How much thought do you need to give to a domain name when you want to create a website? In theory, with a good website, users should visit your pages whatever the domain name...but it is a little more complicated than that. If you are part of a business, it is crucial to choose a domain name that is right for your business or brand. search for your perfect domain name",
  },
  {
    title: "What are the advantages of reserving your domains with Cloudnetvox?",
    content:
      "You have a wide range of domain name extensions to help protect your brand on the internet, if you are a business. Cloudnetvox also provides you with a custom email address linked to the domain. Furthermore, as a hosting provider, we can strengthen your DNS security, and allow you to configure your DNS zone.",
  },
];

export const domainsPricingCards = [
  {
    icon: <CiGlobe />,
    title: featuredDomains.comNG.ext,
    desc: "Elevate your online presence with .com.ng - a domain that speaks volumes!",
    price: featuredDomains.comNG.price,
    link: "https://cloudnetvox.com/clients/cart.php?a=add&domain=register",
  },
  {
    icon: <CiGlobe />,
    title: featuredDomains.com.ext,
    desc: "Establish your digital identity with the timeless appeal of a .com domain!",
    price: featuredDomains.com.price,
    link: "https://cloudnetvox.com/clients/cart.php?a=add&domain=register",
  },
  {
    icon: <CiGlobe />,
    title: featuredDomains.africa.ext,
    desc: "Embrace Africa with a unique .africa domain for your online presence!",
    price: featuredDomains.africa.price,
    link: "https://cloudnetvox.com/clients/cart.php?a=add&domain=register",
  },
];

export const featuredDomainNames = [
  {
    colorVariant: "blue",
    ext: featuredDomains.com.ext,
    price: featuredDomains.com.price,
  },
  {
    colorVariant: "red",
    ext: featuredDomains.net.ext,
    price: featuredDomains.net.price,
  },
  {
    colorVariant: "green",
    ext: featuredDomains.comNG.ext,
    price: featuredDomains.comNG.price,
  },
  {
    colorVariant: "secondary",
    ext: featuredDomains.africa.ext,
    price: featuredDomains.africa.price,
  },
  {
    colorVariant: "red",
    ext: featuredDomains.net.ext,
    price: featuredDomains.net.price,
  },
];

export const guaranteeBox = [
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

export const emailPricingCards = [
  {
    icon: <CiServer />,
    title: email.lite.name,
    desc: "Basic resources for starter, with only 1 site capacity",
    price: email.lite.price[0]["8gb"],
    link: "#fullFeatures",
  },
  {
    icon: <VscServer />,
    title: email.premium.name,
    desc: "More space and flexibility for multiple sites.",
    price: email.premium.price[0]["8gb"],
    link: "#fullFeatures",
  },
  {
    icon: <GrServerCluster />,
    title: email.extra.name,
    desc: "More space and flexibility for multiple sites.",
    price: email.extra.price[0]["8gb"],
    link: "#fullFeatures",
  },
];

export const navigation = [
  { title: "VPS", path: "/vps" },
  {
    title: "Solutions",
    path: "#",
    subMenu: [
      {
        icon: <CiServer />,
        title: "Shared Hosting",
        desc: "NVMe Powered cPanel Web Hosting",
        path: "/shared-hosting",
      },
      {
        icon: <SiAmazonsimpleemailservice />,
        title: "Business Email",
        desc: "Powerful email service",
        path: "/email-hosting",
      },
    ],
  },
  { title: "Dedicated Servers", path: "/dedicated-servers" },

  {
    title: "Domains",
    path: "#",
    subMenu: [
      {
        icon: <MdDomain />,
        title: "Domains",
        desc: "NVMe Powered cPanel Web Hosting",
        path: "/domains",
      },
      {
        icon: <MdDomainAdd />,
        title: "Premium Domains",
        desc: "NVMe Powered cPanel Web Hosting",
        path: "/premium-domains",
      },
    ],
  },
];

export const serverOptions = [
  {
    title: "Ubuntu",
    desc: "Ubuntu Server stands out as a widely used and adaptable operating system specifically crafted for server environments. Rooted in the Linux kernel, it boasts consistent long-term support (LTS) releases. Renowned for its reliability, security, and a broad range of available software, Ubuntu Server proves to be an excellent option for hosting web services, databases, and various applications.",
    icon: <TbBrandUbuntu />,
    imageSrc: ubuntu,
    template: [
      "Ubuntu Server 14",
      "Ubuntu Server 16",
      "Ubuntu Server 18",
      "Ubuntu Server 20",
    ],
  },
  {
    title: "Debian",
    desc: "Debian is recognized as a swift and resilient operating system, built upon the Linux kernel. It is meticulously assembled using open-source software and flourishes thanks to the collective contributions of the Debian Project community. Embraced by many system administrators and industry professionals, Debian has emerged as the preferred distribution.",
    icon: <DiDebian />,
    imageSrc: debian,
    template: ["Debian 10", "Debian 11", "Debian 12"],
  },
  {
    title: "Centos",
    desc: "CentOS, a free Linux distribution, remains fully functionally compatible with RHEL but lacks commercial support. CentOS generally offers comprehensive long-term support, along with dedicated efforts towards security and stability-focused development, ensuring ongoing maintenance updates for every major version.",
    icon: <RiCentosLine />,
    imageSrc: centos,
    template: ["CentOS 7", "CentOS Stream 8", "CentOS Stream 8"],
  },
  {
    title: "Opensuse",
    desc: "Opensuse, a free Linux distribution, remains fully functionally compatible with RHEL but lacks commercial support. CentOS generally offers comprehensive long-term support, along with dedicated efforts towards security and stability-focused development, ensuring ongoing maintenance updates for every major version.",
    icon: <SiOpensuse />,
    imageSrc: opensuse,
    template: ["CentOS 7", "CentOS Stream 8", "CentOS Stream 8"],
  },
  {
    title: "Archlinux",
    desc: "Arch Linux is a lightweight, user-centric Linux distribution with a rolling release model. It offers high customization, a minimalistic design, and a DIY approach, allowing users to build and configure their systems according to their preferences. The Pacman package manager and Arch User Repository (AUR) simplify software management. Ideal for those who value control and staying close to the latest software updates.",
    icon: <SiArchlinux />,
    imageSrc: arch,
    template: ["CentOS 7", "CentOS Stream 8", "CentOS Stream 8"],
  },
  {
    title: "Windows",
    desc: "Microsoft has designed an operating system known as Windows. Since 2003, Microsoft has unveiled a range of server operating systems labeled as Microsoft Windows Server. Numerous .NET development studios prefer Windows Server as their operating system, contributing to its widespread popularity.",
    icon: <AiOutlineWindows />,
    imageSrc: windows,
    template: [
      "Windows Server 2016",
      "Windows Server 2019",
      "Windows Server 2022",
    ],
  },
];

export const sharedPricingCards = [
  {
    icon: <CiServer />,
    title: shared.lite.name,
    desc: "Basic resources for starter, with only 1 site capacity",
    price: shared.lite.price,
    link: "#fullFeatures",
  },
  {
    icon: <VscServer />,
    title: shared.premium.name,
    desc: "More space and flexibility for multiple sites.",
    price: shared.premium.price,
    link: "#fullFeatures",
  },
  {
    icon: <GrServerCluster />,
    title: shared.extra.name,
    desc: "More space and flexibility for multiple sites.",
    price: shared.extra.price,
    link: "#fullFeatures",
  },
];

export const sharedComparisonPlans = [
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

export const sharedQuestionContent = [
  {
    title: "What is Shared Hosting?",
    content:
      "Shared Hosting is one of the most popular hosting packages because it provides an affordable way to get your website online. Shared Hosting works by allowing multiple users to share space on a single server maintained by the hosting provider (CloudNetvox). A Shared Hosting package can include multiple offers or combinations of features as offered by their hosting provider. CloudNetvox Shared Hosting is perfect for blogging, hobbies and small business websites.",
  },
  {
    title: "What is the difference between Shared vs WordPress Hosting?",
    content:
      "Anyone who has a website needs hosting to get their website online. Shared Hosting is a low-cost option for new users that is affordable and can be used with WordPress. Any website hosted through Cloudnetvox automatically has WordPress installed and ready to use. Shared WordPress Hosting is fully integrated with all the WordPress features to include automatic WordPress updates and installation.",
  },
  {
    title: "What are Shared Hosting Benefits?",
    content:
      "When you sign up for a Shared Hosting package, your biggest benefit is purchasing hosting at an affordable price. In addition to various features, our shared hosting platform is managed which means users don’t have to worry about server management and platform patches. When you purchase a CloudNetvox Shared Hosting package it also includes an SSL certificate, domain name and more!",
  },
  {
    title: "What is the difference between Shared vs VPS Hosting?",
    content:
      "When you have a Shared Hosting package you are one of multiple users hosting their website on a web server. This means a specific allotment of resources (RAM, CPU, etc) are not guaranteed for your website. Virtual Private Server (VPS) Hosting provides more space and bandwidth to manage a higher influx of traffic to your website. VPS Hosting allows you to expand a website over time so you can easily scale up your website as it grows. Users have a much higher degree of control with VPS Hosting so you can customize your control configuration as you’d like.",
  },
  {
    title: "How do I get started with Shared Hosting?",
    content:
      "CloudNetvox tries to make it easy for customers to get their website online with the purchase of our hosting packages. When you visit the CloudNetvox website you just have to select your Shared Web Hosting plan. These plans vary in prices and features. Once you select your hosting package we will automatically install the latest version of WordPress for you. Once you’re logged in, it’s time to get your website up and running!",
  },
  {
    title: "How do I migrate to Cloudnetvox?",
    content:
      "If you already have a website and are considering changing your web host, then you will need some assistance with migration. CloudNetvox provides a migration service that can assist you in getting all your files transferred securely and correctly. All you have to do is send a mail to support@cloudnetvox.com",
  },
];
