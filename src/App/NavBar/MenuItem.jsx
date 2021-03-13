import React from "react";

const MenuItem = (props) => {
  return (
    <a
      href="#"
      key={props.label}
      className={
        props.isMobile
          ? "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          : "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
      }
      role="menuitem"
    >
      <span className={`${props.icon} mx-2`}></span>
      {props.label}
    </a>
  );
};

export default MenuItem;
