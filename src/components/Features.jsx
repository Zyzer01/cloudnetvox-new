import React from 'react';
import Header from './Header';
import { SlCloudUpload } from 'react-icons/sl';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const Features = () => {
  const sleekShowVariants = {
    hidden: {
      opacity: 0,
    },
    onScreen: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };
  const featureContent = [
    {
      title: '99% Uptime',
      description:
        '99% Uptime Don&apos;t be distracted! You&apos;re free to focus on growing your business, let us handle your site',
      icon: <SlCloudUpload />,
    },
    {
      title: 'Easy Control Panel',
      description:
        'Easy Control Panel From tracking bandwidth, i/o stats to creating SSL certificates, all the tools you need are in one convenient location.',
      icon: <HiOutlineAdjustmentsVertical />,
    },
    {
      title: 'Daily Backups',
      description:
        'Daily Backups The daily data back-up service offered by CloudNetvox is aimed at providing you with automatic recovery of lost data.',
      icon: <HiOutlineAdjustmentsVertical />,
    },
    {
      title: '99% Uptime',
      description:
        '99% Uptime Don&apos;t be distracted! You&apos;re free to focus on growing your business, let us handle your site',
      icon: <SlCloudUpload />,
    },
    {
      title: '99% Uptime',
      description:
        '99% Uptime Don&apos;t be distracted! You&apos;re free to focus on growing your business, let us handle your site',
      icon: <SlCloudUpload />,
    },
    {
      title: '99% Uptime',
      description:
        '99% Uptime Don&apos;t be distracted! You&apos;re free to focus on growing your business, let us handle your site',
      icon: <SlCloudUpload />,
    },
  ];
  return (
    <div className="bg-sky p-16 md:p-24">
      <Header
        heading="Overall Features"
        sub="Our revolutionary Cloud solution is powerful, simple, and surprisingly affordable."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center py-16 gap-y-16 gap-x-4">
        {featureContent.map((item, index) => (
          <motion.div
            className="flex"
            key={index}
            variants={sleekShowVariants}
            initial="hidden"
            whileInView="onScreen">
            <div className="mr-7">
              <p className="text-4xl text-domain">{item.icon}</p>
            </div>
            <div>
              <h3 className="text-2xl mb-2">{item.title}</h3>
              <p className="text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
