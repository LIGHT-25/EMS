import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {

  // This maps condition → component
  const taskTypeToComponent = {
    active: AcceptTask,
    failed: FailedTask,
    completed: CompleteTask,
    newTask: NewTask,
  };

  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] flex items-start gap-4 mt-10 py-5 px-1 w-full"
    >
      {data.tasks.map((task, idx) => {
        const taskType = Object.keys(taskTypeToComponent).find(key => task[key]);
        const TaskComponent = taskTypeToComponent[taskType];

        return TaskComponent ? <TaskComponent key={idx} data={task} /> : null;
      })}
    </div>
  );
}

export default TaskList;
