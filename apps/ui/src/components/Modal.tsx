import { FC, ReactElement, Suspense, lazy, useEffect, useState } from "react";
import { cn } from "../utils";
import { useQuickTab } from "../hooks/useQuickTab";

const TodoContent = lazy(() => delayComponent(import("../pages/Todo")));
const InboxContent = lazy(() => delayComponent(import("../pages/Messanger")));

const delayComponent = (promise: Promise<any>) =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(() => promise);

const Modal: FC = () => {
  const { activeTab } = useQuickTab();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // this effect watches URL parameter update and set state from it to show modal content
    if (activeTab && activeTab !== "quick") {
      setIsModalOpen(true);
    }
  }, [activeTab]);

  const loadModalContent = () => {
    switch (activeTab) {
      case "task":
        return <TodoContent />;
      case "inbox":
        return <InboxContent />;
      default:
        return <></>;
    }
  };

  return (
    <div
      className={cn(
        "absolute bg-white w-[45.75rem] h-4/6 right-8 bottom-28 rounded-[.26rem] py-5 px-6",
        !isModalOpen && "hidden"
      )}
    >
      <Suspense fallback={<div>loading...</div>}>
        <div>{loadModalContent()}</div>
      </Suspense>
    </div>
  );
};

export default Modal;
