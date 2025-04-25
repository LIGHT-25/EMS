import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] flex items-start gap-4 mt-10 py-5 px-1 w-full"
    >
     {data.tasks.map((e,idx)=>{
       if(e.active) {
          return  <AcceptTask key={idx} data={e}/>
       }
       if(e.failed) {
          return  <FailedTask key={idx} data={e}/>
       }
       if(e.completed) {
          return  <CompleteTask key={idx} data={e}/>
       }
       if(e.newTask) {
          return  <NewTask key={idx} data={e}/>
       }
     })}
    </div>
  );
}

export default TaskList;
