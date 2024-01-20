"use client";
import { useState } from "react";
import Link from "next/link";
import "../styles/table.css";
import Header from "./Header";
import { domains } from "@/utility/PremiumDomainNameData";
import { motion, AnimatePresence } from "framer-motion";
import { BsFire } from "react-icons/bs";
import RegularCta from "./RegularCta";

const PremiumDomainRow = ({ cols }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      {cols.map((col, index) => (
        <td key={index}>
          <Link href="https://cloudnetvox.com/clients/cart.php?a=add&domain=register">
            {col}
          </Link>
        </td>
      ))}
    </motion.tr>
  );
};

const PremiumDomainList = () => {
  const [visibleRow, setVisibleRow] = useState(10);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setVisibleRow(domains.length);
    setShowMore(true);
  };

  const handleHide = () => {
    setVisibleRow(10);
    setShowMore(false);
  };

  const getColumnsPerRow = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 756) {
        return 5;
      } else {
        return 3;
      }
    }
  };

  const columnsPerRow = getColumnsPerRow();

  const rows = domains.reduce((acc, domain, index) => {
    const rowIndex = Math.floor(index / columnsPerRow);
    acc[rowIndex] = acc[rowIndex] || [];
    acc[rowIndex].push(domain);
    return acc;
  }, []);

  const rippleRedVariants = {
    initial: {
      boxShadow:
        "0 0 0 0 rgba(255, 0, 0, 0.1), 0 0 0 10px rgba(255, 0, 0, 0.1), 0 0 0 20px rgba(255, 0, 0, 0.1)",
    },
    animate: {
      boxShadow:
        "0 0 0 10px rgba(255, 0, 0, 0.1), 0 0 0 20px rgba(255, 0, 0, 0.1), 0 0 0 30px rgba(255, 0, 0, 0)",
    },
  };

  return (
    <div>
      {/* <Header heading="Premium Domain name" sub="i dont know what to add" /> */}

      <div className="domain-table-section bg-sky  text-domain flex justify-center">
        <div className="container bg-white mx-16 rounded-2xl">
          <div className="table-plan-box">
            <table className="table">
              <thead>
                <tr>
                  <th colSpan={columnsPerRow}>
                    <h3 className="flex">
                      Premium Domain List
                      <motion.span
                        className="text-red-600 text-xl ml-5 rounded-full"
                        initial="initial"
                        animate="animate"
                        variants={rippleRedVariants}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <BsFire />
                      </motion.span>
                    </h3>
                  </th>
                </tr>
              </thead>
              <motion.tbody
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AnimatePresence>
                  {rows.slice(0, visibleRow).map((row, rowIndex) => (
                    <PremiumDomainRow key={rowIndex} cols={row} />
                  ))}
                </AnimatePresence>
              </motion.tbody>
            </table>
            <div className="text-center mt-6 text-black">
              <motion.button
                className="bg-domain p-2 text-white rounded"
                whileTap={{ scale: 0.95 }}
                onClick={showMore ? handleHide : handleShowMore}
              >
                {showMore ? "Hide" : "See more"}
              </motion.button>
              <p className="mt-6">
                Not what you want?{" "}
                <span className="text-domain">
                  {" "}
                  <Link href="https://cloudnetvox.com/clients/cart.php?a=add&domain=register">
                    {" "}
                    Explore more
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumDomainList;
