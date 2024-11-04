import { useState, useEffect } from 'react'
import TaskItem from './TaskItem';

import EditFormModal from '../../components/Form/EditFormModal';
import { Task } from '../../entities/ui';

const Tasks = ({tasks}: {tasks: Task[]}) => {
  const [futureTask, setFutureTask] = useState<Task[]>([]);
  const [overdue, setOverdue] = useState<Task[]>([]);
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState('');

  useEffect(function () {
    const willDoTasks = tasks.filter(task => (Date.now() <= new Date(task.startTime).getTime()))

    const pastDeadlineTasks = tasks.filter(task => (Date.now() >new Date(task.startTime).getTime() ))

    setFutureTask(willDoTasks);

    setOverdue(pastDeadlineTasks)
  }, [tasks])

  const showModal = (id: string) => {
    setShow(true)
    setItemId(id)
  }

  const closeModal = () => {
    setShow(false)
  }

  // Handler to complete a task
  const completeTask = (id: string) => {
    const completedTask = tasks.map(task => {
      if(id === task.id) {
        return { ...task, completed: !task.completed }
      }

      return task
    })

    // TODOD: CALL UPDATE TASK MUTATION
  }

  // Handler to remove a task
  const removeTaskHandler = (id: string) => {
    const filteredTask = tasks.filter(task => task.id !== id)

    // TODO: CALL REMOVE TASK MUTATION
  }

  return (
    <section className='task-list grid gap-8 p-6'>
      <section className="task-container py-6 grid gap-8">
        {!overdue.length ? (
          <p className='text-2xl leading-[150%] font-semibold text-center'>You have no pending task</p>
          ) : (
            <>
              <h3 className='text-3xl leading-[120%] text-center'>Overdue tasks</h3>
              {
                overdue.map(task => {
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
                  )
                })
              }
            </>
          )
        }
      </section>

      <section className="task-container grid gap-6 py-6">
        {!futureTask.length ? (
          <p className='font-semibold text-2xl text-center leading-[150%]'>You have scheduled no task</p>
          ) : (
            <>
              <h3>Today's tasks</h3>
              {
                futureTask.map(task => {
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
                  )
                })
              }
            </>
          )
        }
      </section>
      <EditFormModal 
        show={show}
        close={closeModal}
        tasks={tasks}
        id={itemId}
      />
    </section>
  )
}

export default Tasks