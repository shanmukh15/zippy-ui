import React, { memo } from "react";
import NoResultsPage from "../PageTemplate/NoResults";

const UserSearchItem = (props) => {
  const generateSearchResultItem = (items) => {
    return items.map((item) => (
      <div
        key={item.name}
        className="min-w-min max-w-xs shadow my-4 scale-95 mx-auto hover:ring-neutral-1 hover:ring-1 rounded-md
        transition duration-600 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:shadow-lg"
        onClick={() => props.onClick(item)}
      >
        <div className="flex justify-between h-24 w-80 lg:w-72 px-4 py-2">
          <div className="flex flex-col justify-evenly">
            <div className="">
              <span className="text-md lg:text-lg capitalize">
                {item.name}
              </span>
              <div>
                <span className="text-neutral-2 leading-tight text-sm lg:leading-normal lg:text-base">{` (${item.type})`}</span>
              </div>
            </div>

            {item.projects && (
              <div className="text-neutral-2 leading-tight text-sm lg:leading-normal lg:text-base">
                {`${item.projects.length} projects`}
              </div>
            )}
            {!item.projects && (
              <div className="text-neutral-2 leading-tight text-sm lg:leading-normal lg:text-base">
                {" - "}
              </div>
            )}
          </div>
          <div className="self-center w-2 mr-2">
            <span className="text-primary-dark-2 hover:text-primary-light-3 fas fa-angle-right">
              {" "}
            </span>
          </div>
        </div>
      </div>
    ));
  };
  return ( generateSearchResultItem(props.results) )
};

export default UserSearchItem;
