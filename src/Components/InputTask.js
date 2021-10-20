import React, { useState } from "react";

const InputTask = ({ list }) => {
  const [taskName, setTaskName] = useState("");

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  const onAddTask = () => {
    console.log(taskName);
  };
  return (
    <div>
      {console.log("list", list)}
      <input
        type="text"
        name="taskName"
        className="form-control"
        value={taskName}
        onChange={handleChange}
      />
      <button className="btn btn-primary" onClick={onAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default InputTask;
