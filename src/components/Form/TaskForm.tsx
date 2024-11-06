import { useState, useCallback, ChangeEvent, FormEvent } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Input from './Input'
import FormButton from "./FormButton";
import { utils } from "../../utils";

const TaskForm = () => {
  const [fields, setFields] = useState({
    task_name: "",
    do_at: ""
  });

  const [error, setError] = useState("");

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = target;

      setFields({ ...fields, [name]: value });
    },
    [fields]
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!utils.checkEmptyFields(fields)) {
      setError("All fields are required");
      return;
    }

    const data = {
      id: uuidv4(),
      name: fields.task_name,
      startTime: new Date(fields.do_at).toLocaleDateString(),
      completed: false
    };

    // TODO: ADD TASK MUTATION

    setFields({ task_name: "", do_at: "" });
  };

  return (
    <>
      <form
        className="task-form mx-auto grid w-full max-w-[650px] gap-6 rounded-[5px] p-8 shadow-lg"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Enter your to-do"
          label="To-do"
          value={fields.task_name}
          name="task_name"
          onChange={handleChange}
          error={error}
          required
        />
        <Input
          type="date"
          placeholder="Enter task deadline"
          label="To be done at"
          value={fields.do_at}
          name="do_at"
          onChange={handleChange}
          error={error}
          required
        />
        <FormButton
          type="submit"
          className="border-primary bg-primary text-accent"
          full_width
          value="Add Task"
          onClick={() => {}}
        />
      </form>
    </>
  );
};

export default TaskForm