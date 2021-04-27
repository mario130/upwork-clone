const Select = (props) => {
  return (
    <div className="relative w-full border border-gray-300 rounded-lg ">
      <select 
      name={props.name}
       className={ props.className + " text-gray-600 appearance-none  inline-block py-3 pl-3 pr-8 rounded leading-tight w-full border border-gray-300 focus:outline-none"}
       onChange={props.onChange}
       onBlur={props.onBlur}
       value={props.value}
       >
         {props.children}
    
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          width="18"
          height="18"
          fill="#e5e7eb"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          aria-hidden="true"
          role="img"
        >
          <path d="M.37 5l5.75 5.92a1.23 1.23 0 001.78 0L13.64 5a1.31 1.31 0 000-1.83 1.27 1.27 0 00-.86-.37H1.25A1.27 1.27 0 000 4a1.28 1.28 0 00.37 1z"></path>
        </svg>{" "}
      </div>
    </div>
  );
};

export default Select;
