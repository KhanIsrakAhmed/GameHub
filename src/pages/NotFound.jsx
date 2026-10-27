import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 p-5">
      <Helmet>
        <title>404 - GameHub</title>
      </Helmet>
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Game Not Found!</h2>
      <p className="text-gray-600 mb-6 text-center">
        Oops! The game you are looking for does not exist or has been removed.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
