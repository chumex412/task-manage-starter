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
      className="rounded-[5xp] bg-gray-100 p-8 shadow-lg transition-all duration-300"
      style={{
        borderBottom: completed ? "5px solid #2062a0" : "5px solid #ca9033"
      }}
    >
      <div className="task-content grid items-center gap-14">
        <p
          className="rounded-[20px] px-6 py-2 text-2xl font-semibold text-white"
          style={{
            backgroundColor: completed ? "#2062a0" : "#ca9033"
          }}
        >
          {completed ? "Done" : "Pending"}
        </p>
        <div>
          <p className="task-info flex flex-col">
            <label className="mb-4 text-3xl leading-[150%] text-secondary">
              {name}
            </label>
            <span className="text-2xl leading-[150%] text-primary">
              {new Date(startTime || "").toLocaleDateString(
                "en-Ng",
                utils.createDateFormatOptions("2-digit", "short", "numeric")
              )}
            </span>
          </p>
          <div className="task-action mt-8 flex gap-6">
            <button
              className="border-none bg-transparent p-0 text-2xl font-bold leading-[150%] text-accent"
              onClick={() => showModal(id || "")}
            >
              Edit
            </button>
            <button
              className="border-none bg-transparent p-0 text-2xl font-bold leading-[150%] text-red"
              onClick={() => remove(id || "")}
            >
              Delete
            </button>
          </div>
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
