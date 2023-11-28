import {
  FC,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";

const QuickTabContext = createContext<any>(null);

interface UseQuickTabValue {
  children: ReactElement;
}

export const QuickTabProvider: FC<UseQuickTabValue> = ({ children }) => {
  const [tabOrder, setTabOrder] = useState(["task", "inbox"]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") || "quick";
  const setSelectedActiveTab = (string: string) =>
    setSearchParams(`tab=${string}`);

  useEffect(() => {
    const tabIndex = tabOrder.indexOf(activeTab);
    const newOrder = [...tabOrder];
    const selectedTab = newOrder.splice(tabIndex, 1)[0];
    newOrder.splice(tabIndex + 1, 0, selectedTab);

    setTabOrder(newOrder);
  }, [activeTab]);

  useEffect(() => {
    if (activeTab !== "quick") setIsOpen(true);
  }, [isOpen]);

  return (
    <QuickTabContext.Provider
      value={{ tabOrder, activeTab, setSelectedActiveTab, isOpen, setIsOpen }}
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
