import AltHero from '@/components/AltHero';
import Pricing from '@/components/Pricing';
import Spacer from '@/components/Spacer';
import React from 'react';

const CloudServers = () => {
  return (
    <main className="">
      <AltHero
        pageTitle="SSD Cloud Server"
        pageSub="Powerful Cloud servers built from scratch with SSD storage"
        breadcrumb="Cloud Servers"
      />
      <Spacer />
      {/* <Pricing /> */}
    </main>
  );
};

export default CloudServers;
