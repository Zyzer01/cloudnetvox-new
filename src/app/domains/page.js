import AltHero from '@/components/AltHero';
import PricinWithIcon from '@/components/PricinWithIcon';
import Spacer from '@/components/Spacer';
import Image from 'next/image';

export default function Domains() {
  return (
    <main className="">
      <AltHero
        pageTitle="Choose Your Perfect Domain Name"
        pageSub="We'll make sure you find the right domain and that it's got a secure home online."
        breadcrumb="Domains"
      />
      <Spacer />
      <PricinWithIcon />
    </main>
  );
}
