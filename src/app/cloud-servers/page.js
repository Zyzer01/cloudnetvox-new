'use client';
import { useContext } from 'react';
import AltHero from '@/components/AltHero';
import Pricing from '@/components/Pricing';
import Spacer from '@/components/Spacer';
import React from 'react';
import { DomainContext } from '@/context/DomainContext';
import RegularCta from '@/components/RegularCta';
import Image from 'next/image';
import BeforeFooter from '@/components/BeforeFooter';
import Brag from '@/components/Brag';
import { BiSupport } from 'react-icons/bi';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { LuDatabaseBackup } from 'react-icons/lu';
import { TbWorldUpload } from 'react-icons/tb';
import ComponentWrapper from '@/components/ComponentWrapper';
import ctaImageSrc0 from 'public/images/dedicated server feature network illustration.png'
import ctaImageSrc1 from 'public/images/cloud technology feature.png'
import ctaImageSrc2 from 'public/images/flexible root option.png'

const CloudServers = () => {
  const contextValues = useContext(DomainContext);
  const { ssdCloudServers } = contextValues;
  const [lite, premium, extra, gold] = ssdCloudServers;

  console.log(lite);

  const card = [
    {
      title: lite.name,
      sub: 'On sale 5%',
      localPrice: lite.localPrice,
      globalPrice: lite.globalPrice,
      duration: '/per month',
      features: [
        'Free Setup',
        '1GB Memory Space',
        '1 core CPU',
        '30GB SSD Disk Space',
        '1TB Bandwidth',
        'Test IP On-Demand',
      ],
      link: '/cloud-servers',
      buttonText: 'Choose Plan',
    },
    {
      title: premium.name,
      sub: 'On sale 10%',
      localPrice: premium.localPrice,
      globalPrice: premium.globalPrice,
      duration: '/per month',
      features: [
        'Free Setup',
        '4GB Memory Space',
        '2 cores CPU',
        '70GB SSD Disk Space',
        '2TB Bandwidth',
        'Test IP On-Demand',
      ],
      link: '/shared-hosting',
      buttonText: 'Choose Plan',
    },
    {
      title: extra.name,
      sub: 'On sale 15%',
      localPrice: extra.localPrice,
      globalPrice: extra.globalPrice,
      duration: '/per month',
      features: [
        'Free Setup',
        '8GB Memory Space',
        '4 cores CPU',
        '150GB SSD Disk Space',
        '3TB Bandwidth',
        'Test IP On-Demand',
      ],
      link: 'https://cloudnetvox.com/clients/contact.php',
      buttonText: 'Choose Plan',
    },
    {
      title: gold.name,
      sub: 'On sale 20%',
      localPrice: gold.localPrice,
      globalPrice: gold.globalPrice,
      duration: '/per month',
      features: [
        'Free Setup',
        '16GB Memory Space',
        '6 cores CPU',
        '300GB SSD Disk Space',
        '5TB Bandwidth',
        'Test IP On-Demand',
      ],
      link: 'https://cloudnetvox.com/clients/contact.php',
      buttonText: 'Choose Plan',
    },
  ];


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
          <div className="bg-white xl:p-16 rounded-3xl">
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
            src={'/images/welcome-pattern.png'}
            alt="zig zag clouds illustration"
          />
        </div>
      </div>
      <Brag
        guaranteeBox={guaranteeBox}
        heading="Why Choose Us?"
        sub="Our customizable and scalable platform delivers everything your website needs."
      />
      <BeforeFooter />
    </ComponentWrapper>
  );
};

export default CloudServers;
