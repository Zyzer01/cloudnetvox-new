import Link from "next/link";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import styles from "../styles/overlay.css";
import {
  FaBitcoin,
  FaCcVisa,
  FaGooglePay,
  FaCcPaypal,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FaCcMastercard,
  FaCcStripe,
  FaCcApplePay,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    {
      name: "Shared Hosting",
      link: "/shared-hosting",
    },
    {
      name: "VPS Hosting",
      link: "/cloud-servers",
    },
    {
      name: "Email Hosting",
      link: "/email-hosting",
    },
    {
      name: "Domain Name",
      link: "/domains",
    },
  ];
  const company = [
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Testimonials",
      link: "https://hostadvice.com/hosting-company/cloudnetvox-reviews/",
    },
    {
      name: "Contact",
      link: "/clients/contact",
    },
    {
      name: "Pricing",
      link: "/shared-hosting",
    },
  ];

  const terms = [
    {
      name: "Terms of Service",
      link: "/terms-of-service",
    },
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      name: "Documentation",
      link: "https://cloudnetvox.com/clients/index.php?rp=/knowledgebase",
    },
  ];

  const contact = [
    {
      value: "3rd Floor, Aula Plaza, Mpape-Abuja.",
      icon: <IoLocationOutline />,
      link: "",
    },
    {
      value: "0702-500-0200",
      icon: <MdOutlinePhoneInTalk />,
      link: "tel:07025000200",
    },
    {
      value: "info@cloudnetvox.com",
      icon: <IoMailOutline />,
      link: "mailto:info@cloudnetvox.com",
    },
  ];

  const paymentMethods = [
    <FaBitcoin key="bitcoin" />,
    <FaCcVisa key="visa" />,
    <FaCcMastercard key="mastercard" />,
    <FaCcPaypal key="paypal" />,
    <FaCcStripe key="stripe" />,
    <FaCcApplePay key="applePay" />,
    <FaGooglePay key="googlePay" />,
  ];

  const socials = [
    {
      link: "https://www.facebook.com/cloudnetvox",
      icon: <FaFacebookF />,
    },
    {
      link: "https://www.x.com/cloudnetvox",
      icon: <FaXTwitter />,
    },
    {
      link: "https://www.linkedin.com/company/netvoxnetworks",
      icon: <FaLinkedin />,
    },
    {
      link: "https://www.instagram.com/cloudnetvox",
      icon: <FaInstagram />,
    },
  ];

  return (
    <section className={styles}>
      <div className="px-8 lg:px-28 pt-28 pb-8 bg-primary opacity-95">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
          <div className="flex flex-col space-y-5">
            <h4 className="text-2xl text-white mb-3">Services</h4>
            {services.map((item, index) => (
              <Link key={index} href={item.link}>
                <p className="text-off hover:text-white transition ease">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-5">
            <h4 className="text-2xl text-white mb-3">Company</h4>
            {company.map((item, index) => (
              <Link key={index} href={item.link}>
                <p className="text-off hover:text-white transition ease">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-5">
            <h4 className="text-2xl text-white mb-3">Terms</h4>
            {terms.map((item, index) => (
              <Link key={index} href={item.link}>
                <p className="text-off hover:text-white transition ease">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col flex-wrap space-y-5">
              <h4 className="text-2xl text-white mb-3">Contact Info</h4>
              {contact.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`${item.link ? "" : "pointer-events-none"}`}
                >
                  <p
                    href={item.link}
                    className="flex items-center text-off hover:text-white transition ease"
                  >
                    <span className="mr-2 text-xl">{item.icon}</span>
                    {item.value}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 my-16 gap-y-8 md:gap-x-8 place-content-between text-off">
          <div>
            <p>
              Offers valid for a limited time only and reflect multi annual
              discounts. Other terms and conditions may apply. Click{" "}
              <span className="text-domain">
                <Link href="/new">here</Link>
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-wrap items-center space-x-4 space-y-4 md:space-y-0">
            <div>
              <p className="font-medium">Payments we accept: </p>
            </div>
            <div className="flex space-x-3">
              {paymentMethods.map((item, index) => (
                <p key={index} className="text-3xl">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-y-8 place-items-center place-content-center md:place-content-between p-12 lg:px-28 bg-primary ">
        <div>
          <p className="text-off text-center md:text-left">
            Copyright © 2023 Cloudnetvox. All Rights Reserved.
          </p>
        </div>
        <div className="order-first md:order-none">
          <Image
            src="/images/logos/cloudnetvox logo.png"
            width={172}
            height={40}
            alt="Cloudnetvox logo"
          />
        </div>
        <div>
          <div className="flex space-x-3">
            {socials.map((item, index) => (
              <Link href={item.link} target="_blank" key={index}>
                <p className="text-off text-lg border border-off rounded-full p-2">
                  {item.icon}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
