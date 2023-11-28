import { ChangeEvent, FC } from "react";

interface TaskbarProps {
  selectedTask: string;
  selectedTaskOnChange: any;
}

const Taskbar: FC<TaskbarProps> = ({ selectedTask, selectedTaskOnChange }) => {
  const taskbarOnChange = (e: ChangeEvent<HTMLSelectElement>, selectedTaskOnChange: (arg0: string) => void) => {
    selectedTaskOnChange(e.target.value);
  };

  return (
    <div className="flex justify-between">
      <div>
        <select
          value={selectedTask}
          onChange={(e) => taskbarOnChange(e, selectedTaskOnChange)}
          className="border border-primary-gray-dark rounded-md p-2"
        >
          <option value="all" disabled>
            My Tasks
          </option>
          <option value="personal">Personal Errands</option>
          <option value="urgent">Urgent To-Do</option>
        </select>
      </div>
    </div>
  );
};

export default Taskbar;
