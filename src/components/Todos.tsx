import { FormEvent, useEffect, useState } from "react";
import { api } from "../utils/api";

enum TodoFilter {
  all,
  todo,
  done,
}

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const filterTasksBy = (tasks: Task[], filteredBy: TodoFilter) => {
  switch (filteredBy) {
    case TodoFilter.all:
      return tasks;
    case TodoFilter.todo:
      return tasks.filter((task) => !task.completed);
    case TodoFilter.done:
      return tasks.filter((task) => task.completed);
  }
};

function Todos() {
  const [newTask, setNewTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredBy, setFilterBy] = useState(TodoFilter.all);
  const filteredTasks = filterTasksBy(tasks, filteredBy);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskToCreate = {
      title: newTask,
      completed: false,
    };
    api.post("/todos", taskToCreate).then((resp) => {
      console.log(resp.data);
      setTasks((tasks) => [...tasks, resp.data]);
    });
    setNewTask("");
  };

  const toggle = (taskToUpdate: Task) => {
    api
      .put(`/todos/${taskToUpdate.id}`, {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      })
      .then(() => {
        setTasks((tasks) =>
          tasks.map((task) =>
            task.id === taskToUpdate.id
              ? { ...task, completed: !task.completed }
              : task
          )
        );
      });
  };

  const filterBy = (type: TodoFilter) => {
    setFilterBy(type);
  };

  useEffect(() => {
    setIsLoading(true);
    api.get("/todos").then((resp) => {
      setTasks(resp.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Todo List</h1>
      <form className="flex" onSubmit={onSubmit}>
        <input
          className="border box-content rounded-l-xl border-slate-400 py-2 px-4 flex-1"
          placeholder="What do you need to do?"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button className="border border-blue-500 rounded-r-xl bg-blue-500 text-white py-2 px-4 w-2/12">
          + Add
        </button>
      </form>
      <div className="flex justify-end">
        <div className="flex w-80 text-center bg-blue-100 p-1 rounded-lg justify-end">
          {[
            { label: "All", type: TodoFilter.all },
            { label: "⏳ Todo", type: TodoFilter.todo },
            { label: "✅ Done", type: TodoFilter.done },
          ].map((option) => (
            <button
              key={option.label}
              className={`rounded-lg px-4 py-2 w-1/3 ${
                filteredBy === option.type ? "bg-white" : ""
              }`}
              onClick={() => filterBy(option.type)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-2">
        <ul className="flex flex-col gap-2 pb-8">
          {isLoading && (
            <p className="text-center text-2xl mt-16 text-gray-400">
              Loading...
            </p>
          )}
          {!isLoading && filteredTasks.length === 0 && (
            <p className="text-center text-2xl mt-16 text-gray-400">
              📃 No Data
            </p>
          )}
          {filteredTasks.map((task) => (
            <li
              className="border rounded-xl w-full bg-white px-4 py-2"
              key={task.id}
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={task.completed}
                onChange={() => {
                  toggle(task);
                }}
              />
              <span
                className={`text-lg ${task.completed ? "line-through" : ""}`}
              >
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
