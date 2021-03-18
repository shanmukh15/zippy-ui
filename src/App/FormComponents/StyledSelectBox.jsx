
import React from 'react';

const StyledSelectBox = (props) => {
  let optionsList = props.options?.length && props.options.map((item) => (<option key={item} value={item}>{item}</option>));

  return (
    <div className="focus-within:none my-1 transition-all duration-500 relative rounded p-1">
      <div className="-mt-2 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label forname={props.label} className="bg-white text-gray-600 px-3">
            {props.label}<span className="text-secondary-3">{props.required ? ' * ' : ''}</span>
          </label>
        </p>
      </div>
      <p>
        <select
          id={props.label}
          tabIndex={0}
          className="py-3 px-4 rounded-md text-sm text-neutral-4 outline-none block h-full w-full"
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
        >
            <option value={0} key={0}> Select a {props.label}</option>
            {optionsList}
        </select>
      </p>
    </div>
  );
};

export default StyledSelectBox;