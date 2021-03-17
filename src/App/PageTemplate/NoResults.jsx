import React from 'react';

const NoResultsPage = (props) => {
    return ( <div className="text-gray-400 m-10 p-4">
        {props.message}
        </div> );
}
 
export default NoResultsPage;