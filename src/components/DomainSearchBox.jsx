"useClient";
import { motion } from "framer-motion";
import data from "../data/prices.json";

const x = data.domainNames;

const DomainSearchBox = () => {


  const domainNames = [
    {
      colorVariant: "text-blue-600",
      ext: x.com.ext,
      price: x.com.price,
    },
    {
      colorVariant: "text-red-700",
      ext: x.net.ext,
      price: x.net.price,
    },
    {
      colorVariant: "text-green-800",
      ext: x.comNG.ext,
      price: x.comNG.price,
    },
    {
      colorVariant: "text-secondary",
      ext: x.africa.ext,
      price: x.africa.price,
    },
    {
      colorVariant: "text-red-700",
      ext: x.net.ext,
      price: x.net.price,
    },
  ];
  return (
    <div>
      <div className="p-8 md:px-16 lg:px-28 gap-8 grid grid-cols-2 text-center md:text-left">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-2xl  md:text-4xl font-medium leading-snug">
            Find Your Perfect Domain Name{" "}
          </h2>
          <p className="text-muted mt-3 font-medium">
            There are no limits, make the search!
          </p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="relative">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>
          <form action="https://cloudnetvox.com/clients/cart?a=add&domain=register" method="post">
            <input
              type="text"
              id="Search"
              name="query"
              placeholder="Enter Your Domain Name"
              className="w-full rounded-full border border-gray-300 py-4 px-6 shadow-md"
            />
            <span className="absolute inset-y-0 end-0 grid w-16 pr-10 place-content-center">
              <button
                type="submit"
                className="px-4 py-2 bg-domain text-white md:hover:text-domain md:hover:bg-white hover:drop-shadow-md transition ease-in-out duration-300 font-medium rounded-full"
              >
                <span className="sr-only">Search</span>
                Search
              </button>
            </span>
          </form>
          </div>
          <motion.div
            className="grid grid-cols-5 py-6 text-center"
            initial={{ scale: -0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {domainNames.map((item, index) => (
              <div key={index}>
                <span className={`${item.colorVariant} font-bold`}>
                  {item.ext}
                </span>
                <p className="text-muted uppercase">
                  ₦
                  {new Intl.NumberFormat("en-US", {
                    style: "decimal",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                    currency: "NGN",
                  }).format(item.price)}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DomainSearchBox;