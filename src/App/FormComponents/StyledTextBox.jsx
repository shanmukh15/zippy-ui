import React from 'react';

const StyledTextBox = (props) => {
  return (
    <div className="focus-within:none my-1 transition-all duration-500 relative rounded p-1">
      <div className="-mt-2 absolute tracking-wider px-1 uppercase text-xs">
        <p>
          <label forname={props.label} className="bg-white text-gray-600 px-3">
            {props.label}<span className="text-secondary-2">{props.required ? '* ' : ''}</span>
          </label>
        </p>
      </div>
      <p>
        <input
          id={props.label}
          autoComplete="false"
          tabIndex="0"
          type={props.type || 'text'}
          className="py-3 px-3 rounded-md text-sm border-neutral-2 text-neutral-4 outline-none block h-full w-full max-w-xs"
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
        />
      </p>
    </div>
  );
};

export default StyledTextBox;
