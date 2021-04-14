import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextArea = (props) => {
    return ( 
      <>
        <textarea
        className={props.className + " w-full p-4 border border-hair rounded-md resize-none hover:border-primary focus:border-primary outline-none"}	
        rows="6"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.name}
        onBlur={props.onBlur}
      />
      <div className="error mt-4 ml-4 text-danger text-sm font-bold">
      {props.errorMsg && <FontAwesomeIcon icon={faExclamationCircle} className="mr-5 text-danger"/>}
      {props.errorMsg}</div>
   </>
     );
}
 
export default TextArea;