import React from 'react';

const StyledToggledBox = (props) => {
    return ( 
<div className="flex flex-col">
  <label for="unchecked" className="mt-3 inline-flex items-center cursor-pointer">
    <span className="relative">
      <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
      <span className="absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out">
        <input id="unchecked" type="checkbox" className="absolute opacity-0 w-0 h-0" />
      </span>
    </span>
    <span className="ml-3 text-sm">Unchecked</span>
  </label>

  <label for="checked" className="mt-3 inline-flex items-center cursor-pointer">
    <span className="relative">
      <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
      <span className="absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-purple-600 transform translate-x-full">
        <input id="checked" type="checkbox" className="absolute opacity-0 w-0 h-0" />
      </span>
    </span>
    <span className="ml-3 text-sm">Checked</span>
  </label>
</div>

);
}
 
export default StyledToggledBox;