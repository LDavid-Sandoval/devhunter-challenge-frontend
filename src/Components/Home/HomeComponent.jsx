import React from "react";
import { Navigate } from "react-router-dom";

const HomeComponent = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {token && <Navigate to='/profile' />}

      {!token && <Navigate to='/login' />}
    </>
  );
};

export default HomeComponent;
