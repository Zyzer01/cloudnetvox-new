import React from 'react';
import Header from './Header';
import Image from 'next/image';
import HostAdviceWidget from './HostAdviceWidget';

const Reviews = () => {
  return (
    <div>
      <Header
        heading="Lots Of Customer Love Us"
        sub="See, we are loved and valued by many of our clients."
      />
      <HostAdviceWidget />
    </div>
  );
};

export default Reviews;
