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
import ubuntu from "public/images/ubuntu.png"
import debian from "public/images/debian-logo-1024x576.png"
import centos from "public/images/centos.jpeg"
import windows from "public/images/microsoft windows.png"


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
    },
    {
      title: "Debian",
      desc: "Debian is recognized as a swift and resilient operating system, built upon the Linux kernel. It is meticulously assembled using open-source software and flourishes thanks to the collective contributions of the Debian Project community. Embraced by many system administrators and industry professionals, Debian has emerged as the preferred distribution.",
      icon: <DiDebian />,
      imageSrc: debian,

    },
    {
      title: "Centos",
      desc: "CentOS, a free Linux distribution, remains fully functionally compatible with RHEL but lacks commercial support. CentOS generally offers comprehensive long-term support, along with dedicated efforts towards security and stability-focused development, ensuring ongoing maintenance updates for every major version.",
      icon: <RiCentosLine />,
      imageSrc: centos,

    },
    {
      title: "Windows",
      desc: "Microsoft has designed an operating system known as Windows. Since 2003, Microsoft has unveiled a range of server operating systems labeled as Microsoft Windows Server. Numerous .NET development studios prefer Windows Server as their operating system, contributing to its widespread popularity.",
      icon: <AiOutlineWindows />,
      imageSrc: windows,
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
      <HorizontalCta guaranteeBox={guaranteeBox} />
      <Spacer />

    </div>
  );
};

export default DedicatedServers;
