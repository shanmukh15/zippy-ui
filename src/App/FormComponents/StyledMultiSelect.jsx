import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

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
        boxShadow: 'none'
    }),
    control : (provided, state) => ({
        ...provided,
        padding: '.25rem .5rem',
        borderRadius: '0.375rem', 
        lineHeight: '1.25rem',
        borderColor: '#A6A6A6',
        maxWidth: '20rem'
    }),
    menu: (provided, state) => ({
      ...provided,
      zIndex: 12
    })
};

const StyledMultiSelect = (props) => {
  let optionsList = Object.assign({}, {options: props.options?.length && props.options.map((item) => (<option key={item} value={item}>{item}</option>))});

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
          isMulti
          name={props.label}
          components={animatedComponents}
          styles={customStyles}
          // onChange={(e) => props.onChange([e])}
          value={props.value}
          placeholder={<p>Select a {props.label}</p>}
          options={props.options}
          getOptionLabel={(option) => option}
          getOptionValue={(option) => option}
          menuPlacement="auto"
          onChange = { (value, actionMeta) => {
            const { action, removedValue, option} = actionMeta;
            switch(action) {
              case "pop-value":
              case "remove-value":
              case "deselect-option":
                value = value.filter((item) => item !== removedValue);
                break;
              case "select-option":
                value = [ ...props.value, option];
                break;
              case "clear":
                value = [];
                break;
            }
            props.onChange(value);
          }}
        />
      </div>
    </div>
  );
};

export default StyledMultiSelect;