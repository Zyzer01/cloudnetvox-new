import React from 'react';
import BreadCrumbs from './ui/BreadCrumbs'; 

const AltHero = ({ pageTitle, pageSub, breadcrumb }) => { 
  return (
      <div className="bg-primary text-white grid md:grid-cols-4 -mt-20 place-content-center place-items-center h-screen">
        <div></div>
        <div className="text-white text-center col-span-4 md:col-span-2">
          <div className="py-16">
            <h1 className="text-3xl md:text-4xl text-white py-4">{pageTitle}</h1>
            <p className="">{pageSub}</p>
          </div>
          <BreadCrumbs page={breadcrumb} />
        </div> 
        <div></div> 
      </div> 
  );
};

export default AltHero;
