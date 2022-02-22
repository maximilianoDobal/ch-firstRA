import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <Link to="/">Volver a la Home</Link>
    </div>
  );
};

export default NotFoundPage;
