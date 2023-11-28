import { FC } from "react";
import Taskbar from "../../components/Taskbar";
import { useSearchParams } from "react-router-dom";
import { useQuickTab } from "../../hooks/useQuickTab";
import TodoList from "./TodoList";

const Todo: FC = () => {
  const { activeTab } = useQuickTab();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTask = searchParams.get("sortby") || "all";
  const setSelectedTask = (string: string) =>
    setSearchParams(`tab=${activeTab}&sortby=${string}`);

  return (
    <div>
      <Taskbar selectedTaskOnChange={setSelectedTask} />
      <TodoList selectedTask={selectedTask} /> 
    </div>
  );
};

export default Todo;
