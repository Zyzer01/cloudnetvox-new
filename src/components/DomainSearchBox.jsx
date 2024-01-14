'useClient';
import { motion } from 'framer-motion';
import data from '../data/prices.json';

const x = data.domainNames;

const DomainSearchBox = ({ enableAnimation }) => {
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

  const domainNames = [
    {
      colorVariant: 'text-blue-600',
      ext: x.com.ext,
      price: x.com.price,
    },
    {
      colorVariant: 'text-domain',
      ext: x.co.ext,
      price: x.co.price,
    },
    {
      colorVariant: 'text-green-800',
      ext: x.comNG.ext,
      price: x.comNG.price,
    },
    {
      colorVariant: 'text-secondary',
      ext: x.africa.ext,
      price: x.africa.price,
    },
    {
      colorVariant: 'text-alternate',
      ext: x.net.ext,
      price: x.net.price,
    },
    {
      colorVariant: 'text-red-700',
      ext: x.coZA.ext,
      price: x.coZA.price,
    },
  ];
  return (
    <motion.div
      className="p-1 md:p-28 grid grid-cols-3 place-items-center gap-x-8 gap-y-8"
      variants={cardVariants} 
      initial="offscreen"
      whileInView={enableAnimation && 'onscreen'}
      viewport={{ once: true, amount: 0.8 }}>
      <div className="col-span-3 md:col-span-1 text-center md:text-left">
        <h2 className="text-2xl  md:text-4xl font-medium leading-snug">
          Find Your Perfect Domain Name{' '}
        </h2>
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

          {/* <div className="flex align-items-center justify-between space-x-2 md:space-x-4">
            {domainNames.map((item, index) => (
              <p className="text-muted uppercase" key={index}>
                <span className={`${item.colorVariant} font-bold`}>{item.ext}</span> ₦
                {new Intl.NumberFormat('en-US', {
                  style: 'decimal',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                  currency: 'NGN',
                }).format(item.price)}
              </p>
            ))}
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default DomainSearchBox;
