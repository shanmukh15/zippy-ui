import React from 'react';

const NoResultsPage = (props) => {
    return ( <div className="text-gray-400 w-2/5 mx-24 my-16 h-48">
        <span className="text-justify">{props.message}</span>
        </div> );
}
 
export default NoResultsPage;