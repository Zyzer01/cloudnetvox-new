import Image from 'next/image';
import React from 'react';
import ButtonV2 from './ui/ButtonV2';
import Link from 'next/link';

const RegularCta = ({
  heading,
  description,
  buttonText,
  isReversed,
  ctaImageSrc,
  darkBg,
  hideImage,
  link,
}) => {
  return (
    <div className="grid md:grid-cols-2 p-16 md:p-28 gap-x-8 gap-y-8 place-items-center place-content-center">
      {isReversed ? (
        <>
          <div>
            <h3 className="text-3xl my-3">{heading}</h3>
            <p className={`${darkBg ? 'text-white' : 'text-muted'} mb-6 leading-7`}>
              {description}
            </p>
            <Link href={link}>
              <ButtonV2 text={buttonText} />
            </Link>
          </div>
          <div className={`${hideImage && 'hidden md:block'}`}>
            <Image src={ctaImageSrc} width={500} height={400} alt={heading} />
          </div>
        </>
      ) : (
        <>
          <div className={`${hideImage && 'hidden md:block'}`}>
            <Image src={ctaImageSrc} width={500} height={400} alt={heading} />
          </div>
          <div>
            <h3 className="text-3xl my-3">{heading}</h3>
            <p className={`${darkBg ? 'text-white' : 'text-muted'} mb-6 leading-7`}>
              {description}
            </p>
            <Link href={link}>
              <ButtonV2 text={buttonText} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default RegularCta;
