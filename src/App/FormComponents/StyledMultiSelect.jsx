import React, { Component } from 'react'
import Select from 'react-select'

const customStyles= {
    valueContainer : (provided, state) => ({
        ...provided,
        fontSize: '0.875rem',
        color: '#262626',
    }),
    placeholder : (provided, state) => ({
        ...provided,
        fontSize: '0.875rem',
        color: '#262626',
    }),
    input : (provided, state) => ({
        ...provided,
        fontSize: '0.875rem',
        color: '#262626',
    }),
    control : (provided, state) => ({
        ...provided,
        padding: '.25rem .5rem',
        borderRadius: '0.375rem', 
        lineHeight: '1.25rem',
        borderColor: '#A6A6A6',
        maxWidth: '20rem'
    })
};

const StyledMultiSelect = (props) => {
  let optionsList = props.options?.length && props.options.map((item) => (<option key={item} value={item}>{item}</option>));

  return (
    <div className="focus-within:none transition-all duration-500 relative rounded p-1">
      <div className="-mt-2 absolute tracking-wider px-1 uppercase text-xs z-10">
        <p>
          <label forname={props.label} className="bg-white text-gray-600 px-3">
            {props.label}<span className="text-secondary-2">{props.required ? '* ' : ''}</span>
          </label>
        </p>
      </div>
      <div>
        <Select
          id={props.label}
          tabIndex={0}
          styles={customStyles} //className="py-3 px-4 rounded-md text-sm text-neutral-4 border-neutral-2 outline-none block h-full w-full max-w-xs"
          // onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
          options={props.options}
        />
      </div>
    </div>
  );
};

export default StyledMultiSelect;