import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CheckItem.module.css'

const CheckItem = (props) => {
    return ( 
        <div className="flex items-center  mb-4">
    <input id={props.id} type="checkbox" name={props.name} className="hidden" 
    {...props}
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
        <div className="flex items-center">
     <span className="rounded-full py-1 px-3 inline-block mr-3 text-twilight  border border-grey bg-hair">
         <i className="plus">
        <FontAwesomeIcon icon={faPlus} className=" mr-1" size="sm" />

         </i>
         <i className="check hidden">
        <FontAwesomeIcon icon={faCheck} className=" mr-1 " size="sm"/>

         </i>

        
        <span className="">
        {props.label}
        </span>
     </span>
        </div>
    
     </label>
   </div>
     );
}
 
export default CheckItem;