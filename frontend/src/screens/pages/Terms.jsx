import { Link } from "react-router-dom";
import INFO from "../../data/user";
import SEO from "../../data/seo";
import { Helmet } from "react-helmet";

const Terms = () => {

  const logo = <span className="font-Outfit uppercase text-myBlue">
                  <span className="text-myOrange">Fit </span>
                  Platter
                </span>

            

  return (

    <>
      <Helmet>
        <title>{`Terms | ${INFO.main.title}`}</title>
        <meta name="description" content={SEO[5].description} />
        <meta name="keywords" content={SEO[5].keywords.join(", ")} />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-md">
          <h1 className="text-3xl font-Outfit text-myBlue mb-6">Terms and Conditions</h1>
          <p className="text-gray-700 mb-4">
            By using the {logo} platform, you agree to abide by the following terms and
            conditions. Your access to and use of the service is conditioned on your acceptance of
            and compliance with these terms.
          </p>
          <p className="text-gray-700 mb-4">
            {logo} reserves the right to update and change the terms of service without notice.
            Violation of any of the terms will result in the termination of your account.
          </p>
          <p className="text-gray-700 mb-4">
            You must not use the {logo} service for any illegal or unauthorized purpose nor may
            you, in the use of the service, violate any laws in your jurisdiction (including but not
            limited to copyright laws).
          </p>
          <p className="text-gray-700 mb-4">
            Your use of the {logo} platform is at your sole risk. The service is provided on an
            "as is" and "as available" basis without any warranty or condition, express, implied, or
            statutory.
          </p>
          <p className="text-gray-700">
            {logo} reserves the right to modify or terminate the service for any reason,
            without notice at any time.
          </p>
          <Link to="/" className="mt-5 inline-block rounded bg-myBlue px-4 py-2 font-Poppins font-semibold text-white hover:bg-[#FC6212]">
              Go back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Terms;
