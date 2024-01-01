import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { IoMailOutline } from 'react-icons/io5';
import Image from 'next/image';
import styles from '../styles/overlay.css';

const Footer = () => {
  const services = [
    {
      name: 'Shared Hosting',
      link: '/shared-hosting',
    },
    {
      name: 'SSD Cloud Servers',
      link: '/cloud-servers',
    },
    {
      name: 'Email Hosting',
      link: '/email-hosting',
    },
    {
      name: 'Domain Name',
      link: '/domains',
    },
  ];
  const company = [
    {
      name: 'About us',
      link: '/about',
    },
    {
      name: 'Testimonials',
      link: 'https://hostadvice.com/hosting-company/cloudnetvox-reviews/',
    },
    {
      name: 'Contact',
      link: '/clients/contact',
    },
    {
      name: 'Pricing',
      link: '/shared-hosting',
    },
  ];

  const terms = [
    {
      name: 'Terms of Service',
      link: '/terms-of-service',
    },
    {
      name: 'Privacy Policy',
      link: '/privacy-policy',
    },
    {
      name: 'Documentation',
      link: 'https://cloudnetvox.com/clients/index.php?rp=/knowledgebase',
    },
  ];

  const contact = [
    {
      value: '3rd Floor, Aula Plaza, Mpape-Abuja.',
      icon: <IoLocationOutline />,
      link: '',
    },
    {
      value: '0702-500-0200',
      icon: <MdOutlinePhoneInTalk />,
      link: 'tel:07025000200',
    },
    {
      value: 'info@cloudnetvox.com',
      icon: <IoMailOutline />,
      link: 'mailto:info@cloudnetvox.com',
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
                <p className="text-off hover:text-white transition ease">{item.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-5">
            <h4 className="text-2xl text-white mb-3">Company</h4>
            {company.map((item, index) => (
              <Link key={index} href={item.link}>
                <p className="text-off hover:text-white transition ease">{item.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-5">
            <h4 className="text-2xl text-white mb-3">Terms</h4>
            {terms.map((item, index) => (
              <Link key={index} href={item.link}>
                <p className="text-off hover:text-white transition ease">{item.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-5">
            <h4 className="text-2xl text-white mb-3">Contact Info</h4>
            {contact.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`${item.link ? '' : 'pointer-events-none'}`}>
                <p
                  href={item.link}
                  className="flex items-center text-off hover:text-white transition ease">
                  <span className="mr-2 text-xl">{item.icon}</span>
                  {item.value}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 my-20">
          <div>
            <p className="text-off">
              Offers valid for a limited time only and reflect multi annual discounts. Other terms
              and conditions may apply. Click{' '}
              <span className="text-domain">
                <Link href="/new">here</Link>
              </span>{' '}
            </p>
          </div>
          <div>
            <p>Payments we</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-8 justify-center items-center md:justify-between bg-primary p-12 md:px-28 ">
        <div>
          <p className="text-off">Copyright © 2023 Cloudnetvox. All Rights Reserved.</p>
        </div>
        <div>
          <Image
            src="/images/logos/cloudnetvox logo.png"
            width={172}
            height={40}
            alt="Cloudnetvox logo"
          />
        </div>
        <div>logos</div>
      </div>
    </section>
  );
};

export default Footer;
