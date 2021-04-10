const Separator = (props) => {
    return ( 
        <div className="border-b leading-0 w-full  my-10 border-hair">
          <span className="bg-white p-2 text-sm text-black-500 leading-0">
            {props.children}
          </span>
        </div>
     );
}
 
export default Separator;