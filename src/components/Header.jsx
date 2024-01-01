import React from 'react';

const Header = ({ heading, sub }) => {
  return (
    <div className="text-center grid grid-cols-6">
      <div></div>
      <div className="col-span-6 md:col-span-4">
        <h2 className="text-3xl md:text-4xl text-heading py-4">{heading}</h2>
        <p className="text-muted text-md md:text-lg">{sub}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
