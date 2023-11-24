import { FC } from "react";
import Sidebar from "../../components/Sidebar";
import Searchbar from "../../components/Searchbar";
import QuickButton from "../../components/QuickButton";


const Home:FC = () => {
  return <div className="flex h-full">
    <Sidebar className="shrink-0" />
    <main className="w-full bg-[#333333]">
      <Searchbar />
      <QuickButton type="quick" className="absolute bottom-6 right-6 p-1.5" variants="active" />
    </main>
  </div>
}

export default Home;
