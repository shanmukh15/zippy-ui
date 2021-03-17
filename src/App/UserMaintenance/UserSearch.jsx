import React, { useState } from 'react';

const UserSearch = (props) => {
    const [ searchText, setSearchText] = useState('');

    return ( 
    <div className="relative text-black flex justify-between">
        <input type="search" name="search" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="bg-white rounded-l-full text-sm w-5/6 appearance-none focus:outline-none focus:shadow-outline" />
        <button type="submit" onClick={() => props.onSubmit(searchText)} className="px-3 bg-primary-dark-3 text-white hover:text-primary-light-3 border-r-2 rounded-r-full">
            <span className="fa fa-search"></span>
        </button>
    </div> );
};
 
export default UserSearch;