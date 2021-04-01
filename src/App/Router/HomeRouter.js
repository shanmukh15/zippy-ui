import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import UnKnownRoute from "../PageTemplate/UnKnownRoute";
import Logout from "../PageTemplate/Logout";
import LoginPage from "../Unauthenticated/LoginPage";
import UserForm from "../UserMaintenance/UserForm";
import ForgotPassword from "../Unauthenticated/ForgotPassword";
import { USER_TYPE } from "../constants";
import BuyerTemplate from "../PageTemplate/BuyerTemplate";
import BuilderTemplate from "../PageTemplate/BuilderTemplate";
import UserMaintenanceLanding from "../UserMaintenance/UserMaintenanceLanding";
import UserDetails from "../UserMaintenance/UserDetails";
import ProjectInfo from "../UserMaintenance/ProjectInfo";
import CatalogLanding from "../ProjectCatalog/CatalogLanding";
import ConstructionStatus from "../ConstructionStatus/ConstructionStatus";

export const HomeRouter = ({ match, history, location, userType }) => {
  useEffect(() => {
    if (true) {
      console.log("Printing from Home Router :: ",
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
    <>
      {userType === USER_TYPE.BUYER && (
        <Switch>
          <Route
            exact
            path={`${match.path}/`}
            render={(props) => <BuyerTemplate {...props} />}
          />
          <Route exact path={`${match.path}/Contract`}>
            <LoginPage />
          </Route>
          <Route>
            <UnKnownRoute />
          </Route>
        </Switch>
      )}
      {userType !== USER_TYPE.BUYER && (
        <>
          <Switch>
            <Route exact path={`${match.path}/`}>
              <BuilderTemplate />
            </Route>
            <Route exact path={`${match.path}/profiles/AddUser`}>
              <UserForm />
            </Route>
            <Route exact path={`${match.path}/profiles/user/:name`} render={ (props) => (<UserDetails />)} />
            <Route exact path={`${match.path}/profiles/user/:name/EditUser`} render={ (props) => (<UserForm />)} />
            <Route exact path={`${match.path}/profiles/user/:name/:id`} render={ (props) => (<ProjectInfo />)} />
            <Route exact path={`${match.path}/profiles/user/:name/NewProject`} render={ (props) => (<ProjectInfo />)} />
            <Route path={`${match.path}/DesignCenter`}>
              <ForgotPassword />
            </Route>
            <Route path={`${match.path}/Catalog`}>
              <CatalogLanding userType={() => userType} />
            </Route>
            <Route path={`${match.path}/ConstructionStatus`}>
              <ConstructionStatus userType={() => userType} />
            </Route>
            <Route path={`${match.path}/profiles`}>
              <UserMaintenanceLanding />
            </Route>
            <Route>
              <UnKnownRoute />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
};

export default withRouter(HomeRouter);
