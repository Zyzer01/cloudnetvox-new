import { createContext, useState } from 'react';

export const DomainContext = createContext();
const DomainContextProvider = ({ children }) => {
  const [domainPrices, setDomainPrices] = useState({
    '.com': 12200,
    '.ng': 5000,
  });

  const contextValues = {
    domainPrices,
    setDomainPrices,
  };

  return <DomainContext.Provider value={contextValues}>{children}</DomainContext.Provider>;
};
