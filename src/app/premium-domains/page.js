import AltHero from "@/components/AltHero";
import PremiumDomainList from "@/components/PremiumDomainList";
import Spacer from "@/components/Spacer";

const PremiumDomains = () => {
  return (
    <main>
      <AltHero
        pageTitle="Premium Domain Name"
        pageSub="We'll make sure you find the right domain and that it's got a secure home online."
        breadcrumb="Premium Domains"
      />

      <PremiumDomainList />
      <Spacer />
    </main>
  );
};

export default PremiumDomains;
