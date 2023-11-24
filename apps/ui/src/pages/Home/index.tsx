import { FC } from "react";
import Sidebar from "../../components/Sidebar";
import Searchbar from "../../components/Searchbar";


const Home:FC = () => {
  return <div className="flex h-full">
    <Sidebar className="shrink-0" />
    <main className="w-full bg-[#333333]">
      <Searchbar />
    </main>
  </div>
}

export default Home;
