
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="text-5xl  flex flex-col items-center justify-center text-center">
            <h2 className="text-red-500">404 Error!!</h2>
            
            <Link to="/" className="text-black font-medium text-3xl">Go back to home</Link>
        </div>
        </div>
    );
};

export default ErrorPage;