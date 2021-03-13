import React, { Component } from "react";
import { hot } from "react-hot-loader";
import LoginPage from "./Unauthenticated/LoginPage";
import "./App.css";
import NavHeader from "./NavBar/NavHeader";
import HeroBar from "./HeroBar/HeroBar";

const breadcrumbs = ["test", "sers", "sersedf"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
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
              <main className="bg-white shadow-xl rounded-xl relative -inset-y-20 mx-4 md:-inset-y-22 md:mx-6 lg:-inset-y-24 lg:mx-10 xl:mx-14">
                <div className="lg:px-10 lg:py-5">
                  <div className="p-48"></div>
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
