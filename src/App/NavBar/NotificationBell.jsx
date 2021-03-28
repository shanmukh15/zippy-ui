import React from "react";

const NotificationBell = (props) => {
  return (
    <div className="mx-2" onClick={() => props.onClick('home')}>
      <span className="text-primary-dark-2 hover:text-primary-light-3">
        <i className={`fas ${props.icon}`}></i>
      </span>
    </div>
  );
};

export default NotificationBell;
