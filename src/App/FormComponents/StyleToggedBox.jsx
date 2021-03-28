import React from "react";

const StyledToggledBox = (props) => {
  return (
    <div className="flex flex-col">
      <label
        forname="checked"
        className="inline-flex items-center cursor-pointer"
      >
        <span className={`mr-3 text-sm ${props.checked ? 'text-neutral-2' : 'text-primary-dark-3 font-medium'}`}>{props.label1}</span>
        <span className="relative">
          <span className="block w-10 h-6 bg-primary-dark-3 rounded-full shadow-inner"></span>
          <span className={`absolute block w-4 h-4 mt-1 ${props.checked ? "ml-1": "-ml-3"} rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-primary-light-3 transform translate-x-full`}>
            <input
              type="checkbox"
              name={props.name}
              tabIndex={0}
              checked={props.checked}
              onChange={(val) => props.onChange(val.target.checked)}
              className="absolute opacity-0 w-0 h-0"
            />
          </span>
        </span>
        <span className={`ml-3 text-sm ${props.checked ? 'text-primary-dark-3 font-medium' : 'text-neutral-2'}`}>{props.label2}</span>
      </label>
    </div>
  );
};

export default StyledToggledBox;
