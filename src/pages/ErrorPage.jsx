import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center">
            <div className="py-12 space-y-10">
                <h1 className="text-5xl font-bold">Oops<span>!</span></h1>
                <p>Something went wrong!</p>
            </div>
            <Link to="/" className="btn px-6 py-2 rounded">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;