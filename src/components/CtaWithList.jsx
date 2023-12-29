import Image from 'next/image';
import React from 'react';
import { IoCheckmarkDone } from 'react-icons/io5';
import ButtonV2 from './ui/ButtonV2';

const CtaWithList = ({ ctaHeading, ctaImageSrc, altText, buttonText, ctaListItems }) => {
  return (
    <div className="grid md:grid-cols-2 bg-sky p-16 gap-y-8 md:p-28">
      <div>
        <Image src={ctaImageSrc} alt={altText} width={525} height={460} />
      </div>
      <div>
        <h3 className="text-3xl">{ctaHeading}</h3>
        <div className="py-4">
          {ctaListItems.map((item, index) => (
            <p key={index} className="flex items-center my-4">
              {' '}
              <span className="mr-2 text-domain">
                <IoCheckmarkDone />
              </span>
              {item}
            </p>
          ))}
        </div>
        <ButtonV2 text={buttonText} />
      </div>
    </div>
  );
};

export default CtaWithList;
