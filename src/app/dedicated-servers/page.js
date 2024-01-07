"use client";
import AltHero from "@/components/AltHero";
import HorizontalCta from "@/components/HorizontalCta";
import Spacer from "@/components/Spacer";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LuDatabaseBackup } from "react-icons/lu";
import { TbWorldUpload } from "react-icons/tb";

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
  return (
    <div>
      <AltHero
        pageTitle="Dedicated Servers"
        pageSub="When you prefer not to share! All resources, including RAM, storage, CPU, and network capacity, are dedicated, with no interference from noisy neighbors."
        breadcrumb="Dedicated Servers"
      />
      <Spacer />
      <HorizontalCta guaranteeBox={guaranteeBox} />
      <Spacer />
    </div>
  );
};

export default DedicatedServers;
