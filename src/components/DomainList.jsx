'use client'

import { useState } from "react";
import "../styles/table.css";
import { domainPrices } from "@/utility/domainNameData";
import { motion, AnimatePresence } from "framer-motion";

const PriceFormatted = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currency: "NGN",
  }).format(price);

  return <>{formattedPrice}</>;
};

const DomainRow = ({
  tag,
  ext,
  formerRegPrice,
  formerRenewPrice,
  formerTransferPrice,
  regPrice,
  renewPrice,
  transferPrice,
  tagColor,
}) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <th scope="row">
        {ext}{" "}
        <span
          className={`${tagColor} ml-2 text-xs p-1.5 rounded-md font-medium`}
        >
          {tag}
        </span>
      </th>
      <td>
        <del>{formerRegPrice}</del>
        <span className="text-muted font-medium">
          {" "}
          &#8358; 
          <PriceFormatted price={regPrice} />
        </span>
      </td>
      <td>
        <del>{formerRenewPrice}</del>
        <span className="text-muted font-medium">
          {" "}
          &#8358;
          <PriceFormatted price={renewPrice} />
        </span>
      </td>
      <td>
        <del>{formerTransferPrice}</del>
        <span className="text-muted font-medium">
          {" "}
          &#8358;
          <PriceFormatted price={transferPrice} />
        </span>
      </td>
    </motion.tr>
  );
};



// eslint-disable-next-line @next/next/no-async-client-component


async function getStrapiData(url) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// eslint-disable-next-line @next/next/no-async-client-component


const DomainList = async () => {

  const strapiData = await getStrapiData("/api/domain")

  const { domainNames } = strapiData.data.attributes

  // console.log(domainNames);
  const [visibleRow, setVisibleRow] = useState(5);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setVisibleRow(domainPrices.length);
    setShowMore(true);
  };

  const handleHide = () => {
    setVisibleRow(10);
    setShowMore(false);
  };

  return (
    <div>
      <div className="domain-table-section ">
        <div className="container flex justify-center">
          <div className="table-plan-box">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="border-t-0 pt-0">
                    Extensions (TLD)
                  </th>
                  <th scope="col" className="border-t-0 pt-0">
                    Register
                  </th>
                  <th scope="col" className="border-t-0 pt-0">
                    Renew
                  </th>
                  <th scope="col" className="border-t-0 pt-0">
                    Transfer
                  </th>
                </tr>
              </thead>
              <motion.tbody
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AnimatePresence>
                  {domainPrices.slice(0, visibleRow).map((item, index) => (
                    <DomainRow
                      key={index}
                      ext={item.ext}
                      formerRegPrice={item.formerRegPrice}
                      regPrice={item.regPrice}
                      formerRenewPrice={item.formerRenewPrice}
                      renewPrice={item.renewPrice}
                      formerTransferPrice={item.formerTransferPrice}
                      transferPrice={item.transferPrice}
                      tag={item.tag}
                      tagColor={item.tagColor}
                    />
                  ))}
                </AnimatePresence>
              </motion.tbody>
            </table>
            <div className="text-center mt-6">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={showMore ? handleHide : handleShowMore}
              >
                {showMore ? "Hide" : "See more"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainList;
