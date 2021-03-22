import React from "react";

const NotificationBell = (props) => {
  return (
    <div className="mx-auto" onClick={() => props.onClick('home')}>
      <span className="fa-stack text-primary-dark-2 hover:text-primary-light-3">
        <i className="far fa-circle fa-stack-2x"></i>
        <i className={`fas ${props.icon} fa-stack-1x`}></i>
      </span>
    </div>
  );
};

export default NotificationBell;
