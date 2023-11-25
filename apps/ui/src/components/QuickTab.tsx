import { FC, Key } from "react";
import QuickButton from "./QuickButton";
import { useQuickTab } from "../hooks/useQuickTab";
import { cn } from "../utils";

const QuickTab: FC = () => {
  const { tabOrder, activeTab, isOpen } = useQuickTab();

  return (
    <nav className="flex flex-row-reverse absolute right-4 bottom-4">
      <div
        className={cn(
          "mx-4",
          isOpen && activeTab !== "quick" && "absolute z-10"
        )}
      >
        <QuickButton type={activeTab} variants="active" />
      </div>

      <ul
        className={cn(
          "flex space-x-4",
          isOpen && activeTab !== "quick" && "relative right-7 z-0",
          !isOpen && "hidden"
        )}
      >
        {[...tabOrder]
          .slice(1)
          .map(
            (
              item: "task" | "inbox" | "quick",
              index: Key | null | undefined
            ) => (
              <li key={index}>
                <QuickButton type={item} variants="idle" />
              </li>
            )
          )}
      </ul>
    </nav>
  );
};

export default QuickTab;
