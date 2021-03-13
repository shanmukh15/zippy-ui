import React, { Component } from "react";
import LoginForm from './LoginForm';

class LoginPage extends Component{

  onLogin(userType, userName, password, saveLocal) {
    const result = true; //make api call
    if (result && saveLocal && typeof Storage !== undefined) {
      localStorage.setItem("user", userName);
      localStorage.setItem("userType", userType);
    }
  }

  render(){
    return(
      <div className="container mx-auto min-w-full min-h-screen login-image">
        <LoginForm onLogin={this.onLogin} />
      </div>
    );
  }
}

export default LoginPage;