import React, { useState } from "react";

const Task2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-left">
      {" "}
      <div className="">
        <span className="bg-orange-200 px-4 py-1 rounded-lg text-orange-500">
          {count}
        </span>
        <div className="flex gap-5 ">
          <button
            className=" mt-5 text-orange-400 bg-orange-200 p-2 rounded-md"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
          <button
            className=" mt-5 text-orange-400 bg-orange-200 p-2 rounded-md"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
            className=" mt-5 text-orange-400 bg-orange-200 p-2 rounded-md"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task2;
