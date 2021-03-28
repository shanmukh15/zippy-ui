import React from "react";

const LogoComponent = (props) => {
  if (!props.isFormLayout) {
    return (
      <div className="flex align-middle justify-center">
        <h1 className="font-title text-2xl text-primary-light-3 font-medium">Zippy</h1>
        <span className="inline-block mx-2 font-thin text-xl md:text-2xl">{"  |  "}</span>
        <img
          className="h-6 w-18 mt-1"
          src="./assests/Yurru_small_logo.png"
          alt="Zippy"
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col align-middle">
        <h1 className="font-title text-5xl text-primary-light-3 text-center font-medium">Zippy</h1>
        <div className="flex align-items-middle justify-center">
          <div className="mt-3 text-md">{"powered by   "}</div>
          <img
          className="h-7 w-18 mt-2"
          src="./assests/Yurru_small_logo.png"
          alt="Zippy"
        />
        </div>
      </div>
    );
  }
};
export default LogoComponent;
