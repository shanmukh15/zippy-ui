import React from "react";
import { PROJECT_STATUS } from "../constants";
import { withRouter, Link } from 'react-router-dom';

const UserDetails = ({location, match, history}) => {
  const user = location.state.user || {};

  const prospectCount = user?.projects?.length
    ? user.projects.filter(
        (item) => item.type === PROJECT_STATUS.PROSPECT
      ).length
    : 0;
  const contractCount = user?.projects?.length
    ? user.projects.filter(
        (item) => item.type === PROJECT_STATUS.CONTRACT
      ).length
    : 0;

  const onEditUser = () => {
    history.push(`/Home/profiles/user/${user.user.firstName}/EditUser`, {user});
  }
  
  const onBackButtonClick = () => {
    history.goBack();
  }

  const onProjectClick = (item) => {
    history.push(`/Home/profiles/user/${user.user.firstName}/${item.id}`, {user, project: item});
  }

  const onAddNewProject = () => {
    history.push(`/Home/profiles/user/${user.user.firstName}/NewProject`, {user});
  }

  const projectGenerator = (projects) => {
    if (!projects.length) {
      return "";
    }
    return projects.map((item) => (
      <div key={item.id} className={`bg-white min-h-12 p-2 m-2 text-sm border ${item.type === PROJECT_STATUS.PROSPECT ? 'border-dashed' : ''} 
        rounded-md border-neutral-2 min-w-min max-w-xs shadow scale-95 mx-auto hover:ring-neutral-1 hover:ring-1
        transition duration-600 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:shadow-lg `}>
        <div className="flex justify-between h-32 w-80 p-2">
          <div className="flex text-neutral-4">
            <div className="">
              <span className="text-xs block leading-5 mr-2 text-neutral-3">
                Type :
              </span>
              {item.type === PROJECT_STATUS.CONTRACT && <span className="text-xs block leading-5 mr-2 text-neutral-3">
                Contract Id :
              </span>}
              {item.type === PROJECT_STATUS.PROSPECT && <span className="text-xs block leading-5 mr-2 text-neutral-3">
                Prospect Id :
              </span>}
              <span className="text-xs block leading-5 mr-2 text-neutral-3">
                Community :
              </span>
              <span className="text-xs block leading-5 mr-2 text-neutral-3">
                Lot :
              </span>
              <span className="text-xs block leading-5 mr-2 text-neutral-3">
                Status :
              </span>
            </div>
            <div className="">
              <span className="block lowercase"> {item.type} </span>
              {item.type === PROJECT_STATUS.CONTRACT && <span className="block lowercase"> {item.id} </span>}
              {item.type === PROJECT_STATUS.PROSPECT && <span className="block lowercase"> {item.id} </span>}
              <span className="block lowercase"> {item.community } </span>
              <span className="block lowercase"> { item.lot } </span>
              <span className="block capitalize"> { item.status } </span>
            </div>
          </div>
          <div onClick={() => onProjectClick(item)} className="self-end border rounded-full px-2 py-1 hover:bg-primary-dark-3 hover:text-white border-neutral-4 justify-items-end">
            <span className="text-sm hover:text-md">View / Update</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="">
      <div className="w-full h-26 text-white text-base bg-primary-dark-3">
        <div className="flex justify-between p-3 pr-5">
          <div className="flex">
            <div className="self-center p-4 pl-1 mr-2" onClick={onBackButtonClick}>
              <span className="fa fa-chevron-left text-lg"></span>
            </div>
            <div>
              <div className="px-1 rounded-full border bg-white border-white overflow-hidden">
                <span
                  className={"fas fa-user text-5xl text-primary-dark-3"}
                ></span>
              </div>
            </div>
            <div className="ml-2 mt-1">
              <span className="text-white capitalize"> {user.name} </span>
              <span className="text-xs text-neutral-2"> {`(${user.type})`} </span>
              <div className="text-xs text-neutral-2 mt-1">{`${prospectCount} prospects, ${contractCount} contracts`}</div>
            </div>
          </div>
          <div className="sm:hidden self-center" onClick={onEditUser}>
            <span className="fas block sm:hidden fa-pencil-alt text-lg"></span>
          </div>
          <div className="hidden border rounded-full px-2 py-1 sm:block self-center" onClick={onEditUser}>
            <span className="fas fa-pencil-alt text-sm"></span>
            <span className="text-sm">{`  Edit Profile`}</span>
          </div>
        </div>
      </div>
      <div className="pt-2 flex flex-wrap justify-evenly">
          {user?.projects && projectGenerator(user.projects)}
      </div>
      <div onClick={onAddNewProject} className="flex justify-around pt-3 pb-6">
          <span className={`fa fa-plus-circle fa-2x text-primary-dark-3`}></span>
      </div>
    </div>
  );
};

export default withRouter(UserDetails);
