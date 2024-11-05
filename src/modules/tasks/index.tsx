import { useState, useEffect } from 'react'
import TaskItem from './TaskItem';

import EditFormModal from '../../components/Form/EditFormModal';
import { Task } from '../../entities/ui';

const Tasks = ({tasks}: {tasks: Task[]}) => {
  const [futureTask, setFutureTask] = useState<Task[]>([]);
  const [overdue, setOverdue] = useState<Task[]>([]);
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState('');

  useEffect(
    function () {
      const willDoTasks = tasks.filter(
        (task) => Date.now() <= new Date(task?.startTime || "").getTime()
      );

      const pastDeadlineTasks = tasks.filter(
        (task) => Date.now() > new Date(task?.startTime || "").getTime()
      );

      setFutureTask(willDoTasks);

      setOverdue(pastDeadlineTasks);
    },
    [tasks]
  );

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
      {!overdue.length || !futureTask.length ? (
        <p className="text-center text-2xl font-semibold leading-[150%]">
          No task available
        </p>
      ) : null}
      <section className="task-container grid gap-8 py-6">
        {!overdue.length ? null : (
          <>
            <h3 className="text-center text-3xl leading-[120%]">
              Overdue tasks
            </h3>
            {overdue.map((task) => {
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

      <section className="task-container grid gap-6 py-6">
        {!futureTask.length ? null : (
          <>
            <h3>Today's tasks</h3>
            {futureTask.map((task) => {
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
}

export default Tasks