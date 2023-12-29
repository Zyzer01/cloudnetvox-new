import Image from 'next/image';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const buttonVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: { type: 'spring', delay: 0.5 },
  },
};

const Hero = () => {
  return (
    <div>
      <div className="p-28 min-h-screen grid grid-cols-6 gap-x-16 justify-center items-center bg-primary text-white">
        <div className="col-span-6 md:col-span-3">
          <p className="mb-0">
            <i className="fas fa-bell rounded-circle mr-2"></i> Get a{' '}
            <span className="text-primary">.com.ng </span> for as low as N1200
          </p>
          <h1 className="text-5xl font-semibold leading-snug">
            Unlimited Domain & Hosting in One Platform
          </h1>
          <h2 className="text-xl leading-normal mb-6">
            A ton of website hosting options, 99.9% uptime guarantee, free SSL certificate, easy
            WordPress installs.
          </h2>
          <Button text="View plans" variants={buttonVariants} initial="hidden" animate="visible" />
        </div>
        <div className="col-span-3">
          <Image
            className="w-full"
            width={851}
            height={671}
            src={'/images/hero-img-new.svg'}
            alt="Computer with cloud and server illustration"
          />
        </div>
      </div>
      <div className="welcome-pattern -mt-8 md:-mt-16 w-full">
        <Image
          className="w-full"
          width={1919}
          height={167}
          src={'/images/welcome-pattern.png'}
          alt="zig zag clouds illustration"
        />
      </div>
    </div>
  );
};

export default Hero;
