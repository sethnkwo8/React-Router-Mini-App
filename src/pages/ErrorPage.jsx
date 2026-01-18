import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="p-12">
            <h1 className="text-2xl font-bold">Error</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}