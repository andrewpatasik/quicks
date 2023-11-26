import {
  FC,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const QuickTabContext = createContext<any>(null);

interface UseQuickTabValue {
  children: ReactElement;
}

export const QuickTabProvider: FC<UseQuickTabValue> = ({ children }) => {
  const [tabOrder, setTabOrder] = useState(["task", "inbox"]);
  const [activeTab, setActiveTab] = useState("quick");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      const tabIndex = tabOrder.indexOf(activeTab);

      const newOrder = [...tabOrder];
      const selectedTab = newOrder.splice(tabIndex, 1)[0];
      newOrder.splice(tabIndex + 1, 0, selectedTab);

      setTabOrder(newOrder);
  }, [activeTab]);

  return (
    <QuickTabContext.Provider
      value={{ tabOrder, activeTab, setActiveTab, isOpen, setIsOpen }}
    >
      {children}
    </QuickTabContext.Provider>
  );
};

export const useQuickTab = () => {
  const context = useContext(QuickTabContext);

  if (!context) throw new Error("useQuickTab must be within QuickTabProvider");

  return context;
};
