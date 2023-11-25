import { FC } from "react";
import LightingIcon from "../assets/icons/Lighting";
import InboxIcon from "../assets/icons/InboxIcon";
import TaskIcon from "../assets/icons/TaskIcon";
import { cn } from "../utils";
import { useQuickTab } from "../hooks/useQuickTab";

interface QuickButtonValue {
  type: "task" | "inbox" | "quick";
  variants?: "active" | "idle";
  className?: string;
}

const buttonIcon = {
  quick: {
    active: {
      icon: <LightingIcon />,
      color: "bg-primary-blue",
    },
    idle: {
      icon: <LightingIcon />,
      color: "bg-[#4F4F4F]",
    },
  },
  inbox: {
    active: {
      icon: <InboxIcon variants="active" />,
      color: "bg-indicator-purple",
    },
    idle: {
      icon: <InboxIcon variants="idle" />,
      color: "bg-[#f2f2f2]",
    },
  },
  task: {
    active: {
      icon: <TaskIcon variants="active" />,
      color: "bg-indicator-brown",
    },
    idle: {
      icon: <TaskIcon variants="idle" />,
      color: "bg-[#f2f2f2]",
    },
  },
};

const QuickButton: FC<QuickButtonValue> = ({
  type,
  variants,
  className,
}) => {
  const { setActiveTab, isOpen, setIsOpen } = useQuickTab();

  const onClickButton = (type:any) => {
    setActiveTab(type)

    if (type === 'quick') {
      setIsOpen(!isOpen)
    }
  }

  return (
    <button
      className={cn(
        variants === "active"
          ? buttonIcon[type].active.color
          : buttonIcon[type].idle.color,
        "w-[4.25rem] h-[4.25rem] rounded-full flex items-center justify-center shrink-0",
        className
      )}
      onClick={() => onClickButton(type)}
    >
      {variants === "active"
        ? buttonIcon[type].active.icon
        : buttonIcon[type].idle.icon}
    </button>
  );
};

export default QuickButton;
