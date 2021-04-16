import "./RadioBox.module.css"
const RadioBox = (props) => {
    return ( 
        <div className="flex items-center ">
    <input id={props.id} type="radio" name={props.name}  className="hidden"
    onBlur={props.onBlur}
    onChange={props.onChange}
    value={props.value}
    {...props}
    />
    <label htmlFor={props.id} className="w-full h-full flex items-center cursor-pointer text-xl">
     <div className="text-container p-2 w-full h-full  rounded border border-grey flex-no-shrink  text-gray-800 ">
         <div className="flex justify-end">
            <span className="bullet block rounded-full w-4 h-4 ring ring-hair "></span>
         </div>
        <div className="text-center p-3">
         <i className=" mb-5 inline-block">
             {props.svg}
         </i>
         <h4 className="font-bold text-sm">{props.value}</h4>
            <p className="text-sm hidden text-gray-500 md:block">{props.text}</p>
        </div>
         
         </div>
    
     </label>
   </div>
     );
}
 
export default RadioBox;