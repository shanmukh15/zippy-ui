import React from "react";
import { USER_TYPE } from "../constants";
import HomeRouter from "../Router/HomeRouter";
import MainRouter from "../Router/MainRouter";
import { withRouter, Link } from "react-router-dom";

const HomeSections = ({ item }) => {
  return (
    <div key={item.label} className="bg-white min-w-min max-w-xs shadow scale-95 my-3 hover:ring-neutral-1 hover:ring-1 rounded-md
    transition duration-600 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:shadow-2xl">
      <div className="flex justify-around h-36 md:h-36 lg:h-52">
        <div className={`${item.class} rounded-l-md w-28 md:w-28 lg:w-40`}></div>
        <div className="w-56 md:w-56 lg:w-72 px-2 py-1 ml-2 mt-1">
          <div className="font-title tracking-wider text-primary-light-3 text-base mb-2 lg:text-lg">{item.label}</div>
          <div className="font-extralight text-neutral-3 leading-snug text-sm lg:leading-normal lg:text-base">
            {item.context}
          </div>
        </div>
      </div>
    </div>
  );
};

const BuilderTemplate = ({ match }) => {
  return (
    <>
    <div className="flex flex-wrap justify-around bg-gray-50 rounded-xl">
      <Link to={`${match.url}/profiles`}>
        <HomeSections
          item={{
            label: "User Profiles",
            class: "profiles",
            context:
              "Click on me to add/search employees and buyers into the system. You can also view/update prospects and contracts of users.",
          }}
        />
      </Link>
      <Link to={`${match.url}/ConstructionStatus`}>
        <HomeSections
          item={{
            label: "Project Status",
            class: "constructionstatus",
            context:
              "Click me to update any ongoing project or contract status. You can also view the events/queries on the project",
          }}
        />
      </Link>
      <Link to={`${match.url}/Catalog`}>
        <HomeSections
          item={{
            label: "Project Catalog",
            class: "catalog",
            context:
              "Got any catalog's and documents to be uploaded to projects?",
          }}
        />
      </Link>
      <Link to={`${match.url}/DesignCenter`}>
        <HomeSections
          item={{
            label: "Design Center",
            class: "designcenter",
            context:
              "Head inside to enter into design session with a client. This gives an interactive customization options to add to contracts.",
          }}
        />
      </Link>
      </div>
    </>
  );
};

export default withRouter(BuilderTemplate);
