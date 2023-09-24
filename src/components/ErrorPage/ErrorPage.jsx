
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="text-5xl flex items-center justify-center text-center">
            <h2 >Oops something wrong!!! </h2>
            <Link to="/">Go back to home</Link>
        </div>
        </div>
    );
};

export default ErrorPage;