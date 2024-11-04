import { useState, useCallback, ChangeEvent, FormEvent } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Input from './Input'
import FormButton from './FormButton'
// import { useAddTaskMutation } from '../../_services/taskServices'
import { utils } from '../../utils';

const TaskForm = () => {
  const [fields, setFields] = useState({
    task_name: "",
    do_at: ""
  })

  const [error, setError] = useState("")

  const handleChange = useCallback(({target}: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFields({ ...fields, [name]: value })
  }, [fields])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!utils.checkEmptyFields(fields)) {
      setError("All fields are required")
      return 
    }

    const data = {
      id: uuidv4(),
      name: fields.task_name, 
      startTime: new Date(fields.do_at).toLocaleDateString(), 
      completed: false
    }

    // addTask(data)

    setFields({task_name: "", do_at: ""})
  }

  return (
    <>
      <form className="task-form max-w-[650px] w-full mx-auto grid gap-6 p-8 shadow-lg rounded-[5px]" onSubmit={handleSubmit}>
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
          className='text-accent border-primary bg-primary'
          full_width
          value="Add Task"
          onClick={() => {}}
        />
      </form>
    </>
  )
}

export default TaskForm