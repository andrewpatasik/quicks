import { FC } from "react";
import LupIcon from "../assets/icons/LupIcon";

const Searchbar: FC = () => {
  return (
    <div className="relative">
      <LupIcon className="w-[16px] h-[16px] absolute inset-y-6 left-8" />
      <input className="h-[3.625rem] w-full bg-[#4F4F4F] pl-16 appearance-none outline-none"></input>
    </div>
  );
};

export default Searchbar;
