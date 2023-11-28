import { ChangeEvent, FC } from "react";

interface TaskbarProps {
  selectedTaskOnChange: any;
}

const Taskbar: FC<TaskbarProps> = ({ selectedTaskOnChange }) => {
  const taskbarOnChange = (e: ChangeEvent<HTMLSelectElement>, selectedTaskOnChange: (arg0: string) => void) => {
    selectedTaskOnChange(e.target.value);
  };

  return (
    <div className="flex justify-between">
      <div>
        <select
          value={"all"}
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
      <div>
        <button className="rounded-md py-2 px-4 bg-primary-blue text-white">New Task</button>
      </div>
    </div>
  );
};

export default Taskbar;
