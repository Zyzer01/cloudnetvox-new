'use client';
import { useContext } from 'react';
import AltHero from '@/components/AltHero';
import DomainSearchBox from '@/components/DomainSearchBox';
import PricingWithIcon from '@/components/PricingWithIcon';
import Spacer from '@/components/Spacer';
import Image from 'next/image';
import { DomainContext } from '@/context/DomainContext';
import { CiGlobe } from 'react-icons/ci';

export default function Domains() {
  const contextValues = useContext(DomainContext);

  const { domainPrices } = contextValues;

  const [com, net, info] = domainPrices;

  const pricingCards = [
    {
      icon: <CiGlobe />,
      title: net.ext,
      desc: 'Get .com a top-level domain (TLD) in the DNS of the Internet.',
      price: net.price,
      link: 'https://cloudnetvox.com/clients/cart.php?a=add&domain=register',
    },
    {
      icon: <CiGlobe />,
      title: com.ext,
      desc: 'Get .com a top-level domain (TLD) in the DNS of the Internet.',
      price: com.price,
      link: 'https://cloudnetvox.com/clients/cart.php?a=add&domain=register',
    },
    {
      icon: <CiGlobe />,
      title: info.ext,
      desc: 'Get .com a top-level domain (TLD) in the DNS of the Internet.',
      price: info.price,
      link: 'https://cloudnetvox.com/clients/cart.php?a=add&domain=register',
    },
  ];

  return (
    <main className="">
      <AltHero
        pageTitle="Choose Your Perfect Domain Name"
        pageSub="We'll make sure you find the right domain and that it's got a secure home online."
        breadcrumb="Domains"
      />
      <Spacer />
      <DomainSearchBox />
      <Spacer />
      <PricingWithIcon pricingCards={pricingCards} buttonText="Check Availability" />
      <Spacer />
    </main>
  );
}
