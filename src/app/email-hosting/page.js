'use client';
import AltHero from '@/components/AltHero';
import ComponentWrapper from '@/components/ComponentWrapper';
import Spacer from '@/components/Spacer';
const EmailHosting = () => {
  return (
    <ComponentWrapper>
      <AltHero
        pageTitle="Email Hosting"
        pageSub="Secure and professional email"
        breadcrumb="Shared Hosting"
      />
      <Spacer />
    </ComponentWrapper>
  );
};

export default EmailHosting;
