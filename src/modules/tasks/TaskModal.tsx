import { TaskModalProps } from "../../entities/modules";
import { Task } from "../../entities/ui";

const TaskModal = ({ tasks, show, close }: TaskModalProps<Task[]>) => {
  const completedTask = (tasks || []).filter((task) => task.completed);
  const pendingTask = (tasks || []).filter((task) => !task.completed);

  return (
    <section
      className={`modal-wrapper ${show ? "show-modal" : ""} invisible fixed left-0 top-0 flex w-full scale-0 items-center justify-center overflow-hidden bg-black/60 p-6 opacity-0 transition-transform duration-300`}
    >
      <div className="modal w-full max-w-[600px] rounded-lg bg-off-white p-8">
        <div className="close-btn-container text-right">
          <button
            className="border-none bg-transparent p-0"
            onClick={() => close()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#03131e"
                d="m12 13.4-4.9 4.9q-.3.3-.7.3-.4 0-.7-.3-.3-.3-.3-.7 0-.4.3-.7l4.9-4.9-4.9-4.9q-.3-.3-.3-.7 0-.4.3-.7.3-.3.7-.3.4 0 .7.3l4.9 4.9 4.9-4.9q.3-.3.7-.3.4 0 .7.3.3.3.3.7 0 .4-.3.7L13.4 12l4.9 4.9q.3.3.3.7 0 .4-.3.7-.3.3-.7.3-.4 0-.7-.3Z"
              />
            </svg>
          </button>
        </div>

        <article className="py-6 text-3xl leading-[150%] text-secondary">
          <h4 className="mb-4 text-3xl leading-[120%] text-primary">
            Completed Task
          </h4>
          {completedTask.length && (
            <ul className="grid gap-3">
              {completedTask.map((task) => {
                return <p key={task.id}>{task.name}</p>;
              })}
            </ul>
          )}
        </article>
        <article className="py-6 text-3xl leading-[150%] text-secondary">
          <h4
            className="mb-4 text-3xl leading-[120%]"
            style={{ color: "#ca9033" }}
          >
            Pending Task
          </h4>
          <ul className="grid gap-3">
            {pendingTask.length &&
              pendingTask.map((task) => {
                return <p key={task.id}>{task.name}</p>;
              })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default TaskModal;
