const AppleBtn = () => {
    return ( 
        <button
          type="button"
          className="btn w-full focus:outline-none focus:shadow-outline border-black-800 border h-10"
        >
          <div className=" flex items-center justify-center">
            <span className="mr-3 w-3 block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                aria-hidden="true"
                role="img"
              >
                <path d="M13.017 10.271c-.329.729-.486 1.054-.91 1.698-.59.9-1.423 2.02-2.455 2.029-.918.008-1.153-.597-2.397-.59-1.244.007-1.504.6-2.42.592-1.033-.01-1.822-1.02-2.413-1.92C.77 9.566.597 6.614 1.616 5.046 2.341 3.931 3.483 3.28 4.557 3.28c1.094 0 1.78.599 2.685.599.877 0 1.412-.6 2.676-.6.956 0 1.969.52 2.69 1.419-2.364 1.296-1.98 4.672.41 5.574z"></path>
                <path d="M8.959 2.273C9.418 1.683 9.767.85 9.64 0 8.89.052 8.013.53 7.5 1.151c-.466.565-.85 1.403-.7 2.217.82.026 1.667-.464 2.159-1.095z"></path>
              </svg>
            </span>
            <span> Continue with Apple</span>
          </div>
        </button>
     );
}
 
export default AppleBtn;