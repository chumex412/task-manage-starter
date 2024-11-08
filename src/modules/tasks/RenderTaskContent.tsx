import { useState } from "react";
import Tasks from ".";
import Loader from "../../components/Loader";
import { TodoTabType } from "../../entities/modules";
import { Task } from "../../entities/ui";

const todoTabs: TodoTabType[] = ["All", "Completed", "Pending"];

const RenderContent = () => {
  // Replace the lines below with the variables destructured from API query
  const tasks: Task[] = [];
  const isLoading = false;
  const isSuccess = true;
  //
  const [todoTab, setTodoTab] = useState<TodoTabType>("All");
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>();

  const sortTasks = (tab: "All" | "Completed" | "Pending") => {
    setTodoTab(tab);

    if (!tasks) return;

    if (tab === "All") {
      setFilteredTasks(null);
    }

    if (tab === "Completed") {
      setFilteredTasks(tasks.filter((task) => task.completed));
    }

    if (tab === "Pending") {
      setFilteredTasks(tasks.filter((task) => !task.completed));
    }
  };

  return isLoading ? (
    <div className="flex h-[50vh] items-center justify-center text-[30px]">
      <Loader />
    </div>
  ) : isSuccess ? (
    <>
      <section className="tab-container flex justify-center gap-8 text-center">
        {todoTabs.map((tab) => {
          return (
            <button
              key={tab}
              onClick={() => sortTasks(tab)}
              className={`cursor-pointer rounded-none border-0 border-b-2 bg-transparent ${todoTab === tab ? "border-accent text-accent focus:border-accent" : "border-secondary text-secondary focus:border-primary"} focus-within::border-0 focus:border-0 focus:border-b focus:outline-none`}
            >
              {tab}
            </button>
          );
        })}
      </section>
      <section className="mt-8">
        <Tasks tasks={filteredTasks || tasks} tab={todoTab} />
      </section>
    </>
  ) : (
    <p className="text-center text-2xl leading-[150%]">Failed to fetch</p>
  );
};

export default RenderContent;
