const CheckBox = (props) => {
    return ( 
        <label class="flex  mt-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-green-600 flex-shrink-0"
            />
            <span class="ml-2 text-gray-700">
                {props.children}
            </span>
          </label>
     );
}
 
export default CheckBox;