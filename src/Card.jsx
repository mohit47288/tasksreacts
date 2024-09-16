import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const card = ({  link }) => {
  return (
    <div className="">
      
      <div className="bg-white-100 rounded-lg p-6 flex flex-col items-center w-[600px] gap-3 shadow-lg shadow-[#9a968b]">
        {/* <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-red-300 mt-2 ">{description}</p> */}
        <Link
          to={link}
          className="mt-4 text-orange-500 bg-green-300 p-2 rounded-md"
        >
          click Here...
        </Link>
      </div>
    </div>
  );
};

export default card;
