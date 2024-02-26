import { SlCloudUpload } from "react-icons/sl";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { MdOutlineSecurity, MdSupportAgent } from "react-icons/md";
import { RiRefundLine } from "react-icons/ri";
import { LuDatabaseBackup } from "react-icons/lu";
import data from "../data/prices.json";

const base = data.hostingServicesBasePrice;

export const card = [
  {
    title: base.vps.name,
    sub: "Starting at:",
    price: base.vps.price,
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
