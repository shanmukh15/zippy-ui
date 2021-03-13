import React from "react";
import MenuItem from "./MenuItem";

const UserElement = (props) => (
  <>
    <div className="max-w-xs text-sm" id="user-menu" onClick={() => props.setShowMobileMenu(!props.showMobileMenu)}>
      <div className="flex -mt-1 px-2 justify-evenly">
        <div>
          <div className="text-base font-medium text-primary-dark-3">
            Shanmukh Rao G
          </div>
          <div className="text-xs font-medium text-neutral-2">
            tom@example.com
          </div>
        </div>
        <div className="px-2 flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="userImage"
          />
        </div>
        <div className="self-center px-2">
          <span className="fa fa-angle-down text-primary-dark-3"></span>
        </div>
      </div>
    </div>
    <div
      className={`${props.showMobileMenu ? '' : 'invisible'} origin-top-left absolute right-xl mt-2 w-48 rounded-b-md shadow-lg py-1 bg-white`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <MenuItem isMobile icon="fa fa-id-card" label={"Profile"} />
      <MenuItem isMobile icon="fa fa-cogs" label={"Settings"} />
      <MenuItem isMobile icon="fa fa-sign-out-alt" label={"Logout"} />
    </div>{" "}
  </>
);

export default UserElement;
