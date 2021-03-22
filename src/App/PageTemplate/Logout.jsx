import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

const Logout = () => {
  useEffect(() => {
    if (typeof Storage !== undefined) {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("userType");
    }
  });

  return (
    <>
      <div className="">
        You have been logged out. Click <Link to="/Login"> here </Link> to
        login again.
      </div>
    </>
  );
};

export default Logout;
