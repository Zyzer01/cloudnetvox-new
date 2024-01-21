import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";
import heroImage from "public/images/hero-img-new.png";
import welcomePattern from "public/images/welcome-pattern.png";
import { PiBellRinging } from "react-icons/pi";
import { motion } from "framer-motion";

const Hero = () => {
  const zoomInLeftVariants = {
    initial: {
      opacity: 0,
      scale: 0.1,
      x: '-100vw',
      transition: {
        duration: 0.5,
        ease: [0.55, 0.055, 0.675, 0.19],
      },
    },
    animate: {                   
      opacity: 1,
      scale: 1,
      x: 10,
      transition: { 
        type: "spring",
        damping: 12,
        duration: 0.5,
        ease: [0.175, 0.885, 0.32, 1],
      },
    },
  };
  const rippleWhiteVariants = {
    initial: {
      boxShadow:
        "0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 10px rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1)",
    },
    animate: {
      boxShadow:
        "0 0 0 10px rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 30px rgba(255, 255, 255, 0)",
    },
  };

  return (
    <div>
      <div className="px-8 sm:px-16 md:px-28 py-40 -mt-[65px] md:-mt-20 min-h-screen grid grid-cols-6 gap-x-16 justify-center items-center bg-primary text-white">
        <div className="col-span-6 lg:col-span-3">
          <div className="grid grid-cols-3">
            <div className="col-span-3 md:col-span-2">
              {/* <motion.p
                className="mb-4 rounded-full bg-gray-300 bg-opacity-20 mb-0 flex items-center p-2"
                initial="initial"
                animate="animate"
                variants={zoomInLeftVariants}
              >
                <motion.span
                  className="text-white text-xl mr-4 rounded-full"
                  initial="initial"
                  animate="animate"
                  variants={rippleWhiteVariants}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <PiBellRinging />
                </motion.span>
                <span className="font-bold"> .com.ng </span> 
                 domain name at N1200
              </motion.p> */}
            </div>
            <div></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
            Unlimited Domain & Hosting in One Platform
          </h1>
          <h2 className="text-xl leading-normal mb-6">
            A ton of website hosting options, 99.9% uptime guarantee, free SSL
            certificate, easy WordPress installs.
          </h2>
          <Link href="/shared-hosting">
            <Button text="View plans" />
          </Link>
        </div>
        <div className="col-span-6 lg:col-span-3">
          <Image
            className="w-full"
            width={851}
            height={671}
            src={heroImage}
            // placeholder="blur"
            alt="Computer with cloud and server illustration"
          />
        </div>
      </div>
      <div className="welcome-pattern -mt-8 md:-mt-16 w-full">
        <Image
          className="w-full"
          width={1919}
          height={167}
          src={welcomePattern}
          alt="zig-zag clouds illustration"
          // placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Hero;
