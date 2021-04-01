import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import UnKnownRoute from "../PageTemplate/UnKnownRoute";
import Logout from "../PageTemplate/Logout";
import LoginPage from "../Unauthenticated/LoginPage";
import HeadTemplate from "../PageTemplate/HeadTemplate";
import ForgotPassword from "../Unauthenticated/ForgotPassword";
import useRouterLogger from "./RouterLogger";

export const MainRouter = ({ match, history, location }) => {
  useEffect(() => {
    if (true) {
      console.log(
        "Printing from main router :: ",
        "Match: ",
        match,
        "History: ",
        history,
        "Location: ",
        location
      );
    }
  }, [match, location, history]);

  return (
    <Switch>
      <Route path="/Home">
        <HeadTemplate />
      </Route>
      <Route path="/Logout">
        <Logout />
      </Route>
      <Route exact path="/ForgotPassword">
        <ForgotPassword />
      </Route>
      <Route exact path="/Login">
        <LoginPage />
      </Route>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route>
        <UnKnownRoute />
      </Route>
    </Switch>
  );
};

export default MainRouter;
