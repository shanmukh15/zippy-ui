import React, { memo } from "react";
import NoResultsPage from "../PageTemplate/NoResults";

const UserSearchItem = (props) => {
  const generateSearchResultItem = (items) => {
    return items.map((item) => (
      <div
        key={item.name}
        className="rounded-md shadow-md border-2 border-neutral-1 p-1.5 m-4"
      >
        <div className="flex justify-between">
          <div className="ml-2 min-h-12">
            <span className="text-base capitalize">{item.name}</span>
            <span className="text-sm text-gray-400">{` (${item.type})`}</span>
            { item.projects && <div className="text-sm text-gray-400">{`${item.projects.length} projects`}</div>}
            { !item.projects && <div className="text-sm text-gray-400">{' - '}</div>}
          </div>
          <div className="self-center mr-2">
            <span className="text-primary-dark-2 hover:text-primary-light-3 fas fa-angle-right"> </span>
          </div>
        </div>
      </div>
    ));
  };

  return props.results?.length ? (
    generateSearchResultItem(props.results)
  ) : (
    <NoResultsPage
      message={
        "Try searching with user details or Click ' + ' for new user creation"
      }
    />
  );
};

export default UserSearchItem;
