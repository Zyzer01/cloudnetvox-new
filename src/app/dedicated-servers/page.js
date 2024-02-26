"use client";
import AltHero from "@/components/AltHero";
import HorizontalCta from "@/components/HorizontalCta";
import Spacer from "@/components/Spacer";
import Tabs from "@/components/Tabs";
import RegularCta from "@/components/RegularCta";
import ctaImageSrc0 from "public/images/budget friendly cheap.jpg";
import ctaImageSrc1 from "public/images/power energy.png";
import ctaImageSrc3 from "public/images/security.png";
import Header from "@/components/Header";
import BeforeFooter from "@/components/BeforeFooter";
import { guaranteeBox, serverOptions } from "@/utility/items";

const DedicatedServers = () => {
  return (
    <div>
      <AltHero
        pageTitle="Dedicated Servers"
        pageSub="When you prefer not to share! All resources, including RAM, storage, CPU, and network capacity, are dedicated, with no interference from noisy neighbors."
        breadcrumb="Dedicated Servers"
      />
      <Spacer />
      <Tabs options={serverOptions} />
      <Spacer />
      <Header
        heading="Why Choose Dedicated Servers?"
        sub="Your Fort Knox in the Digital Realm – Unrivaled Security at Your Fingertips."
      />
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
