import React from "react";
import { PROJECT_STATUS } from "../constants";

const UserDetails = (props) => {
  const prospectCount = props.user.projects.length
    ? props.user.projects.filter(
        (item) => item.type === PROJECT_STATUS.PROSPECT
      ).length
    : 0;
  const contractCount = props.user.projects.length
    ? props.user.projects.filter(
        (item) => item.type === PROJECT_STATUS.CONTRACT
      ).length
    : 0;

  const projectGenerator = (projects) => {
    if (!projects.length) {
      return "";
    }
    return projects.map((item) => (
      <div key={item.id} className={`bg-white min-h-12 p-2 m-2 text-sm border ${item.type === PROJECT_STATUS.PROSPECT ? 'border-dashed' : ''} rounded-md border-neutral-2`}>
        <div className="flex justify-between mx-2">
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
          <div className="self-end border rounded-full px-2 py-1 hover:bg-primary-dark-3 hover:text-white border-neutral-4 justify-items-end">
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
            <div className="self-center p-4 pl-1 mr-2">
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
              <span className="text-white capitalize"> user name </span>
              <span className="text-xs text-neutral-2"> (Buyer) </span>
              <div className="text-xs text-neutral-2 mt-1">{`${prospectCount} prospects, ${contractCount} contracts`}</div>
            </div>
          </div>
          <div className="sm:hidden self-center">
            <span className="fas block sm:hidden fa-pencil-alt text-lg"></span>
          </div>
          <div className="hidden border rounded-full px-2 py-1 sm:block self-center">
            <span className="fas fa-pencil-alt text-sm"></span>
            <span className="text-sm">{`  Edit Profile`}</span>
          </div>
        </div>
      </div>
      <div className="pt-2">
          {projectGenerator(props.user.projects)}
      </div>
      <div className="flex justify-around pt-3 pb-6">
          <span className={`fa fa-plus-circle fa-2x text-primary-dark-3`}></span>
      </div>
    </div>
  );
};

export default UserDetails;
