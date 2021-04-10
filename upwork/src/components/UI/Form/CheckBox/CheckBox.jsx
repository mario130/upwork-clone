const CheckBox = (props) => {
    return ( 
        <label className="flex  mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-600 flex-shrink-0"
            />
            <span className="ml-2 text-gray-700">
                {props.children}
            </span>
          </label>
     );
}
 
export default CheckBox;