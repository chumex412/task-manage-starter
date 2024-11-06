import { useState } from "react";
import TaskItem from "./TaskItem";

import EditFormModal from "../../components/Form/EditFormModal";
import { Task } from "../../entities/ui";
import { TodoTabType } from "../../entities/modules";

const Tasks = ({ tasks, tab }: { tasks: Task[]; tab: TodoTabType }) => {
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState("");

  const showModal = (id: string) => {
    setShow(true);
    setItemId(id);
  };

  const closeModal = () => {
    setShow(false);
  };

  // Handler to complete a task
  const completeTask = (id: string) => {
    const completedTask = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    // TODOD: CALL UPDATE TASK MUTATION
  };

  // Handler to remove a task
  const removeTaskHandler = (id: string) => {
    const filteredTask = tasks.filter((task) => task.id !== id);

    // TODO: CALL REMOVE TASK MUTATION
  };

  return (
    <section className="task-list grid gap-8 p-6">
      <section className="task-container grid gap-8 py-6">
        {!tasks.length ? (
          <p className="text-center text-2xl font-semibold leading-[150%]">
            No task available
          </p>
        ) : (
          <>
            <h3 className="mb-6 text-center text-3xl capitalize leading-[120%]">
              {tab} tasks
            </h3>
            {tasks.map((task) => {
              const { completed, name, id, startTime } = task;
              return (
                <TaskItem
                  key={id}
                  id={id}
                  name={name}
                  startTime={startTime}
                  completed={completed}
                  completeTask={completeTask}
                  remove={removeTaskHandler}
                  showModal={showModal}
                />
              );
            })}
          </>
        )}
      </section>

      <EditFormModal show={show} close={closeModal} tasks={tasks} id={itemId} />
    </section>
  );
};

export default Tasks;
