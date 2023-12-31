import { FC } from "react";
import Sidebar from "../../components/Sidebar";
import Searchbar from "../../components/Searchbar";
import QuickTab from "../../components/QuickTab";
import Modal from "../../components/Modal";

const Home: FC = () => {
  return (
    <div className="flex h-full">
      <Sidebar className="shrink-0" />
      <main className="relative w-full bg-[#333333]">
        <Searchbar />
        <Modal />
        <QuickTab />
      </main>
    </div>
  );
};

export default Home;
