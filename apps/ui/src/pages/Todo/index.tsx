import { FC } from "react";
import Taskbar from "../../components/Taskbar";
import { useSearchParams } from "react-router-dom";
import { useQuickTab } from "../../hooks/useQuickTab";

const Todo:FC = () => {
  const { activeTab } = useQuickTab();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTask = searchParams.get("sortby") || "all";
  const setSelectedTask = (string: string) => setSearchParams(`tab=${activeTab}&sortby=${string}`)

  return <div>
    <Taskbar selectedTask={selectedTask} selectedTaskOnChange={setSelectedTask} />
    Todo
    {selectedTask === 'personal' ? 'personal' : selectedTask === 'urgent' ? 'urgent' : 'all'}
  </div>
}

export default Todo;
