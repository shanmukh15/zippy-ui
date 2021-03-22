import React, { useEffect } from "react";

const useRouterLogger = (props) => {
  const { match, location, history, debug=false } = props;

  useEffect(() => {
    if (debug) {
      console.log(
        "Match: ",
        match,
        "History: ",
        history,
        "Location: ",
        location
      );
    }
  }, [match, location, history]);
  return <Component  />;
};

export default useRouterLogger;
