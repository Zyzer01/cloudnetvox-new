import Link from 'next/link';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

const TopBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-alternate flex justify-between py-2.5 px-8 md:px-28">
      <div className="flex divide-x space-x-4">
        <Link href="tel:07025000200"> 
          <p className="flex items-center text-white">
            <span className="mr-2">
              <IoMdCall />
            </span>
            <span className="lg:visible">Call Us: 0702-500-0200</span>
          </p>
        </Link>
        <Link href="mailto:info@cloudnetvox.com">
          <p className="flex items-center text-white ml-4">
            <span className="mr-2">
              <MdEmail />
            </span>
            <span className="hidden lg:visible">Email: info@cloudnetvox.com</span>
          </p>
        </Link>
      </div>
      <div className="flex divide-x space-x-4">
        <Link href="tel:07025000200">
          <p className="flex items-center text-white">
            <span className="mr-2">
              <FaWhatsapp />
            </span>{' '}
            Chat
          </p>
        </Link>
        <Link href="mailto:info@cloudnetvox.com">
          <p className="flex items-center text-white ml-4">
            <span className="mr-2">
              <MdPayment />
            </span>
            <span className="hidden lg:visible">Payment Options</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TopBanner;
