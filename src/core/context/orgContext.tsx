import React from 'react';

interface OrgContextType {
  org: string;
  setOrg: (org: string) => void;
}

export const OrgContext = React.createContext<OrgContextType>(undefined);

export const OrgProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [org, setOrg] = React.useState('Lemoncode');

  return (
    <OrgContext.Provider value={{ org, setOrg }}>
      {children}
    </OrgContext.Provider>
  );
};

export const useOrg = () => {
  const context = React.useContext(OrgContext);
  return context;
};
