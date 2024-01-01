'use client';
import { useContext } from 'react';
import AltHero from '@/components/AltHero';
import ComparisonTable from '@/components/ComparisonTable';
import ComparisonTable2 from '@/components/ComparisonTable2';
import PackedCta from '@/components/PackedCta';
import Spacer from '@/components/Spacer';
import Image from 'next/image';
import { BiSupport } from 'react-icons/bi';
import { TbWorldUpload } from 'react-icons/tb';
import { LuDatabaseBackup } from 'react-icons/lu';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import Faq from '@/components/Faq';
import { DomainContext } from '@/context/DomainContext';
import PricingWithIcon from '@/components/PricingWithIcon';
import { CiGlobe } from 'react-icons/ci';
import { CiServer } from 'react-icons/ci';
import { VscServer } from 'react-icons/vsc';
import { GrServerCluster } from 'react-icons/gr';

export default function SharedHosting() {
  const contextValues = useContext(DomainContext);

  const { webHostingPrices, ssdCloudServers } = contextValues;

  const [lite, premium, extra] = webHostingPrices;

  const pricingCards = [
    {
      icon: <CiServer />,
      title: lite.name,
      desc: 'Basic resources for starter, with only 1 site capacity',
      price: lite.price,
      link: '#fullFeatures',
    },
    {
      icon: <VscServer />,
      title: premium.name,
      desc: 'More space and flexibility for multiple sites.',
      price: premium.price,
      link: '#fullFeatures',
    },
    {
      icon: <GrServerCluster />,
      title: extra.name,
      desc: 'More space and flexibility for multiple sites.',
      price: extra.price,
      link: '#fullFeatures',
    },
  ];
  const ctaContent = {
    title: 'Our Guarantees',
    sub: 'High performance dedicated servers with cloud flexibility and scalability.',
    desc: 'We guarantee you 99.9% server uptime, steady backups, support if you have any issues 24/7, if you feel you aren&apos;t satisfied, we pledge a 30 Day money back guarantee.',
  };
  const guaranteeBox = [
    {
      icon: <BiSupport />,
      boxTitle: 'Award Winning 24/7 Live Support',
    },
    {
      icon: <TbWorldUpload />,
      boxTitle: '99.99% Network Uptime Guarantee!',
    },
    {
      icon: <LuDatabaseBackup />,
      boxTitle: 'Daily backups with 1-click restore',
    },
    {
      icon: <FaMoneyBillTransfer />,
      boxTitle: '30 Day Money Back Guarantee',
    },
  ];
  const questionContent = [
    {
      title: 'What is Shared Hosting?',
      content:
        'Shared Hosting is one of the most popular hosting packages because it provides an affordable way to get your website online. Shared Hosting works by allowing multiple users to share space on a single server maintained by the hosting provider (CloudNetvox). A Shared Hosting package can include multiple offers or combinations of features as offered by their hosting provider. CloudNetvox Shared Hosting is perfect for blogging, hobbies and small business websites.',
    },
    {
      title: 'What is the difference between Shared vs WordPress Hosting?',
      content:
        'Anyone who has a website needs hosting to get their website online. Shared Hosting is a low-cost option for new users that is affordable and can be used with WordPress. Any website hosted through Cloudnetvox automatically has WordPress installed and ready to use. Shared WordPress Hosting is fully integrated with all the WordPress features to include automatic WordPress updates and installation.',
    },
    {
      title: 'What are Shared Hosting Benefits?',
      content:
        'When you sign up for a Shared Hosting package, your biggest benefit is purchasing hosting at an affordable price. In addition to various features, our shared hosting platform is managed which means users don’t have to worry about server management and platform patches. When you purchase a CloudNetvox Shared Hosting package it also includes an SSL certificate, domain name and more!',
    },
    {
      title: 'What is the difference between Shared vs VPS Hosting?',
      content:
        'When you have a Shared Hosting package you are one of multiple users hosting their website on a web server. This means a specific allotment of resources (RAM, CPU, etc) are not guaranteed for your website. Virtual Private Server (VPS) Hosting provides more space and bandwidth to manage a higher influx of traffic to your website. VPS Hosting allows you to expand a website over time so you can easily scale up your website as it grows. Users have a much higher degree of control with VPS Hosting so you can customize your control configuration as you’d like.',
    },
    {
      title: 'How do I get started with Shared Hosting?',
      content:
        'CloudNetvox tries to make it easy for customers to get their website online with the purchase of our hosting packages. When you visit the CloudNetvox website you just have to select your Shared Web Hosting plan. These plans vary in prices and features. Once you select your hosting package we will automatically install the latest version of WordPress for you. Once you’re logged in, it’s time to get your website up and running!',
    },
    {
      title: 'How do I migrate to CloudNetvox?',
      content:
        'If you already have a website and are considering changing your web host, then you will need some assistance with migration. CloudNetvox provides a migration service that can assist you in getting all your files transferred securely and correctly. All you have to do is send a mail to support@cloudnetvox.com',
    },
  ];

  return (
    <main className="">
      <AltHero
        pageTitle="Shared Hosting"
        pageSub="Powerful Cloud servers built from scratch with SSD storage"
        breadcrumb="Shared Hosting"
      />
      <Spacer />
      <PricingWithIcon
        isWithToggle
        pricingCards={pricingCards}
        heading="Choose Your Shared Hosting Plan"
        sub="Start your online journey with our shared hosting — reliable, affordable, and perfect for getting your website up and running."
        buttonText="Order Now"
      />
      <Spacer />
      {/* <ComparisonTable /> */}
      <Spacer />
      <ComparisonTable2 />
      <Spacer />
      <div>
        <div className="bg-sky py-16">
          <PackedCta
            title={ctaContent.title}
            sub={ctaContent.sub}
            desc={ctaContent.desc}
            guaranteeBox={guaranteeBox}
          />
        </div>
        <div className="welcome-pattern -mt-8 md:-mt-16 w-full">
          <Image
            className="w-full"
            width={2000}
            height={2000}
            src={'/images/welcome-pattern.png'}
            alt="zig zag clouds illustration"
          />
        </div>
      </div>

      <Faq questionContent={questionContent} />
    </main>
  );
}
