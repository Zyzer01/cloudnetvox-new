"use client";
import AltHero from "@/components/AltHero";
import HorizontalCta from "@/components/HorizontalCta";
import Spacer from "@/components/Spacer";
import Tabs from "@/components/Tabs";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LuDatabaseBackup } from "react-icons/lu";
import { TbWorldUpload } from "react-icons/tb";
import { TbBrandUbuntu } from "react-icons/tb";
import { RiCentosLine } from "react-icons/ri";
import { DiDebian } from "react-icons/di";
import { AiOutlineWindows } from "react-icons/ai";
import { SiOpensuse } from "react-icons/si";
import { SiArchlinux } from "react-icons/si";
import ubuntu from "public/images/ubuntu.png"
import debian from "public/images/debian-logo-1024x576.png"
import centos from "public/images/centos.jpeg"
import windows from "public/images/microsoft windows.png"
import arch from "public/images/arch linux.png"
import opensuse from "public/images/opensuse.jpg"
import RegularCta from "@/components/RegularCta";
import ctaImageSrc0 from "public/images/budget friendly cheap.jpg";
import ctaImageSrc1 from "public/images/power energy.png";
import ctaImageSrc3 from "public/images/security.png";
import Header from "@/components/Header";
import BeforeFooter from "@/components/BeforeFooter";
import Nav from "@/components/Nav";


const DedicatedServers = () => {
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

  const options = [
    {
      title: "Ubuntu",
      desc: "Ubuntu Server stands out as a widely used and adaptable operating system specifically crafted for server environments. Rooted in the Linux kernel, it boasts consistent long-term support (LTS) releases. Renowned for its reliability, security, and a broad range of available software, Ubuntu Server proves to be an excellent option for hosting web services, databases, and various applications.",
      icon: <TbBrandUbuntu />,
      imageSrc: ubuntu,
      template: ['Ubuntu Server 14', 'Ubuntu Server 16', 'Ubuntu Server 18', 'Ubuntu Server 20']
    },
    {
      title: "Debian",
      desc: "Debian is recognized as a swift and resilient operating system, built upon the Linux kernel. It is meticulously assembled using open-source software and flourishes thanks to the collective contributions of the Debian Project community. Embraced by many system administrators and industry professionals, Debian has emerged as the preferred distribution.",
      icon: <DiDebian />,
      imageSrc: debian,
      template: ['Debian 10', 'Debian 11', 'Debian 12']
    },
    {
      title: "Centos",
      desc: "CentOS, a free Linux distribution, remains fully functionally compatible with RHEL but lacks commercial support. CentOS generally offers comprehensive long-term support, along with dedicated efforts towards security and stability-focused development, ensuring ongoing maintenance updates for every major version.",
      icon: <RiCentosLine />,
      imageSrc: centos,
      template: ['CentOS 7', 'CentOS Stream 8', 'CentOS Stream 8']
    },
    {
      title: "Opensuse",
      desc: "Opensuse, a free Linux distribution, remains fully functionally compatible with RHEL but lacks commercial support. CentOS generally offers comprehensive long-term support, along with dedicated efforts towards security and stability-focused development, ensuring ongoing maintenance updates for every major version.",
      icon: <SiOpensuse />,
      imageSrc: opensuse,
      template: ['CentOS 7', 'CentOS Stream 8', 'CentOS Stream 8']
    },
    {
      title: "Archlinux",
      desc: "Arch Linux is a lightweight, user-centric Linux distribution with a rolling release model. It offers high customization, a minimalistic design, and a DIY approach, allowing users to build and configure their systems according to their preferences. The Pacman package manager and Arch User Repository (AUR) simplify software management. Ideal for those who value control and staying close to the latest software updates.",
      icon: <SiArchlinux />,
      imageSrc: arch,
      template: ['CentOS 7', 'CentOS Stream 8', 'CentOS Stream 8']
    },
    {
      title: "Windows",
      desc: "Microsoft has designed an operating system known as Windows. Since 2003, Microsoft has unveiled a range of server operating systems labeled as Microsoft Windows Server. Numerous .NET development studios prefer Windows Server as their operating system, contributing to its widespread popularity.",
      icon: <AiOutlineWindows />,
      imageSrc: windows,
      template: ['Windows Server 2016', 'Windows Server 2019', 'Windows Server 2022']
    },
  ];

  

  return (
    <div>
      <AltHero
        pageTitle="Dedicated Servers"
        pageSub="When you prefer not to share! All resources, including RAM, storage, CPU, and network capacity, are dedicated, with no interference from noisy neighbors."
        breadcrumb="Dedicated Servers"
      />
      <Spacer />
      <Tabs options={options} />
      <Spacer />
      <Header heading="Why Choose Dedicated Servers?" sub="Your Fort Knox in the Digital Realm – Unrivaled Security at Your Fingertips." />
      <RegularCta
        heading="Budget-Friendly Fix"
        description="Nowadays, most websites are vulnerable to unpredictable crashes and thus more prone to unprecedented downtimes too At CloudNetvox, We ensure Integrated Caching, Resource Management, Automated Failover, Data Mirroring, and Stabilty!"
        buttonText="Get Started"
        ctaImageSrc={ctaImageSrc0}
        link="/new"
        showButton
      />
      <RegularCta
        heading="Increased Power"
        description="While the allure of the cloud may promise budget-friendliness, the truth often unveils a different story. Opting for a dedicated server may come with a higher initial price tag compared to cloud hosting, but in the grand scheme, it's an investment that can fuel your business's success. A dedicated server empowers businesses to fine-tune infrastructure utilization, minimize downtime, and tailor hosting costs to meet unique needs. Say goodbye to unnecessary expenses and hello to optimized efficiency!"
        buttonText="Get Started"
        ctaImageSrc={ctaImageSrc1}
        link="/new"
        isReversed
        showButton
      />
      <RegularCta
        heading="Enhanced Security"
        description="Fortify your digital fortress with dedicated servers – your ultimate shield against cyber threats! Take charge of both the inbound and outbound traffic, ensuring robust security in an age of relentless cyber-attacks. Amidst data breaches and evolving regulations like POPI and PCI compliance, empower your business with unparalleled control over server security. When you own the server, you own the key to unyielding protection!"
        buttonText="Get Started"
        ctaImageSrc={ctaImageSrc3}
        link="/new"
        showButton
      />
      <Spacer />
      <HorizontalCta guaranteeBox={guaranteeBox} />
      <BeforeFooter />
    </div>
  );
};

export default DedicatedServers;
