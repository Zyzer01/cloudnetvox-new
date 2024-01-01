'use client';
import { useContext } from 'react';
import AltHero from '@/components/AltHero';
import DomainSearchBox from '@/components/DomainSearchBox';
import PricingWithIcon from '@/components/PricingWithIcon';
import Spacer from '@/components/Spacer';
import Image from 'next/image';
import { DomainContext } from '@/context/DomainContext';
import { CiGlobe } from 'react-icons/ci';
import Faq from '@/components/Faq';
import RegularCta from '@/components/RegularCta';

export default function Domains() {
  const contextValues = useContext(DomainContext);

  const { domainPrices } = contextValues;

  const [com, net, info] = domainPrices;

  const questionContent = [
    {
      title: "What's a domain name?",
      content:
        "A domain name refers to your website address. This is what users type in a browser's search bar to directly access your website. A domain name is unique and cannot be shared between different sites. For example: cloudnetvoxcom",
    },
    {
      title: 'How do I buy a domain name?',
      content:
        'To buy a domain name, enter the domain name you want to buy in the search box above, sign up and register the domain name.',
    },
    {
      title: 'Got any tips on finding a good domain name?',
      content:
        'How much thought do you need to give to a domain name when you want to create a website? In theory, with a good website, users should visit your pages whatever the domain name...but it is a little more complicated than that. If you are part of a business, it is crucial to choose a domain name that is right for your business or brand. search for your perfect domain name',
    },
    {
      title: 'What are the advantages of reserving your domain with Cloudnetvox?',
      content:
        'You have a wide range of domain name extensions to help protect your brand on the internet, if you are a business. Cloudnetvox also provides you with a custom email address linked to the domain. Furthermore, as a hosting provider, we can strengthen your DNS security, and allow you to configure your DNS zone.',
    },
  ];

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

  const ctaImageSrc = ['/images/web search concept illustration.jpg'];

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
      <div>
        <div className="bg-sky py-16">
          <RegularCta
            heading="Full Domain Management"
            description="Simplify your online presence with our comprehensive domain management services. From registration to renewal,
            we handle every aspect, ensuring your domains are secure, accessible, and seamlessly integrated with your web hosting.
            Focus on your business while we take care of your domain needs."
            buttonText="Get Started"
            ctaImageSrc={ctaImageSrc[0]}
            link="/new"
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
