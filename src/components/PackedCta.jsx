import React from 'react';
import ButtonV2 from './ui/ButtonV2';

const PackedCta = ({ title, sub, desc, guaranteeBox }) => {
  return (
    <div className="grid lg:grid-cols-2 place-content-center place-items-center gap-x-6 gap-y-12 p-16 md:p-28">
      <div>
        <h3 className="text-3xl md:text-4xl">{title}</h3>
        <h5 className="text-xl py-4">{sub}</h5>
        <p className="pb-6">{desc}</p>
        <ButtonV2 text="Join Us" />
      </div>
      <div>
        <div className="grid grid-cols-2 gap-6 text-white">
          {guaranteeBox.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl text-center px-6 py-14 border flex flex-col items-center justify-center space-y-5">
              <p className="text-5xl text-domain">{item.icon}</p>
              <h6 className="text-lg">{item.boxTitle}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackedCta;
