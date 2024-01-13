'use client';
import AltHero from '@/components/AltHero';
import ComparisonTable from '@/components/ComparisonTable';
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
      <ComparisonTable
          comparisonPlans={comparisonPlans}
          lite={z.lite}
          premium={z.premium}
          extra={z.extra}
        />
    </ComponentWrapper>
  );
};

export default EmailHosting;
