import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorMsg = (props) => {
  return (
    <div className="error mt-4 ml-4 text-danger text-sm font-bold">
      {props.errorMsg && (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="mr-5 text-danger"
        />
      )}
      {props.errorMsg}
    </div>
  );
};

export default ErrorMsg;
