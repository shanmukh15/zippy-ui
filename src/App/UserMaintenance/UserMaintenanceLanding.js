import React, { Component } from "react";
import UserSearch from "./UserSearch";
import UserSearchItem from "./UserSearchItem";
import { PROJECT_STATUS, USER_TYPE } from "../constants";
import UserDetails from "./UserDetails";
import ProjectInfo from "./ProjectInfo";

class UserMaintenanceLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Sundaram Selvan",
          type: USER_TYPE.BUYER,
          projects: [
            {
              type: PROJECT_STATUS.CONTRACT,
              id: 2345,
              community: "Slyvn County",
              lot: "2567",
              status: "sold",
            },
            {
              id: 234325,
              type: PROJECT_STATUS.PROSPECT,
              community: "sarada enclave",
              status: "open",
            },
          ],
        },
      ],
    };
  }

  fetchUserList = (searchValue) => {
    searchValue?.length &&
      this.setState(() => ({
        searchResults: [
          {
            name: "Sundaram Selvan",
            type: USER_TYPE.BUYER,
            projects: [
              {
                type: PROJECT_STATUS.CONTRACT,
                id: 2345,
                community: "Slyvn County",
                lot: "2567",
                status: "In Progress",
              },
              {
                id: 234325,
                type: PROJECT_STATUS.PROSPECT,
                community: "sarada enclave",
                status: "open",
              },
            ],
          },
          { name: "Santroz ganeshan", type: USER_TYPE.EMLOYEE },
        ],
      }));
  };

  render() {
    return (
      <>
        <div className="lg:px-10">
          <div className="flex justify-between mx-5">
            <div className="">
              <UserSearch onSubmit={this.fetchUserList} />
            </div>
            <div className="my-1.5">
              <button className="hover:scale-100 text-primary-dark-2  hover:text-primary-light-3 ">
                <span className="border border-primary-dark-3 hover:border-primary-light-3 rounded-full p-2 ">
                  <i className="fas fa-user-plus"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="mt-5">
            <UserSearchItem results={this.state.searchResults} />
          </div>
        </div>
        <div>
          <UserDetails user={this.state.searchResults[0]} />
        </div>

        <div>
          <ProjectInfo type="new" project={this.state.searchResults[0].projects[0]} />
        </div>
      </>
    );
  }
}

export default UserMaintenanceLanding;
