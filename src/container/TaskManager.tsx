import TaskForm from "../components/Form/TaskForm";

import RenderContent from "../modules/tasks/RenderTaskContent";

const TaskContainer = () => {
  return (
    <section className="min-h-screen bg-off-white">
      <div>
        <header className="relative bg-secondary py-8 text-center text-4xl text-accent">
          <h2 className="">Task Manager</h2>
        </header>
        <div className="form-container my-8 p-6">
          <TaskForm />
        </div>
      </div>
      <section className="px-[1.5%] py-8 lg:px-[10%] lg:py-8">
        <RenderContent />
      </section>
    </section>
  );
};

export default TaskContainer;
