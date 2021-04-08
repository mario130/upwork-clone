const Btn = (props) => {
    return ( 
<button type="button" className={props.className + " py-2 px-4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2  rounded-lg "}>
    {props.children}
        </button>

     );
}
 
export default Btn;