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

// <div class="scroll-container text-center pb-0 pt-1">
// <p class="scrolling-payment" id="scroller1" style="margin-left: 1121px;">
//     <span><strong> We accept: </strong></span> &nbsp;
//     <span>Cryptocurrency <img src="img/core-img/crypto.svg" alt="bitcoin crypto"></span> &nbsp; | &nbsp;
//     <span>USSD <img src="img/core-img/USSD.svg" alt="USSD phone"></span> &nbsp; | &nbsp;
//     <span>Bank Transfer <img src="img/core-img/Bank TF.svg" alt="Bank Transfer"></span> &nbsp; | &nbsp;
//     <span>Barter <img src="img/core-img/Barter.svg" alt="Barter"></span> &nbsp; | &nbsp;
//     <span>Visa QR <img src="img/core-img/Visa QR.svg" alt="Visa QR"></span>
// </p>
// </div>
