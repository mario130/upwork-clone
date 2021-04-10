import './Radio.css'
const Radio = (props) => {
    return ( 
        <div className="flex items-center ">
    <input id={props.id} type="radio" name="radio"  className="hidden"/>
    <label htmlFor={props.id} className="flex items-center cursor-pointer text-xl">
     <span className="py-2 px-12  rounded border border-grey flex-no-shrink  text-gray-800 ">{props.children}</span>
    
     </label>
   </div>
     );
}
 
export default Radio;