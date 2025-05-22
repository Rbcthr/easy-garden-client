import React from "react";
import { Link, useLocation } from "react-router";
import errorImage from '../assets/error.png'

const ErrorPage = () => {
    const location = useLocation();
    console.log(location?.pathname);
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img className="w-2/3 mx-auto h-72 object-cover" src={errorImage} alt="" />
          <h2 className=" font-extrabold text-3xl dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this {location?.pathname} route page. 
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to={"/"}
            className="btn px-8 py-3 font-semibold rounded bg-green-500 text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
