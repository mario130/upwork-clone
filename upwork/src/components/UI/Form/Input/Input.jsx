import { faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Input.css"

const Input = (props) => {
    return ( 
        <div className=" relative ">
          <label className=" text-xs" htmlFor={props.id}>{props.label}</label>
          <span className=" inline-flex  items-center px-3  text-gray-500  absolute left-0 top-3">
              {props.svg}
           
          </span>
          <div className="form-group my-3">
          <input
          id={props.id}
            type={props.type}
            className={" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent " + props.className }
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            min={props.minNum}
          />
          <div className="error mt-4 ml-4 text-danger text-sm font-bold">
            {props.errorMsg && <FontAwesomeIcon icon={faExclamationCircle} className="mr-5 text-danger"/>}
            {props.errorMsg}</div>
          </div>

        </div>
       
     );
}
 
export default Input;