'useClient';
import { useContext } from 'react';
import { DomainContext } from '@/context/DomainContext';
import { animate, motion } from 'framer-motion';

const DomainSearchBox = ({ enableAnimation }) => {
  const contextValues = useContext(DomainContext);

  const { domainPrices } = contextValues;

  const [com, net, info] = domainPrices;

  const cardVariants = {
    offscreen: {
      y: enableAnimation ? 300 : 0,
    },
    onscreen: {
      y: 50,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      className="p-16 md:p-28 grid grid-cols-3 place-items-center gap-x-8 gap-y-8"
      variants={cardVariants}
      initial="offscreen"
      whileInView={enableAnimation && 'onscreen'}
      viewport={{ once: true, amount: 0.8 }}>
      <div className="col-span-3 md:col-span-1">
        <h2 className="text-4xl font-medium leading-snug">Find Your Perfect Domain Name </h2>
        <p className="text-muted mt-3 font-medium">There are no limits, make the search!</p>
      </div>
      <div className="col-span-3 md:col-span-2">
        <div className="flex-flex-col space-y-6">
          <div className="relative transition ease-in-out duration-3">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="Search"
              placeholder="Enter Your Domain Name Here"
              className="w-full rounded-full border border-gray-300 py-4 px-6 shadow-md"
            />
            <span className="absolute inset-y-0 end-0 grid w-16 pr-10 place-content-center">
              <button
                type="button"
                className="px-4 py-2 bg-domain text-white md:hover:text-domain md:hover:bg-white hover:drop-shadow-md transition ease-in-out duration-300 font-medium rounded-full">
                <span className="sr-only">Search</span>
                Search
              </button>
            </span>
          </div>

          <div className="flex align-items-center justify-between space-x-4">
            <p className="text-muted">
              <span className="text-blue-600 font-bold">.COM</span> ₦12,200
            </p>
            <p className="text-muted">
              <span className="text-domain font-bold">.CO</span> ₦29,500
            </p>
            <p className="text-muted">
              <span className="text-red-600 font-bold">
                .COM<span className="text-green-800">.NG</span>
              </span>{' '}
              ₦5,500
            </p>
            <p className="text-muted">
              <span className="text-secondary font-bold">.AFRICA</span> ₦10,000
            </p>
            <p className="text-muted">
              <span className="text-alternate font-bold">.NET</span> ₦13,700
            </p>
            <p className="text-muted">
              <span className="text-green-800 font-bold">
                .CO<span className="text-red-700">.ZA</span>
              </span>{' '}
              ₦6,000
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DomainSearchBox;
