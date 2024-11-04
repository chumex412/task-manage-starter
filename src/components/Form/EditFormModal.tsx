import { useState, useEffect, ChangeEvent, FormEvent } from "react";
// import { useUpdateTaskMutation } from '../../_services/taskServices';

import { utils } from "../../utils";
import Input from "./Input";
import FormButton from "./FormButton";
import { EditFormModalProps } from "../../entities/ui";

const EditFormModal = ({ show, close, tasks, id }: EditFormModalProps) => {
  // const [updateTask] = useUpdateTaskMutation()

  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState<Date | string | number>("");
  const [error, setError] = useState("");

  useEffect(
    function () {
      const task = tasks.find((task) => task.id === id);

      setTaskName(task?.name || "");
      setTaskDate(task?.startTime || "");
    },
    [id, tasks]
  );

  const handleTaskName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTaskName(target.value);
  };

  const handleTaskDate = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTaskDate(target.value);
  };

  const saveChanges = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !utils.checkEmptyFields({ taskName, taskDate: taskDate.toLocaleString() })
    ) {
      setError("All fields are required");
      return;
    }

    const tasksUpdate = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          name: taskName,
          doAt: new Date(taskDate).toLocaleDateString()
        };
      }

      return task;
    });

    // TODO: UPDATE TASK MUTATION
    close();
  };

  return (
    <div className={`modal-wrapper ${show ? "show-modal" : ""}`}>
      <div className="modal">
        <div className="close-btn-container" onClick={() => close()}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m12 13.4-4.9 4.9q-.3.3-.7.3-.4 0-.7-.3-.3-.3-.3-.7 0-.4.3-.7l4.9-4.9-4.9-4.9q-.3-.3-.3-.7 0-.4.3-.7.3-.3.7-.3.4 0 .7.3l4.9 4.9 4.9-4.9q.3-.3.7-.3.4 0 .7.3.3.3.3.7 0 .4-.3.7L13.4 12l4.9 4.9q.3.3.3.7 0 .4-.3.7-.3.3-.7.3-.4 0-.7-.3Z" />
            </svg>
          </button>
        </div>
        <h3>Edit task</h3>
        <div className="modal-body">
          <form onSubmit={saveChanges}>
            <Input
              placeholder="Enter your to-do"
              label="To-do"
              value={taskName}
              name="task_name"
              onChange={handleTaskName}
              error={error}
              required
            />
            <Input
              type="date"
              placeholder="Enter task deadline"
              label="To be done at"
              value={taskDate.toLocaleString()}
              name="do_at"
              onChange={handleTaskDate}
              error={error}
            />
            <FormButton
              type="submit"
              className="border-primary bg-primary text-accent"
              full_width
              value="Save"
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditFormModal;
