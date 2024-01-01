'use client';

import { useContext } from 'react';
import AltHero from '@/components/AltHero';
import Pricing from '@/components/Pricing';
import Spacer from '@/components/Spacer';
import React from 'react';
import { DomainContext } from '@/context/DomainContext';

const CloudServers = () => {
  const contextValues = useContext(DomainContext);
  const { ssdCloudServers } = contextValues;
  const { global, local } = ssdCloudServers;
  console.log(global);

  const card = [
    {
      title: 'ssd.name',
      sub: 'On sale 56%',
      price: 556,
      duration: '/per month',
      features: [
        'Enjoy flexibility',
        ' Increased power for your websites',
        'Unlimited Bandwidth',
        ' 2X Processing Power & Memory',
      ],
      link: '/cloud-servers',
    },
    {
      title: 'shared.name',
      sub: 'On sale 56%',
      price: 25,
      duration: '/per month',
      features: [' 1 Website', '10,000 visits', '5 GB disk space', 'Free SSL & Sitelock'],
      link: '/shared-hosting',
    },
    {
      title: 'dedicated.name',
      sub: 'On sale 56%',
      price: 123,
      duration: '/per month',
      features: [
        'Always-on, 24/7 Fully-Managed',
        'Bare metal servers',
        'Root access for complete control',
        'Flexible Server Configurations',
      ],
      link: 'https://cloudnetvox.com/clients/contact.php',
    },
    {
      title: 'dedicated.name',
      sub: 'On sale 56%',
      price: 123,
      duration: '/per month',
      features: [
        'Always-on, 24/7 Fully-Managed',
        'Bare metal servers',
        'Root access for complete control',
        'Flexible Server Configurations',
      ],
      link: 'https://cloudnetvox.com/clients/contact.php',
    },
  ];
  return (
    <main className="">
      <AltHero
        pageTitle="SSD Cloud Server"
        pageSub="Powerful Cloud servers built from scratch with SSD storage"
        breadcrumb="Cloud Servers"
      />
      <Spacer />
      <Pricing card={card} isFourCols />
    </main>
  );
};

export default CloudServers;
