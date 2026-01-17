import { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedServicesContextType {
  selectedServices: string[];
  setSelectedServices: React.Dispatch<React.SetStateAction<string[]>>;
  toggleService: (serviceId: string) => void;
}

const SelectedServicesContext = createContext<SelectedServicesContextType | undefined>(undefined);

export const SelectedServicesProvider = ({ children }: { children: ReactNode }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <SelectedServicesContext.Provider value={{ selectedServices, setSelectedServices, toggleService }}>
      {children}
    </SelectedServicesContext.Provider>
  );
};

export const useSelectedServices = () => {
  const context = useContext(SelectedServicesContext);
  if (!context) {
    throw new Error('useSelectedServices must be used within a SelectedServicesProvider');
  }
  return context;
};
