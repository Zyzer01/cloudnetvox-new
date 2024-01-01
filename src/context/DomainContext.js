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

  const hostingPrices = [
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

  const contextValues = {
    domainPrices,
    hostingPrices,
  };

  return <DomainContext.Provider value={contextValues}>{children}</DomainContext.Provider>;
};

export default DomainContextProvider;
