import { FC } from "react";
import LightingIcon from "../assets/icons/Lighting";
import InboxIcon from "../assets/icons/InboxIcon";
import TaskIcon from "../assets/icons/TaskIcon";
import { cn } from "../utils";

interface QuickButtonValue {
  type: "task" | "inbox" | "quick";
  variants?: "active" | "idle";
  className?: string
}

const buttonIcon = {
  quick: { 
    active: <LightingIcon />, 
    idle: <LightingIcon />,
    bgActiveColor: "bg-primary-blue"
  },
  inbox: {
    active: <InboxIcon variants="active" />,
    idle: <InboxIcon variants="idle" />,
    bgActiveColor: "bg-indicator-purple"
  },
  task: {
    active: <TaskIcon variants="active" />,
    idle: <TaskIcon variants="idle" />,
    bgActiveColor: "bg-indicator-brown"
  },
};

const QuickButton: FC<QuickButtonValue> = ({ type, variants, className }) => {
  return (
    <button
      className={cn(
        variants === "active" ? buttonIcon[type].bgActiveColor : "bg-[#F2F2F2]",
        "rounded-full", className
      )}
    >
      {variants === "active" ? buttonIcon[type].active : buttonIcon[type].idle}
    </button>
  );
};

export default QuickButton;
