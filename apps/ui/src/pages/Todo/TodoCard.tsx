import { FC } from "react";
import { TodoValue } from "./todo";
import ClockIcon from "../../assets/icons/ClockIcon";
import PenIcon from "../../assets/icons/PenIcon";
import { cn } from "../../utils";

const TodoCard: FC<TodoValue> = ({ id, title, body, due_date, checked }) => {
  return (
    <li key={id}>
      <form className="flex flex-col space-y-4 border-b border-primary-gray-dark py-5">
        <div className="flex">
          <input type="checkbox" checked={checked} />
          <h1
            className={cn(
              "font-semibold text-primary-gray-dark w-3/5",
              checked && "line-through text-slate-500"
            )}
          >
            {title}
          </h1>
          <div className="flex space-x-5">
            <p className="text-indicator-red">2 Days left</p>
            <p>{due_date}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5" />
            <input
              type="date"
              className="border border-primary-gray-dark px-3 py-1.5 rounded-md"
            />
          </div>
          <div className="flex items-center">
            <PenIcon className="w-5 h-5" />
            <input type="textarea" value={body} />
          </div>
        </div>
      </form>
    </li>
  );
};

export default TodoCard;
