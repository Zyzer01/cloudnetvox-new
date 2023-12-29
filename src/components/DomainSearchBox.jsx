import React from 'react';
import DomainForm from './DomainForm';

const DomainSearchBox = () => {
  return (
    <div className="p-16 md:p-28 grid grid-cols-3 place-items-center">
      <div className="col-span-3 md:col-span-1">
        <h2 className="text-4xl font-medium leading-snug">Find Your Perfect Domain Name </h2>
        <p className="text-muted mt-3 font-medium">There are no limits, make the search!</p>
      </div>
      <div className="col-span-3 md:col-span-2">
        <div>
          <DomainForm />
        </div>
        <div className="flex">
          <p>.com</p>
          <p>.com</p>
          <p>.com</p>
          <p>.com</p>
          <p>.com</p>
          <p>.com</p>
          <p>.com</p>
          <p>.com</p>
          <p>.com</p>
          <p>.com</p>
          <p>.com</p>
        </div>
      </div>
    </div>
  );
};

export default DomainSearchBox;
