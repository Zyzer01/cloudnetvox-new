import React from 'react';
import BreadCrumbs from './ui/BreadCrumbs';

const AltHero = ({ pageTitle, pageSub, breadcrumb }) => {
  return (
    <div className="bg-primary">
      <div className="grid md:grid-cols-4 place-content-center place-items-center h-96">
        <div></div>
        <div className="text-white text-center col-span-4">
          <div className="py-16">
            <h1 className="text-4xl text-white py-4">{pageTitle}</h1>
            <p className="">{pageSub}</p>
          </div>
          <BreadCrumbs page={breadcrumb} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AltHero;
