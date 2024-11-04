
import { useState } from 'react'
import TaskForm from '../components/Form/TaskForm'
import { Task } from '../entities/ui'
import RenderContent from '../modules/tasks/RenderTastContent'
import { TodoTabType } from '../entities/modules'

const TaskContainer = () => {
  const [todoTab, setTodoTab] = useState<TodoTabType>("All");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
  const [tasks, setTasks] = useState<Task[]>([])

  
  const sortTasks = (tab: "All" | "Completed" | "Pending") => {
    if(tab === 'All') {
      setFilteredTasks(tasks)
    }

    if(tab === 'Completed') {
      setFilteredTasks(tasks.filter(task => task.completed))
    }

    if(tab === 'Pending') {
      setFilteredTasks(tasks.filter(task => !task.completed))
    }

    setTodoTab(tab)
  }

  return (
    <section className='min-h-screen bg-off-white'>
      <div>
        <header className='text-center bg-secondary text-accent py-8 text-4xl relative'>
          <h2 className=''>Task Manager</h2>
        </header>
        <div className="form-container my-8 p-6">
          <TaskForm />
        </div>
      </div>
      <section className='py-8 px-[1.5%] lg:py-8 lg:px-[10%]'>
        <RenderContent todoTab={todoTab} isLoading={false} isSuccess={true} filteredTasks={filteredTasks} sortTasks={sortTasks} />
      </section>
    </section>
  )
}

export default TaskContainer