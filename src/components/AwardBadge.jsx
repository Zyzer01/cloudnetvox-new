import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AwardBadge = () => {
  return (
    <div className="grid grid-cols-3 place-items-center p-16 md:p-28">
      <div>
        <Image
          src="/images/logos/2023-silver-top-25-best-cloud-hosting.png"
          width={383}
          height={382}
          alt="Top 25 Cloud Host Award for cloudnetvox"
          className="w-36"
        />
      </div>
      <div className="col-span-2">
        <h3 className="text-2xl py-3">Top 25 Cloud Host Award</h3>
        <p className="text-muted">
          Click{' '}
          <span className="text-domain">
            <Link href="/new">here</Link>
          </span>{' '}
          to see our badge award as the top 25 cloud hosting provider on HOSTADVICE
        </p>
      </div>
    </div>
  );
};

export default AwardBadge;
