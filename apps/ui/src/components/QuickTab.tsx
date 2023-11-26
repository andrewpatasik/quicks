import { FC, Key } from "react";
import QuickButton from "./QuickButton";
import { useQuickTab } from "../hooks/useQuickTab";
import { cn } from "../utils";

const QuickTab: FC = () => {
  const { tabOrder, activeTab, isOpen } = useQuickTab();

  return (
    <nav className="flex flex-row-reverse absolute right-6 bottom-6">
      <div
        className={cn(
          "ml-7 relative",
          isOpen && activeTab !== "quick" && "right-4"
        )}
      >
        <QuickButton type="quick" variants={activeTab === "quick" ? "active" : "idle"} />
      </div>

      <ul
        className={cn(
          "flex",
          isOpen && activeTab !== "quick" && "absolute z-10",
          !isOpen && "hidden"
        )}
      >
        {[...tabOrder]
          .map(
            (
              item: "task" | "inbox",
              index: Key | null | undefined
            ) => (
              <li key={index}>
                <QuickButton
                  type={item}
                  variants={activeTab === item ? "active" : "idle"}
                  className="ml-7"
                />
              </li>
            )
          )}
      </ul>
    </nav>
  );
};

export default QuickTab;
