import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import NavHeader from "../NavBar/NavHeader";
import HeroBar from "../HeroBar/HeroBar";
import UserMaintenanceLanding from "../UserMaintenance/UserMaintenanceLanding";
import HomeRouter from "../Router/HomeRouter";
import { USER_TYPE } from "../constants";

const breadcrumbs = [];

const HeadTemplate = ({ location, match }) => {
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [userType, setUserType] = useState("");
  const [userName, setUserName] = useState("");

  let pathBreaks;
  useEffect(() => {
    pathBreaks = location.pathname.split("/").slice(1);
    setBreadCrumbs(pathBreaks.length > 1 ? pathBreaks : []);
  }, location);

  useEffect(() => {
    if (typeof Storage !== undefined) {
      setUserName(sessionStorage.getItem("user"));
      setUserType(sessionStorage.getItem("userType"));
    }
  }, []);

  return (
    <>
      <div>
        <div className="container mx-auto min-w-full">
          <NavHeader userName={userName} userType={userType} />
          <HeroBar userName={userName} breadcrumbs={breadCrumbs} />
          <div className="template-shade min-h-screen">
            <main className="bg-white shadow-xl rounded-xl relative -inset-y-20 mx-0 md:-inset-y-22 md:mx-6 lg:-inset-y-24 lg:mx-10 xl:mx-14">
              <div className="">
                <div className="min-h-screen">
                  {userType !== USER_TYPE.BUYER && (
                    <HomeRouter userType={userType} />
                  )}
                  {userType === USER_TYPE.BUYER && <div> Coming soon </div>}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(HeadTemplate);
