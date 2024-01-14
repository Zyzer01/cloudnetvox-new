import Image from "next/image";
import React from "react";
import ButtonV2 from "./ui/ButtonV2";
import Link from "next/link";


const RegularCta = ({
  heading,
  description,
  buttonText,
  isReversed,
  ctaImageSrc,
  darkBg,
  hideImage,
  link,
  showButton,
}) => {
  return (
    <div className="grid md:grid-cols-2 p-16 md:px-28 gap-x-8 md:gap-x-16 gap-y-8 text-center sm:text-left place-items-center place-content-center">
      {isReversed ? (
        <>
          <div className="order-last md:order-first">
            <h2 className="text-2xl md:text-3xl my-3">{heading}</h2>
            <p
              className={`${
                darkBg ? "text-white" : "text-muted"
              } mb-6 leading-7`}
            >
              {description}
            </p>
            {showButton && (
              <Link href={link}>
                <ButtonV2 text={buttonText} />
              </Link>
            )}
          </div>
          <div className={`${hideImage && "hidden md:block order-first md:order-last"}`}>
            <Image
              src={ctaImageSrc}
              width={400}
              height={350}
              alt={heading}
              placeholder="blur"
            />
          </div>
        </>
      ) : (
        <>
          <div className={`${hideImage && "hidden md:block order-last md:order-first"}`}>
            <Image
              src={ctaImageSrc}
              width={400}
              height={350}
              alt={heading}
              placeholder="blur"
              
            />
          </div>
          <div className="">
            <h2 className="text-2xl md:text-3xl my-3">{heading}</h2>
            <p
              className={`${
                darkBg ? "text-white" : "text-muted"
              } mb-6 leading-7`}
            >
              {description}
            </p>
            {showButton && (
              <Link href={link}>
                <ButtonV2 text={buttonText} />
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RegularCta;
