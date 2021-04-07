const Input = (props) => {
    return ( 
        <div className=" relative ">
          <span className=" inline-flex  items-center px-3  text-gray-500  absolute left-0 top-3">
              {props.svg}
           
          </span>
          <div className="form-group my-3">
          <input
            type={props.type}
            className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 pl-10 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            name={props.name}
            placeholder={props.placeholder}
          />
          <div className="error">{props.errorMsg}</div>
          </div>

        </div>
       
     );
}
 
export default Input;