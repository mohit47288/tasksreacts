import React, { useState } from "react";

const Task3 = () => {
  const items = [
    "chandan",
    "nikita",
    
    
    "harsh",
    "mohit",
    "ayushi",
    "pooja",
    "subham",
    "amisha",
  ];
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex justify-left">
      <div className="bg-green-200 rounded-lg p-6 w-[500px] shadow-lg shadow-[#9a968b] flex flex-col items-center gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full p-2 rounded-md border border-gray-400"
        />
        <ul className="grid grid-cols-2 gap-4 w-full list-none px-6">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className=""
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task3;
