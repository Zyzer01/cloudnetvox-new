import React from "react";
import Marquee from "react-fast-marquee";
import { FaBitcoin } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";
import { IoCardOutline } from "react-icons/io5";
import { FaPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa6";

const ScrollingBanner = () => {
  const payments = [
    {
      name: "Cryptocurrency",
      icon: <FaBitcoin />,
      iconColor: "text-yellow-500",
    },
    {
      name: "Paypal",
      icon: <FaPaypal />,
      iconColor: "text-domain",
    },
    {
      name: "Bank Transfer",
      icon: <BiSolidBank />,
      iconColor: "text-blue-300",
    },
    {
      name: "Debit Cards",
      icon: <IoCardOutline />,
      iconColor: "text-yellow-700",
    },
    {
      name: "Google Pay",
      icon: <FaGooglePay />,
      iconColor: "text-red-600",
    },
  ];
  return (
    <div className="p-2">
      <div>
        <Marquee>
          <p className="font-medium mx-3">We accept: </p>
          {payments.map((item, index) => (
            <p key={index} className="flex items-center mr-5">
              <span className={`mr-1.5 text-xl ${item.iconColor}`}>
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
