import { FC, Key } from "react";
import QuickButton from "./QuickButton";
import { useQuickTab } from "../hooks/useQuickTab";
import { cn } from "../utils";

const QuickTab: FC = () => {
  const { tabOrder, activeTab, isOpen } = useQuickTab();

  return (
    <nav className="flex flex-row-reverse absolute right-8 bottom-7 z-10">
      <div
        className={cn(
          "ml-7",
          isOpen && activeTab !== "quick" && "absolute right-4 z-0"
        )}
      >
        <QuickButton
          type="quick"
          variants={activeTab === "quick" ? "active" : "idle"}
        />
      </div>

      <ul
        className={cn(
          "flex",
          isOpen && activeTab !== "quick" && "relative z-10",
          !isOpen && "hidden"
        )}
      >
        {[...tabOrder].map(
          (item: "task" | "inbox", index: Key | null | undefined) => (
            <li
              key={index}
              className={cn(
                "ml-7",
              )}
            >
              <QuickButton
                type={item}
                variants={activeTab === item ? "active" : "idle"}
              />
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default QuickTab;
