import React from 'react';
import { USER_TYPE } from '../constants';
import HomeRouter from '../Router/HomeRouter';
import MainRouter from '../Router/MainRouter';
import { Link } from 'react-router-dom';

const BuyerTemplate = (props) => {
    return ( <> 
        <Link to={"/profiles"} >Buyer Profiles</Link>
        <Link to={"/status"} >Construction Status</Link>
        <Link to={"/Catalog"} >Catalog</Link>
        <Link to={"/DesignCenter"} >Design session</Link>
    </> );
}
 
export default BuyerTemplate;