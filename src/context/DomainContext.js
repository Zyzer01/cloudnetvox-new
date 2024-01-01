'use client';
import { createContext, useContext } from 'react';

export const DomainContext = createContext();

const DomainContextProvider = ({ children }) => {
  const domainPrices = [
    {
      extension: '.com',
      price: 12200,
    },
    {
      extension: '.com',
      price: 12200,
    },
    {
      extension: '.com',
      price: 12200,
    },
    {
      extension: '.com',
      price: 12200,
    },
  ];

  const webHostingPrices = [
    {
      name: 'Lite',
      price: 999,
    },
    {
      name: 'Premium',
      price: 1300,
    },
    {
      name: 'Extra',
      price: 2500,
    },
  ];

  const cloudServers = [
    {
      name: 'SSD Cloud Server',
      price: 9000,
    },
    {
      name: 'Shared Hosting',
      price: 999,
    },
    {
      name: 'Dedicated Servers',
      price: 60000,
    },
  ];
  const contextValues = {
    domainPrices,
    webHostingPrices,
    cloudServers,
  };

  return <DomainContext.Provider value={contextValues}>{children}</DomainContext.Provider>;
};

export default DomainContextProvider;
