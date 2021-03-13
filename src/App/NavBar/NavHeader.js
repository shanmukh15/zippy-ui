import React, { useState } from "react";
import LogoComponent from "./LogoComponent";
import MenuItem from "./MenuItem";
import NotificationBell from "./NotificationBell";
import UserElement from "./UserElement";

const TempMenuItems = [
  { label: "Dashboard", active: true },
  { label: "Projects", active: false },
  { label: "Settings", active: false },
];
const NavHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-w-full shadow-md border-neutral-4 border-b-0 fixed z-50">
      <nav className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <LogoComponent />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="border-l-2 border-neutral-1 p-2">
                  <NotificationBell icon="fa-home" />
                </div>
                <div className="border-l-2 border-neutral-1 p-2">
                  <NotificationBell icon="fa-bell" />
                </div>
                <div className="border-l-2 border-r-2 border-neutral-1 p-2">
                  <UserElement showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
                </div>
              </div>
            </div>
            <div className="-mr-2 py-4 sm:hidden">
              <div onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <span
                  className={`fa-stack ${
                    showMobileMenu
                      ? "text-primary-light-3"
                      : "text-primary-dark-3"
                  } hover:text-primary-light-1`}
                >
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className={`fas fa-bars fa-stack-1x fa-inverse`}></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          {showMobileMenu && (
            <div className="pt-4 pb-3 border-t border-gray-500">
              <div className="flex justify-between border-b-2 pb-2">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="userImage"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-primary-dark-3">
                      Shanmukh Rao G
                    </div>
                    <div className="text-sm font-medium leading-none text-neutral-2">
                      tom@example.com
                    </div>
                  </div>
                </div>
                <div className="mr-2">
                  <NotificationBell icon="fa-bell" />
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <MenuItem isMobile icon="fa fa-id-card" label={"Profile"} />
                <MenuItem isMobile icon="fa fa-cogs" label={"Settings"} />
                <MenuItem isMobile icon="fa fa-sign-out-alt" label={"Logout"} />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavHeader;
