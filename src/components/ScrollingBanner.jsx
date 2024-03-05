import React from "react";
import Marquee from "react-fast-marquee";
import { FaBitcoin } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";
import { IoCardOutline } from "react-icons/io5";
import { FaPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa6";

const ScrollingBanner = () => {
  const colorVariant = {
    yellow: "text-yellow-500",
    domain: "text-domain",
    blue: "text-blue-300",
    yellow700: "text-yellow-700",
    red: "text-red-600",
  };

  const payments = [
    {
      name: "Cryptocurrency",
      icon: <FaBitcoin />,
      iconColor: "yellow",
    },
    {
      name: "Paypal",
      icon: <FaPaypal />,
      iconColor: "domain",
    },
    {
      name: "Bank Transfer",
      icon: <BiSolidBank />,
      iconColor: "blue",
    },
    {
      name: "Debit Cards",
      icon: <IoCardOutline />,
      iconColor: "yellow700",
    },
    {
      name: "Google Pay",
      icon: <FaGooglePay />,
      iconColor: "red",
    },
  ];
  return (
    <div className="p-2 text-white">
      <div>
        <Marquee>
          <p className="font-medium mx-3">We accept: </p>
          {payments.map((item, index) => (
            <p key={index} className="flex items-center mr-5">
              <span
                className={`${colorVariant[item.iconColor]} mr-1.5 text-xl`}
              >
                {item.icon}
              </span>
              {item.name}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ScrollingBanner;
