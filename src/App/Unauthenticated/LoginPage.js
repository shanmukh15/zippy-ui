import React, { Component } from "react";
import { Redirect, Router, withRouter } from "react-router-dom";
import LoginForm from './LoginForm';


const LoginPage = (props) => {
  const {history} = props;
  
  const onLogin = (userType, userName, password, saveLocal) => {
    const result = true;
    if (result && typeof Storage !== undefined) {
      sessionStorage.setItem("user", userName);
      sessionStorage.setItem("userType", userType);
    }
    history.push("/Home");
  };

  return (
      <div className="container mx-auto min-w-full min-h-screen login-image">
        <LoginForm onLogin={onLogin} />
      </div>
    );
}
 
export default withRouter(LoginPage);
