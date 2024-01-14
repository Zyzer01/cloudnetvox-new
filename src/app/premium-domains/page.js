import AltHero from "@/components/AltHero";
import PremiumDomainList from "@/components/PremiumDomainList";
import RegularCta from "@/components/RegularCta";
import Spacer from "@/components/Spacer";
import ctaImageSrc0 from "public/images/web search concept illustration.jpg";


const PremiumDomains = () => {
  return (
    <main>
      <AltHero
        pageTitle="Premium Domain Name"
        pageSub="We'll make sure you find the right domain and that it's got a secure home online."
        breadcrumb="Premium Domains"
      />

      <PremiumDomainList />
      <RegularCta
            heading="Full Domain Management"
            description="Simplify your online presence with our comprehensive domain management services. From registration to renewal,
            we handle every aspect, ensuring your domains are secure, accessible, and seamlessly integrated with your web hosting.
            Focus on your business while we take care of your domain needs."
            buttonText="Get Started"
            ctaImageSrc={ctaImageSrc0}
            link="/new"
          />
      <Spacer />
    </main>
  );
};

export default PremiumDomains;
