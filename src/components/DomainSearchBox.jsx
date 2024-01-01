import React from 'react';

const DomainSearchBox = () => {
  return (
    <div className="p-16 md:p-28 grid grid-cols-3 place-items-center">
      <div className="col-span-3 md:col-span-1">
        <h2 className="text-4xl font-medium leading-snug">Find Your Perfect Domain Name </h2>
        <p className="text-muted mt-3 font-medium">There are no limits, make the search!</p>
      </div>
      <div className="col-span-3 md:col-span-2">
        <div className="flex-flex-col space-y-6">
          <div className="relative transition ease-in-out duration-3">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-full border border-gray-300 py-4 px-6 shadow-md sm:text-sm"
            />
            <span className="absolute inset-y-0 end-0 grid w-16 pr-10 place-content-center">
              <button
                type="button"
                className="px-4 py-2 bg-domain text-white md:hover:text-domain md:hover:bg-white hover:drop-shadow-md transition ease-in-out duration-300 font-medium rounded-full">
                <span className="sr-only">Search</span>
                Search
              </button>
            </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSearchBox;
