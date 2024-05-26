import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-Outfit font-bold text-myBlue">404</h1>
          <p className="text-gray-600 font-Poppins">Oops! The page you are looking for could not be found.</p>
          <Link to="/" className="mt-4 inline-block rounded bg-myBlue px-4 py-2 font-Poppins font-semibold text-white hover:bg-[#FC6212]">
            Go back to Home
          </Link>
        </div>
      </div>
    );
  };
  
  export default NotFound;
  