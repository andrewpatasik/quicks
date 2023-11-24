import { FC } from "react";
import { cn } from "../utils";

interface SidebarValue {
  className?: string;
}

const Sidebar: FC<SidebarValue> = ({ className }) => {
  return (
    <aside className={cn("bg-[#333333] w-[285px] border-r-[0.1rem] border-[#F2F2F2]", className)}>
    </aside>
  );
};

export default Sidebar;
