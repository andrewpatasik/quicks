import { FC, useEffect, useState } from "react";
import todo from "../../data/todo.json";
import { TodoValue } from "./todo";

interface TodoListProps {
  selectedTask: string;
}

const TodoList: FC<TodoListProps> = ({ selectedTask }) => {
  const [todoList, setTodoList] = useState<TodoValue[] | []>([]);

  useEffect(() => {
    setTodoList(todo);
  }, []);

  const filterTodoList = (collection: TodoValue[]) => {
    switch (selectedTask) {
      case "personal":
        return collection.filter((task) => task.category === "personal");
      case "urgent":
        return collection.filter((task) => task.category === "urgent");
      default:
        return collection;
    }
  };

  const renderTodoTask = () => {
    let tasks = filterTodoList(todoList);

    return tasks.map((task, index) => <div key={index}>{task.body}</div>);
  };

  return (
    <section>
      <ul>{renderTodoTask()}</ul>
    </section>
  );
};

export default TodoList;