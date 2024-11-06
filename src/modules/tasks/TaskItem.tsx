import { TaskItemProps } from "../../entities/ui";
import { utils } from "../../utils";

const TaskItem = ({
  id,
  name,
  startTime,
  completed,
  completeTask,
  remove,
  showModal
}: TaskItemProps) => {
  return (
    <article
      className="rounded-[5px] bg-gray-100 p-4 shadow-lg transition-all duration-300"
      style={{
        borderBottom: completed ? "5px solid #2062a0" : "5px solid #ca9033"
      }}
    >
      <div className="task-content grid items-center gap-4 lg:gap-8">
        <p
          className="rounded-[20px] px-6 py-2 text-lg font-semibold text-white"
          style={{
            backgroundColor: completed ? "#2062a0" : "#ca9033"
          }}
        >
          {completed ? "Done" : "Pending"}
        </p>

        <p className="task-info flex flex-col">
          <label className="mb-3 text-2xl leading-[120%] text-secondary">
            {name?.charAt(0).toUpperCase()}
            {name?.slice(1)}
          </label>
          <span className="text-lg leading-[150%] text-primary">
            {new Date(startTime || "").toLocaleDateString(
              "en-US",
              utils.createDateFormatOptions("2-digit", "short", "numeric")
            )}
          </span>
        </p>
        <div className="task-action flex gap-3">
          <button
            className="border-none bg-transparent p-0 text-lg font-bold leading-[150%] text-accent"
            onClick={() => showModal(id || "")}
          >
            Edit
          </button>
          <button
            className="border-none bg-transparent p-0 text-lg font-bold leading-[150%] text-red"
            onClick={() => remove(id || "")}
          >
            Delete
          </button>
        </div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => completeTask(id || "")}
        />
      </div>
    </article>
  );
};

export default TaskItem;
