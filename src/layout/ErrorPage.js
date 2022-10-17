import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="sm:container mx-auto px-2 md:px-6 py-16">
            <div className="max-w-md md:min-w-[450px] mx-auto text-center p-2">
                <h1 className="text-3xl font-serif font-bold text-slate-600 py-2">Oops!</h1>
                <p className="py-2">Sorry, an unexpected error has occurred.</p>
                <p className="py-2">
                    <i>{ error.statusText || error.message }</i>
                </p>
                <p>Go back to <span className="text-blue-600 font-semibold underline"><Link to="/">Home</Link></span> page</p>
            </div>
        </div>
    );
};

export default ErrorPage;