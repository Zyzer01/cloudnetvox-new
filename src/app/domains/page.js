"use client";
import AltHero from "@/components/AltHero";
import DomainSearchBox from "@/components/DomainSearchBox";
import PricingWithIcon from "@/components/PricingWithIcon";
import Spacer from "@/components/Spacer";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import Faq from "@/components/Faq";
import RegularCta from "@/components/RegularCta";
import ComponentWrapper from "@/components/ComponentWrapper";
import data from "../../data/prices.json";
import ctaImageSrc0 from "public/images/web search concept illustration.jpg";
import DomainList from "@/components/DomainList";
import Features from "@/components/Features";
import { SlCloudUpload } from "react-icons/sl";
import { MdOutlineSecurity, MdSupportAgent } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaRegHandshake } from "react-icons/fa6";

const x = data.domainNames;

export default function Domains() {
  const questionContent = [
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
      title:
        "What are the advantages of reserving your domain with Cloudnetvox?",
      content:
        "You have a wide range of domain name extensions to help protect your brand on the internet, if you are a business. Cloudnetvox also provides you with a custom email address linked to the domain. Furthermore, as a hosting provider, we can strengthen your DNS security, and allow you to configure your DNS zone.",
    },
  ];

  const pricingCards = [
    {
      icon: <CiGlobe />,
      title: x.comNG.ext,
      desc: "Elevate your online presence with .com.ng - a domain that speaks volumes!",
      price: x.comNG.price,
      link: "https://cloudnetvox.com/clients/cart.php?a=add&domain=register",
    },
    {
      icon: <CiGlobe />,
      title: x.com.ext,
      desc: "Establish your digital identity with the timeless appeal of a .com domain!",
      price: x.com.price,
      link: "https://cloudnetvox.com/clients/cart.php?a=add&domain=register",
    },
    {
      icon: <CiGlobe />,
      title: x.africa.ext,
      desc: "Embrace Africa with a unique .africa domain for your online presence!",
      price: x.africa.price,
      link: "https://cloudnetvox.com/clients/cart.php?a=add&domain=register",
    },
  ];

  const featureContent = [
    {
      title: '99% Uptime',
      description:
        "99% Uptime Don't be distracted! You're free to focus on growing your business, let us handle your site",
      icon: <SlCloudUpload />,
    },
    {
      title: 'Enhanced Security',
      description:
        'We secure your domains with 2FA, IP Whitelisting, and SSO for proactive protection.',
      icon: <MdOutlineSecurity />,
    },
    {
      title: 'Unparalleled accreditations',
      description:
        'As a leading registrar, we directly partner with global registries, saving you time and costs by bypassing middlemen.',
      icon: <GrCertificate />,
    },
    {
      title: '24/7/365 Support',
      description:
        'We prioritize rapid issue resolution and swift response to ensure your domain management never sleeps, just like the internet.',
      icon: <MdSupportAgent />,
    },
    {
      title: 'Transparency',
      description:
        'Choose clear pricing: no hidden fees, no extra charges for DNS updates, and no long-term contracts. Keep it simple with us.',
      icon: <VscWorkspaceTrusted />,
    },
    {
      title: 'Simplicity',
      description:
        'Simplify domain management by consolidating all your domains in one place, saving time across registrars.',
      icon: <FaRegHandshake />,
    },
  ];

  return (
    <div>
    <main>
      <AltHero
        pageTitle="Choose Your Perfect Domain Name"
        pageSub="We'll make sure you find the right domain and that it's got a secure home online."
        breadcrumb="Domains"
      />
      <Spacer />
      <DomainSearchBox />
      <Spacer />
      <PricingWithIcon
        heading="Explore Unique Domain Names"
        sub="Curated domains to elevate your online presence."
        pricingCards={pricingCards}
        buttonText="Check Availability"
      />
      <Spacer />
      <Features heading="What to expect" sub="Discover the Rich Experience that Awaits You in Our Domain World" featureContent={featureContent} />
      <DomainList />
      <div>
        <div className="bg-sky py-16">
          <RegularCta
            heading="Full Domain Management"
            description="Simplify your online presence with our comprehensive domain management services. From registration to renewal,
            we handle every aspect, ensuring your domains are secure, accessible, and seamlessly integrated with your web hosting.
            Focus on your business while we take care of your domain needs."
            buttonText="Get Started"
            ctaImageSrc={ctaImageSrc0}
            link="/new"
          />
        </div>
        <div className="welcome-pattern -mt-8 md:-mt-16 w-full">
          <Image
            className="w-full"
            width={2000}
            height={2000}
            src={"/images/welcome-pattern.png"}
            alt="zig zag clouds illustration"
          />
        </div>
      </div>
      <Faq questionContent={questionContent} />
    </main>
    </div>
  );
}
