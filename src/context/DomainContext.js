"use client";
import { createContext, useContext } from "react";

export const DomainContext = createContext();

const DomainContextProvider = ({ children }) => {
  const domainPrices = [
    {
      ext: ".com",
      price: 12200,
    },
    {
      ext: ".com.ng",
      price: 1200,
    },
    {
      ext: ".co",
      price: 29500,
    },
    {
      ext: ".co.za",
      price: 6000,
    },
    {
      ext: ".net",
      price: 13700,
    },
    {
      ext: ".info",
      price: 8950,
    },
    {
      ext: ".africa",
      price: 10000,
    },
  ];

  const webHostingPrices = [
    {
      name: "Lite",
      price: 999,
    },
    {
      name: "Premium",
      price: 1300,
    },
    {
      name: "Extra",
      price: 2500,
    },
  ];

  const cloudServers = [
    {
      name: "VPS Hosting",
      price: 9000,
    },
    {
      name: "Shared Hosting",
      price: 999,
    },
    {
      name: "Dedicated Servers",
      price: 60000,
    },
  ];
  const ssdCloudServers = [
    {
      name: "Lite",
      globalPrice: 9000,
      localPrice: 29250,
    },
    {
      name: "Premium",
      globalPrice: 23000,
      localPrice: 45000,
    },
    {
      name: "Extra",
      globalPrice: 23000,
      localPrice: 65000,
    },
    {
      name: "Gold",
      globalPrice: 80000,
      localPrice: 100500,
    },
  ];
  const contextValues = {
    domainPrices,
    webHostingPrices,
    cloudServers,
    ssdCloudServers,
  };

  return (
    <DomainContext.Provider value={contextValues}>
      {children}
    </DomainContext.Provider>
  );
};

export default DomainContextProvider;
