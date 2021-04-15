import './RadioInput.module.css'

const RadioInput = (props) => {
    return ( 
        <div className="flex items-center mr-4 mb-4">
    <input id={props.id} type="radio" name={props.name} className="hidden" 
    {...props}
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
     <span className="ball w-4 h-4 inline-block mr-3 rounded-full border border-grey"></span>
        {props.label}
    
     </label>
   </div>
     );
}
 
export default RadioInput;