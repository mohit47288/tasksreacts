import React from "react";
import { useParams } from "react-router-dom";

const TaskPage = ({ tasks }) => {
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="bg-#2c333f text-center p-6 shadow-md w-full min-h-screen mt-10">
      <h1 className="text-center text-4xl font-bold font-serif bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">{task.name}</h1>
      <div className="mt-20">
        {/* <p className="text-gray-600 mt-4">{task.description}</p> */}
        <div className="mt-6">{task.component}</div>{" "}
      </div>
    </div>
  );
};

export default TaskPage;
