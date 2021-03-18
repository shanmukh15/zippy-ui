import React, { Component } from "react";
import { hot } from "react-hot-loader";
import LoginPage from "./Unauthenticated/LoginPage";
import "./App.css";
import NavHeader from "./NavBar/NavHeader";
import HeroBar from "./HeroBar/HeroBar";
import  UserMaintenanceLanding from './UserMaintenance/UserMaintenanceLanding';

const breadcrumbs = ["test", "sers", "sersedf"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true,
      
    };
  }
  render() {
    return (
      <div>
        {this.state.authenticated && (
          <div className="container mx-auto min-w-full">
            <NavHeader />
            <HeroBar breadcrumbs={breadcrumbs} />
            <div className="template-shade min-h-screen">
              <main className="bg-white shadow-xl rounded-xl relative -inset-y-20 mx-0 md:-inset-y-22 md:mx-6 lg:-inset-y-24 lg:mx-10 xl:mx-14">
                <div className="lg:py-3">
                  <div className="min-h-screen py-4 px-1">
                    <UserMaintenanceLanding />
                  </div>
                </div>
              </main>
            </div>
          </div>
        )}
        {!this.state.authenticated && <LoginPage />}
      </div>
    );
  }
}

export default hot(module)(App);
