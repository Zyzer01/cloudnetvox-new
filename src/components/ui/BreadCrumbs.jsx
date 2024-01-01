import Link from 'next/link';
import React from 'react';
import { CiHome } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';

const BreadCrumbs = ({ page }) => {
  return (
    <nav>
      <ol className="flex items-center justify-center gap-1 text-sm text-gray-400">
        <Link href="/">
          <li className="flex items-center transition hover:text-gray-500 text-gray-400">
            <span className="text-white text-lg">
              <CiHome />
            </span>
            <span className="underline ml-2"> Home </span>
          </li>
        </Link>
        <li>
          <IoIosArrowForward />
        </li>
        <li className="block transition hover:text-gray-500 ">{page}</li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
