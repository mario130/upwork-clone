import React, { useState } from "react";

const ListItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center border-b border-navBorder pt-4 cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
        {/* user icon */}
        <div className="flex container mx-auto items-center pb-4">
          <h4 className="text-sm">{props.list.title}</h4>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:hidden mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {/* list */}
      {isOpen ? (
        <ul>
          {props.list.list.map((item) => (
            <li className="pt-4 ml-4 text-sm">{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default ListItem;
