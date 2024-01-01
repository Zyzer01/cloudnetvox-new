import Hero from '@/components/Hero';
import DomainSearchBox from '@/components/DomainSearchBox';
import Patners from '@/components/Patners';
import Spacer from '@/components/Spacer';
import Features from '@/components/Features';
import PricingWithThree from '@/components/PricingWithThree';
import CtaWithList from '@/components/CtaWithList';
import RegularCta from '@/components/RegularCta';
import Reviews from '@/components/Reviews';
import AwardBadge from '@/components/AwardBadge';
import BeforeFooter from '@/components/BeforeFooter';

const Home = () => {
  const card = [
    {
      title: 'SSD Cloud Server',
      sub: 'On sale 56%',
      price: 9000,
      duration: '/per month',
      features: ['Feature1', 'feature1222', 'feature333'],
    },
    {
      title: 'SSD Cloud Server',
      sub: 'On sale 56%',
      price: 9000,
      duration: '/per month',
      features: ['Feature1', 'feature1222', 'feature333'],
    },
    {
      title: 'SSD Cloud Server',
      sub: 'On sale 56%',
      price: 9000,
      duration: '/per month',
      features: ['Feature1', 'feature1222', 'feature333'],
    },
  ];
  const ctaListItems = [
    'FREE Domain Name for 1st Year',
    'FREE Email Address',
    'Plenty of Disk Space',
    'FREE Website Builder',
    'FREE Marketing Tools',
    '1-Click WordPress Install',
  ];

  const ctaImageSrc = [
    '/images/man standing on server.png',
    '/images/animation people sitting on server.svg',
    '/images/sitting on drive and server people with laptop.svg',
    '/images/world wide web and cloud.svg',
  ];

  return (
    <main className="">
      <Hero />
      <DomainSearchBox />
      <Spacer />
      <Patners />
      <Spacer />
      <Features />
      <Spacer />
      <PricingWithThree showBadge card={card} />
      <Spacer />
      <CtaWithList
        ctaHeading="Up to 70% Discount with FREE Domain Name Registration Included!"
        ctaListItems={ctaListItems}
        buttonText="Get Started Now!"
        ctaImageSrc={ctaImageSrc[0]}
        altText="Man standing on server"
      />
      <Spacer />
      <RegularCta
        heading="99% Cloud Hosting High-speed Cutting-edge Platform"
        description="All businesses can utilize cloud hosting due to a variety of reasons. Firstly, the fresh start-up ones can benefit from it due to the minimal upfront costs. When you are launching a new business from scratch, your primary target includes getting the website up and running. Having a fast and cost-effective solution like CloudNetvox's cloud hosting can provide such new companies with a strong start."
        buttonText="Learn more"
        isReversed={true}
        ctaImageSrc={ctaImageSrc[1]}
        hideImage
      />
      <RegularCta
        heading="More Speed Less Downtime"
        description="Nowadays, most websites are vulnerable to unpredictable crashes and thus more prone to unprecedented downtimes too At CloudNetvox, We ensure Integrated Caching, Resource Management, Automated Failover, Data Mirroring, and Stabilty!"
        buttonText="Learn more"
        ctaImageSrc={ctaImageSrc[2]}
        hideImage
      />
      <div className="bg-primary text-white">
        <RegularCta
          heading="Best Cloud Hosting With Trusted Service"
          description="The freedom of accessibility can bring some threats along with the perks. The cybercriminals are now fully prepared to attack any vulnerable website and gain personal profits from it. Trust CloudNetvox to protect you from being vulnerable."
          buttonText="Learn more"
          isReversed={true}
          ctaImageSrc={ctaImageSrc[3]}
          darkBg={true}
        />
      </div>
      <Spacer />
      <Reviews />
      <Spacer />
      <AwardBadge />
      <BeforeFooter />
      <Spacer />
    </main>
  );
};

export default Home;
