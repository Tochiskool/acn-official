import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops a 404 Error Occured</h1>
      <p>
        <em>{error.stateText || error.message}</em>
      </p>
    </div>
  );
};

export default ErrorPage;
