import { Link } from 'react-router-dom';
import './styles/errorStyle.css';
import { useHistory } from "react-router-dom";

const ErrorComponent = () =>{
    let history = useHistory();
    return(
        <div className="all-error-page">
            <div className="error-component">
                <div className="row justify-content-center align-items-center">
                    <div className="error-msg text-center">
                        <div className="image"></div>
                        <h1 className="font-weight-bold my-4">This page doesn't exist</h1>
                        <p className="my-0">Please <Link onClick={history.goBack}><span className="return-home">return </span></Link> to the previous page, or visit our <Link to="/"><span className="return-home">home page</span></Link>.</p>
                        <p className="my-0">If the issue continues, visit our <span>Help Center</span>.</p>
                        <p className="my-5">Error 404 (OS)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ErrorComponent;