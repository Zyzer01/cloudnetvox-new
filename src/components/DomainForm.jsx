import React from 'react';

const DomainForm = () => {
  return (
    <form
      action="https://cloudnetvox.com/clients/cart?a=add&amp;domain=register"
      method="POST"
      className="flex items-center w-full">
      <input
        type="text"
        name="query"
        placeholder="Enter Your Domain Name Here"
        className="p-4 border rounded-full mr-2 w-full shadow"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300">
        Search Domain
      </button>
    </form>
  );
};

export default DomainForm;
