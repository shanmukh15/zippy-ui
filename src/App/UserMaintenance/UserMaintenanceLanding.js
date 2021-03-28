import React, { useState } from "react";
import UserSearch from "./UserSearch";
import UserSearchItem from "./UserSearchItem";
import { PROJECT_STATUS, USER_TYPE } from "../constants";
import UserDetails from "./UserDetails";
import ProjectInfo from "./ProjectInfo";
import NoResultsPage from '../PageTemplate/NoResults';
import UserForm from "./UserForm";
import { USERS } from "../constants";
import { Link, withRouter } from "react-router-dom";

const UserMaintenanceLanding = ({ match, location, history }) => {
  const [searchResults, setSearchResults] = useState([]);
  console.log(match, location);
  const fetchUserList = (searchValue) => {
    console.log(searchValue.length);
    searchValue?.length && setSearchResults(USERS);
  };

  const navigateToUserDetails = (user) => {
    history.push(`/Home/profiles/user/${user.user.firstName}`, {user});
  }

  return (
    <>
      <div className="py-3 lg:px-10">
        <div className="flex justify-between mx-5">
          <div className="">
            <UserSearch onSubmit={fetchUserList} />
          </div>
          <div className="my-1.5">
            <Link to={"/Home/profiles/AddUser"}>
              <div className="hover:scale-100 text-primary-dark-2  hover:text-primary-light-3 ">
                <span className="border border-primary-dark-3 hover:border-primary-light-3 rounded-full p-2 ">
                  <i className="fas fa-user-plus"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
        {searchResults.length ? (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3">
            <UserSearchItem results={searchResults} onClick={navigateToUserDetails} />
          </div>
        ) : (
          <NoResultsPage
            message={
              "Try searching with user details or Click ' + ' for new user creation"
            }
          />
        )}
      </div>
    </>
  );
};

export default withRouter(UserMaintenanceLanding);
